import cx from 'classnames';
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

export const AppBar: React.FC<AppBarProps> = ({
  wide,
  children,
  className,
}) => {
  return (
    <FlexBox
      className={className}
      alignItems="center"
      height="100%"
      zIndex={14}
    >
      <ContentContainer size={wide ? 'wide' : 'medium'}>
        <FlexBox alignItems="center" height="100%">
          {children}
        </FlexBox>
      </ContentContainer>
    </FlexBox>
  );
};
