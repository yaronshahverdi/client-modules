import { variant } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React from 'react';

import { FlexBox } from '..';
import { ContentContainer } from '../ContentContainer';

export type AppBarProps = {
  className?: string;
  /**
   * Whether the container should be larger than the default content size.
   */
  wide?: boolean;
};

const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const AppBarLayout: React.FC<AppBarProps> = ({ wide, children }) => {
  return (
    <ContentContainer size={wide ? 'wide' : 'medium'}>
      <FlexBox alignItems="center" height="100%">
        {children}
      </FlexBox>
    </ContentContainer>
  );
};

export const AppBar = AppBarContainer.withComponent(AppBarLayout);

export type AppBarSectionProps = {
  /**
   * Position of the the section within the AppBar.
   */
  position?: 'left' | 'center' | 'right';
  className?: string;
};

export const AppBarSection = styled(FlexBox)(
  variant({
    prop: 'alignment',
    variants: {
      right: { justifyContent: 'flex-end' },
      left: {},
      center: { flexGrow: 2, justifyContent: 'center', textAlign: 'center' },
    },
  })
);

AppBarSection.defaultProps = {
  alignItems: 'center',
  height: '100%',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0',
  alignment: 'left',
};
