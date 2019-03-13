import React from 'react';
import { storiesOf } from '@storybook/react';
import { flatten } from 'lodash';
import color from 'color';
import {
  colors,
  deprecatedColors,
  deprecatedGamutColors,
  deprecatedEditorColors,
  brandColors,
} from '@codecademy/gamut-styles/utils/variables';
import { Container } from '@codecademy/gamut/FlexBox';
import s from './Color-story.scss';

const infoOptions = {
  inline: true,
  source: false,
  propTables: false,
};

const parseCamelCase = string =>
  string.replace(/([a-zA-Z])(?=[A-Z0-9])/g, '$1-').toLowerCase();

const getSassVariableName = (variablePrefix, variableSuffix) => {
  if (variablePrefix) {
    return `$${parseCamelCase(variablePrefix)}-${parseCamelCase(
      variableSuffix
    )}`;
  }
  return `$color-${parseCamelCase(variableSuffix)}`;
};

const legacyColorMapping = {
  mint: 'green',
  ccBlue: 'blue',
  grey: 'gray',
  royalBlue: 'purple',
};

const createSwatchData = (
  sassVariableName,
  hexcode,
  colorName,
  colorNumber
) => {
  return {
    name: sassVariableName,
    sort: `${legacyColorMapping[colorName] || colorName}-${colorNumber}`,
    colorName: legacyColorMapping[colorName] || colorName,
    colorNumber: colorNumber,
    hex: color(hexcode).hex(),
    rgb: color(hexcode)
      .rgb()
      .string(),
    hsl: color(hexcode)
      .hsl()
      .string(),
  };
};

const getSwatchesData = (data, variablePrefix, name) =>
  Object.keys(data).map(variableSuffix => {
    const sassVariableName = getSassVariableName(
      variablePrefix,
      variableSuffix
    );

    const hexcode =
      data[variableSuffix] === 'whitesmoke' ? '#f5f5f5' : data[variableSuffix];
    const colorName = name;
    const colorNumber = variableSuffix;
    return createSwatchData(sassVariableName, hexcode, colorName, colorNumber);
  });

const renderSwatch = (sassVariableName, hexcode) => {
  return (
    <Container
      align="center"
      className={s.swatchContainer}
      key={sassVariableName}
    >
      <div className={s.swatch} style={{ backgroundColor: hexcode }} />
      <div>
        <div className={s.name}>{sassVariableName}</div>
        <div className={s.hexcode}>{hexcode}</div>
        <div className={s.hexcode}>
          {color(hexcode)
            .hsl()
            .string()}
        </div>
      </div>
    </Container>
  );
};

const renderSwatches = (data, variablePrefix) =>
  Object.keys(data).map(variableSuffix => {
    const sassVariableName = getSassVariableName(
      variablePrefix,
      variableSuffix
    );

    const hexcode =
      data[variableSuffix] === 'whitesmoke' ? '#f5f5f5' : data[variableSuffix];

    return renderSwatch(sassVariableName, hexcode);
  });

stories.add(
  'Brand colors',
  () => (
    <div>
      <h2 className={s.heading}>brand colors</h2>
      {renderSwatches(brandColors, 'Brand')}
    </div>
  ),
  infoOptions
);

stories.add(
  'Colors',
  () => {
    const base = {
      black: colors.black,
      white: colors.white,
      beige: colors.beige,
      royalBlue: colors.royalBlue,
    };

    return (
      <Container>
        {Object.keys(colors)
          .filter(c => !Object.keys(base).includes(color))
          .map(c => (
            <div key={c}>
              <h2 className={s.heading}>{parseCamelCase(`color-${c}`)}</h2>
              {renderSwatches(colors[c], `color-${c}`)}
            </div>
          ))}
        {Object.keys(base).map(c => (
          <div key={c}>
            <h2 className={s.heading}>{parseCamelCase(`color-${c}`)}</h2>
            {renderSwatch(`color-${parseCamelCase(c)}`, base[c])}
          </div>
        ))}
      </Container>
    );
  },
  infoOptions
);

stories.add(
  'Brand colors',
  () => (
    <div>
      <h2 className={s.heading}>brand colors</h2>
      {renderSwatches(brandColors, 'Brand')}
    </div>
  ),
  infoOptions
);

