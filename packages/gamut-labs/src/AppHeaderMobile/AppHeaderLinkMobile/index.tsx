import { Box, FlexBox } from '@codecademy/gamut';
import styled from '@emotion/styled';
import React from 'react';

import {
  focusStyles,
  hoverStyles,
} from '../../AppHeader/AppHeaderElements/SharedStyles';
import {
  AppHeaderClickHandler,
  AppHeaderLinkItem,
} from '../../AppHeader/AppHeaderElements/types';

export type AppHeaderLinkMobileProps = {
  item: AppHeaderLinkItem;
  action: AppHeaderClickHandler;
  topSeparator?: boolean;
};

type AppHeaderLinkButtonProps = { topSeparator: boolean };

const SeparatorOuter = styled(Box)<AppHeaderLinkButtonProps>`
  border-top: ${({ theme, topSeparator }) =>
    topSeparator ? `1px solid ${theme.colors['gray-600']}` : ''};
  margin-top: ${({ topSeparator }) => (topSeparator ? '0.5rem' : '')};
`;

const SeparatorInner = styled(Box)<AppHeaderLinkButtonProps>`
  margin-top: ${({ topSeparator }) => (topSeparator ? '0.5rem' : '')};
`;

const AppHeaderLinkButtonOuter = styled.a`
  text-decoration: none;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.navy};
  ${hoverStyles}
  ${focusStyles}
`;

export const AppHeaderLinkMobile: React.FC<AppHeaderLinkMobileProps> = ({
  action,
  item,
  topSeparator = false,
}) => {
  const Icon = item.icon;

  return (
    <SeparatorOuter topSeparator={topSeparator}>
      <SeparatorInner topSeparator={topSeparator}>
        <AppHeaderLinkButtonOuter
          data-testid={item.dataTestId}
          href={item.href}
          onClick={(event) => action(event, item)}
          target={item.newTab ? 'blank' : ''}
        >
          <FlexBox
            lineHeight="base"
            minWidth="0"
            py={16}
            whiteSpace="nowrap"
            textAlign="left"
            display="flex"
          >
            {Icon && (
              <FlexBox alignContent="center" mr={16}>
                <Icon size={24} aria-hidden />
              </FlexBox>
            )}
            {item.text}
          </FlexBox>
        </AppHeaderLinkButtonOuter>
      </SeparatorInner>
    </SeparatorOuter>
  );
};
