import {
  color,
  layout,
  shouldForwardProp,
  space,
  typography,
  variant,
} from '@codecademy/gamut-styles';
import { compose, HandlerProps } from '@codecademy/gamut-system';
import styled from '@emotion/styled';
import React, { forwardRef, HTMLProps, MutableRefObject } from 'react';

export type LinkElements = HTMLAnchorElement | HTMLButtonElement;
export interface AnchorProps extends HandlerProps<typeof anchorProps> {
  href?: string;
  as?: never;
  variant?: 'standard' | 'inline' | 'interface';
}
export interface ForwardedProps
  extends Omit<HTMLProps<LinkElements>, keyof AnchorProps>,
    AnchorProps {}

const base = variant({
  standard: {
    textColor: 'primary',
    borderColor: 'primary',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  inline: {
    textDecoration: 'underline',
    textColor: 'primary',
    borderColor: 'primary',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  interface: {
    textColor: 'text',
    borderColor: 'primary',
    display: 'inline-block',
    alignItems: 'center',
  },
});

const hover = variant({
  standard: {
    textDecoration: 'underline',
  },
  inline: {},
  interface: {
    textColor: 'primary',
  },
});

const focus = variant({
  standard: {
    textColor: 'text',
    textDecoration: 'none',
  },
  inline: {
    textDecoration: 'underline',
  },
  interface: {},
});

const anchorProps = compose(layout, typography, color, space);

const ButtonReset = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  font-size: inherit;
`;

const AnchorElement = forwardRef<LinkElements, ForwardedProps>(
  ({ href, disabled, children, as, ...rest }, ref) => {
    if (!href || href.length === 0) {
      return (
        <ButtonReset
          {...rest}
          ref={ref as MutableRefObject<HTMLButtonElement>}
          type="button"
          aria-disabled={disabled}
        >
          {children}
        </ButtonReset>
      );
    }

    return (
      <a {...rest} href={href} ref={ref as MutableRefObject<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }
);

export const AnchorBase = styled('a', { shouldForwardProp })<AnchorProps>`
  ${base};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 4px;
    border: 2px solid;
    border-color: inherit;
    opacity: 0;
    transition: opacity 75ms ease-in, inset 75ms ease-in;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
    ${hover}
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    text-decoration: none;
    color: ${({ theme }) => theme.colors['gray-700']};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:focus-visible {
    ${focus}

    &:after {
      left: -${({ theme }) => theme.spacing[4]};
      right: -${({ theme }) => theme.spacing[4]};
      opacity: 1;
    }
  }
  ${anchorProps}
`;

export const Anchor = AnchorBase.withComponent(AnchorElement);

Anchor.defaultProps = {
  variant: 'inline',
};
