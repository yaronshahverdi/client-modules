import { BaseSystemConfig } from '../props';
import {
  AbstractTheme,
  Handler,
  PropertyConfig,
  ThematicProps,
} from './config';
import { PseudoSelectors } from './properties';
import { UnionToIntersection, WeakRecord } from './utils';

export interface CSSObject {
  [key: string]: string | number;
}

/** A Group of Property Configurations EG: 'fontSize' | 'fontFamily' etc. */
interface GroupConfig<Theme extends AbstractTheme> {
  [key: string]: PropertyConfig<Theme>;
}

/** A collection of Property Groups EG: 'typography' | 'layout' etc.  */
export interface SystemConfig<Theme extends AbstractTheme> {
  [key: string]: GroupConfig<Theme>;
}

/** Merge a user defined configuration on top of the base configuration to derive defaults correctly */
type MergeConfig<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> = BaseSystemConfig & Config;

/**
 * This is an intermediate type to derive other more complex properties from for the system return type.
 * It infers the type signatures of all individual stylefunctions that exist within a property group and
 * all of their possible props/
 */
type SystemProperties<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> = {
  /** All possible property handlers based off the MergedConfiguration  */
  [PropGroup in keyof MergeConfig<Theme, Config>]: {
    handlers: {
      [Property in keyof MergeConfig<Theme, Config>[PropGroup]]: Handler<
        ThematicProps<Theme, MergeConfig<Theme, Config>[PropGroup][Property]>
      >;
    };
    /** All possible prop type signatures  */
    props: {
      [Property in keyof MergeConfig<Theme, Config>[PropGroup]]: ThematicProps<
        Theme,
        MergeConfig<Theme, Config>[PropGroup][Property]
      >;
    };
  };
};

/**
 * The union of all possible props in `SystemProperties`
 */
export type AllSystemProps<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> = UnionToIntersection<
  {
    [PropGroup in keyof SystemProperties<Theme, Config>]: UnionToIntersection<
      SystemProperties<
        Theme,
        Config
      >[PropGroup]['props'][keyof SystemProperties<
        Theme,
        Config
      >[PropGroup]['props']]
    >;
  }[keyof SystemProperties<Theme, Config>]
>;

/**
 * The return type for `system`
 * variant: a function to create aliased combinations of all system props.
 * properties: a map of all individual style functions.

 * And a map of all composed handlers from each top level system group.
 */

export interface Variant<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> {
  /** Customizable prop interface */
  <Prop extends Readonly<string>, Keys extends string>(config: {
    prop: Prop;
    variants: Readonly<
      Record<
        Keys,
        AllSystemProps<Theme, Config> &
          PseudoSelectors<AllSystemProps<Theme, Config>>
      >
    >;
  }): (props: WeakRecord<Prop, Keys> & { theme?: Theme }) => CSSObject;
  /** Default `variant` interface */
  <Keys extends string>(
    config: Readonly<
      Record<
        Keys,
        AllSystemProps<Theme, Config> &
          PseudoSelectors<AllSystemProps<Theme, Config>>
      >
    >
  ): (props: WeakRecord<'variant', Keys> & { theme?: Theme }) => CSSObject;
}

export interface CSS<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> {
  (
    props: AllSystemProps<Theme, Config> &
      PseudoSelectors<AllSystemProps<Theme, Config>>
  ): (props?: { theme?: Theme }) => CSSObject;
}

export interface System<
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
> {
  /** Higher order function for theme aware CSS object */
  css: CSS<Theme, Config>;
  /** Higher order variant function, with two overloads */
  variant: Variant<Theme, Config>;
  /** The intersection of all style properties (regardless of group) */
  properties: UnionToIntersection<
    SystemProperties<Theme, Config>[keyof SystemProperties<
      Theme,
      Config
    >]['handlers']
  >;
  groups: {
    [PropGroup in keyof SystemProperties<Theme, Config>]: Handler<
      SystemProperties<
        Theme,
        Config
      >[PropGroup]['props'][keyof SystemProperties<
        Theme,
        Config
      >[PropGroup]['props']]
    >;
  };
}