stories.add(
  'Gamut (deprecated)',
  () => (
    <Container>
      <div>
        <h2 className={s.heading}>deprecated gamut base colors</h2>
        {renderSwatches(deprecatedGamutColors.base, 'deprecated-gamut')}
      </div>
      {Object.keys(deprecatedGamutColors.swatches).map(c => (
        <div key={c}>
          <h2 className={s.heading}>
            {parseCamelCase(`deprecated-gamut-${c}`)}
          </h2>
          {renderSwatches(
            deprecatedGamutColors.swatches[c],
            `deprecated-gamut-${c}`
          )}
        </div>
      ))}
    </Container>
  ),
  infoOptions
);

stories.add(
  'Portal (deprecated)',
  () => (
    <Container>
      <div>
        <h2 className={s.heading}>deprecated portal base colors</h2>
        {renderSwatches(deprecatedColors.portal, 'deprecated')}
      </div>
      {Object.keys(deprecatedColors.swatches).map(c => (
        <div key={c}>
          <h2 className={s.heading}>{parseCamelCase(c)}</h2>
          {renderSwatches(
            deprecatedColors.swatches[c],
            `deprecated-swatches-${c}`
          )}
        </div>
      ))}
    </Container>
  ),
  infoOptions
);

stories.add(
  'Editor (deprecated)',
  () => {
    const { white, black, ...platformRest } = deprecatedEditorColors;
    return (
      <div>
        <h2 className={s.heading}>deprecated editor colors</h2>
        {renderSwatches(
          {
            white,
            black,
          },
          'deprecated-swatches-basic'
        )}
        {renderSwatches(platformRest, 'deprecated-swatches-code')}
      </div>
    );
  },
  infoOptions
);

stories.add(
  'All (combined)',
  () => {
    const {
      black: baseBlack,
      white: baseWhite,
      beige: baseBeige,
      royalBlue: baseRoyalBlue,
      ...mainColors
    } = colors;
    const allColors = flatten([
      ...Object.keys(mainColors).map(c =>
        getSwatchesData(colors[c], `color-${c}`, c)
      ),
      // ...getSwatchesData(deprecatedColors.portal, 'deprecated'),
      // ...Object.keys(deprecatedColors.swatches).map(c =>
      //   getSwatchesData(
      //     deprecatedColors.swatches[c],
      //     `deprecated-swatches-${c}`,
      //     c
      //   )
      // ),
      // ...getSwatchesData(deprecatedGamutColors.base, 'deprecated-gamut'),
      ...Object.keys(deprecatedGamutColors.swatches).map(c =>
        getSwatchesData(
          deprecatedGamutColors.swatches[c],
          `deprecated-gamut-${c}`,
          c
        )
      ),
    ]).sort((a, b) => {
      return `${a.sort}`.localeCompare(b.sort);
    });

    // .sort((a, b) => {
    //   const hslA = chroma(a.hex).hsl();
    //   const hslB = chroma(b.hex).hsl();
    //   let hueA = Math.round(hslA[0]);
    //   let hueB = Math.round(hslB[0]);
    //   if (Number.isNaN(hueA)) hueA = 0;
    //   if (Number.isNaN(hueB)) hueB = 0;
    //   if (hueA - hueB === 0) {
    //     return hslA[2] - hslB[2];
    //   }
    //   return hueA - hueB;
    // });

    return (
      <table>
        <thead>
          <tr>
            <th className={s.tableHeading}>Swatch</th>
            <th className={s.tableHeading}>Name</th>
            <th className={s.tableHeading}>HEX</th>
            <th className={s.tableHeading}>RGB</th>
            <th className={s.tableHeading}>HSL</th>
            <th className={s.tableHeading}>Sort Key</th>
          </tr>
        </thead>
        <tbody>
          {allColors.map(c => (
            <tr key={c.name}>
              <td className={s.tableItem} style={{ background: c.hex }} />
              <td className={s.tableItem}>{c.name}</td>
              <td className={s.tableItem}>{c.hex}</td>
              <td className={s.tableItem}>{c.rgb}</td>
              <td className={s.tableItem}>{c.hsl}</td>
              <td className={s.tableItem}>{c.sort}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
  infoOptions
);
