import React from 'react';
import { defaultIconProps } from '../defaultIconProps';
const jQueryIcon = props => {
  return React.createElement(
    'svg',
    Object.assign({}, props),
    React.createElement('title', null, 'jQuery Icon'),
    React.createElement('path', {
      d:
        'M4.196 4.987c-.138.157-.27.32-.398.49C.71 9.573 1.776 16.015 6.465 19.547c4.688 3.533 11.222 2.82 14.31-1.279.162-.214.311-.435.45-.66-4.68 2.67-8.997 2.456-12.954-.641-3.957-3.097-5.315-7.09-4.075-11.98z',
    }),
    React.createElement('path', {
      d:
        'M9.671 3.139c-.099.112-.194.23-.286.35-2.215 2.94-1.454 7.558 1.904 10.089 3.357 2.53 8.04 2.015 10.256-.925.116-.154.224-.313.322-.474-3.354 1.916-6.448 1.766-9.282-.453C9.75 9.508 8.779 6.646 9.67 3.14z',
    }),
    React.createElement('path', {
      d:
        'M14.025 2.062a3.64 3.64 0 0 0-.167.206c-1.3 1.723-.926 4.376.952 5.791 1.878 1.415 4.55 1.058 5.849-.666.068-.09.131-.183.19-.277-1.934 1.148-3.693 1.101-5.277-.141s-2.1-2.88-1.547-4.913z',
    })
  );
};
jQueryIcon.defaultProps = defaultIconProps;
export default jQueryIcon;
//# sourceMappingURL=jQueryIcon.js.map
