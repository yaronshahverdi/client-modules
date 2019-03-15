import React from 'react';
import { shallow } from 'enzyme';

import NotificationIcon from '../NotificationIcon';
import Icon from '../../Icon';
import iconMap from '../../Icon/iconMap';

describe('NotificationIcon', () => {
  it('can render a picture icon', () => {
    const imageUrl = 'https://bit.ly/2lYjODX';
    const props = {
      imageUrl,
    };

    const wrapper = shallow(<NotificationIcon {...props} />);
    expect(
      wrapper
        .find('img')
        .first()
        .prop('src')
    ).toEqual(imageUrl);
  });

  it('can render a gamut icon', () => {
    const iconSlug = 'python' as keyof typeof iconMap;
    const fillColor = '#FFF';
    const backgroundColor = '#000';

    const props = { iconSlug, iconSettings: { fillColor, backgroundColor } };
    const wrapper = shallow(<NotificationIcon {...props} />);

    expect(wrapper.find(Icon).length).toEqual(1);
    expect(
      wrapper
        .find(Icon)
        .first()
        .prop('fill')
    ).toEqual(fillColor);
  });
});
