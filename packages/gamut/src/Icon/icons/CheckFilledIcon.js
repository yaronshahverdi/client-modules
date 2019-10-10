import React from 'react';
import { defaultIconProps } from '../defaultIconProps';
const CheckFilledIcon = props => {
  return React.createElement(
    'svg',
    Object.assign({}, props),
    React.createElement('title', null, 'CheckFilled Icon'),
    React.createElement(
      'g',
      { fillRule: 'evenodd' },
      React.createElement('path', {
        d:
          'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-.8 11.6l5.6-5.6-1.128-1.128-4.472 4.464-2.472-2.464L7.6 12l3.6 3.6z',
        fillRule: 'nonzero',
      })
    )
  );
};
CheckFilledIcon.defaultProps = defaultIconProps;
export default CheckFilledIcon;
//# sourceMappingURL=CheckFilledIcon.js.map
