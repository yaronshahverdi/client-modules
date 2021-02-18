import { Box } from '@codecademy/gamut';
import cx from 'classnames';
import { throttle } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

import { AppHeader } from '../AppHeader';
import {
  FormattedAppHeaderItems,
  FormattedMobileAppHeaderItems,
} from '../AppHeader/types';
import { AppHeaderMobile } from '../AppHeaderMobile';
import {
  anonDefaultHeaderItems,
  anonDefaultMobileHeaderItems,
  anonLandingHeaderItems,
  anonLandingMobileHeaderItems,
  anonLoginHeaderItems,
  anonLoginMobileHeaderItems,
  anonSignupHeaderItems,
  anonSignupMobileHeaderItems,
  freeHeaderItems,
  freeMobileHeaderItems,
  loadingHeaderItems,
  loadingMobileHeaderItems,
  proHeaderItems,
  proMobileHeaderItems,
} from './GlobalHeaderVariants';
import styles from './styles.module.scss';
import { AnonHeader, FreeHeader, LoadingHeader, ProHeader } from './types';

export type GlobalHeaderProps =
  | AnonHeader
  | FreeHeader
  | ProHeader
  | LoadingHeader;

const getAppHeaderItems = (
  props: GlobalHeaderProps
): FormattedAppHeaderItems => {
  switch (props.type) {
    case 'anon':
      switch (props.variant) {
        case 'landing':
          return anonLandingHeaderItems();
        case 'login':
          return anonLoginHeaderItems(props.renderSearch?.desktop);
        case 'signup':
          return anonSignupHeaderItems(props.renderSearch?.desktop);
        default:
          return anonDefaultHeaderItems(props.renderSearch?.desktop);
      }
    case 'free':
      return freeHeaderItems(
        props.user,
        props.renderSearch?.desktop,
        props.renderNotifications?.desktop
      );
    case 'pro':
      return proHeaderItems(
        props.user,
        props.renderSearch?.desktop,
        props.renderNotifications?.desktop
      );
    case 'loading':
      return loadingHeaderItems;
  }
};

const getMobileAppHeaderItems = (
  props: GlobalHeaderProps
): FormattedMobileAppHeaderItems => {
  switch (props.type) {
    case 'anon':
      switch (props.variant) {
        case 'landing':
          return anonLandingMobileHeaderItems();
        case 'login':
          return anonLoginMobileHeaderItems();
        case 'signup':
          return anonSignupMobileHeaderItems();
        default:
          return anonDefaultMobileHeaderItems();
      }
    case 'free':
      return freeMobileHeaderItems(
        props.user,
        props.renderNotifications?.mobile
      );
    case 'pro':
      return proMobileHeaderItems(
        props.user,
        props.renderNotifications?.mobile
      );
    case 'loading':
      return loadingMobileHeaderItems;
  }
};

export const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        height="80"
        className={props.className}
      >
        <AppHeader action={props.action} items={getAppHeaderItems(props)} />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        height="64"
        position="relative"
        zIndex={0}
      >
        <AppHeaderMobile
          action={props.action}
          items={getMobileAppHeaderItems(props)}
          renderSearch={props.renderSearch?.mobile}
        />
      </Box>
    </>
  );
};

const defaultScrollingState = {
  isInHeaderRegion: true,
  isScrollingDown: true,
  isScrollingDownFromHeaderRegion: true,
  prevScrollPosition: window?.pageYOffset,
};

export const AnimatedGlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  const [scrollingState, setScrollingState] = useState(defaultScrollingState);

  const {
    isScrollingDownFromHeaderRegion,
    isInHeaderRegion,
    isScrollingDown,
    prevScrollPosition,
  } = scrollingState;

  const handleScrolling = useCallback(() => {
    const currentScrollPosition = window?.pageYOffset;

    // handle down/up scrolling
    if (currentScrollPosition > prevScrollPosition) {
      setScrollingState((prevState) => {
        return {
          ...prevState,
          isScrollingDown: true,
          prevScrollPosition: currentScrollPosition,
        };
      });
    } else {
      setScrollingState((prevState) => {
        return {
          ...prevState,
          isScrollingDown: false,
          prevScrollPosition: currentScrollPosition,
        };
      });
    }

    // handle static header region
    if (currentScrollPosition <= 80) {
      setScrollingState((prevState) => ({
        ...prevState,
        isInHeaderRegion: true,
        isScrollingDownFromHeaderRegion: true,
      }));
    } else {
      setScrollingState((prevState) => ({
        ...prevState,
        isInHeaderRegion: false,
        isScrollingDownFromHeaderRegion:
          prevState.isScrollingDown &&
          prevState.isScrollingDownFromHeaderRegion,
      }));
    }
  }, [prevScrollPosition]);

  const throttledHandleScroll = throttle(handleScrolling, 200);

  useEffect(() => {
    console.log(
      'isScrollingDownFromHeaderRegion state set: ',
      isScrollingDownFromHeaderRegion
    );
  }, [isScrollingDownFromHeaderRegion]);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll, scrollingState]);

  // not triggering fast enough, it seems like
  // results in brief appearance of below sticky header when scrolling down from static header really fast
  return (
    <>
      <GlobalHeader
        {...props}
        className={cx(
          styles.staticHeader,
          !isScrollingDownFromHeaderRegion && styles.hidden
        )}
      />
      <GlobalHeader
        {...props}
        className={cx(
          styles.stickyHeader,
          // scrolling down from top
          isScrollingDownFromHeaderRegion && [styles.hidden],
          // scrolling down
          isScrollingDown && [styles.translateUp, styles.transitionSlide],
          // scrolling up
          !isScrollingDown &&
            !isInHeaderRegion && [
              styles.translateDown,
              styles.transitionSlide,
              styles.visible,
            ],
          isInHeaderRegion && [styles.transitionOpacity, styles.hidden]
        )}
      />
    </>
  );

  // if (isInHeaderRegion || isScrollingDownFromHeaderRegion) {
  //   return (
  //     <GlobalHeader
  //       {...props}
  //       className={cx(styles.staticHeader, styles.transitionFade)}
  //     />
  //   );
  // }

  // return (
  //   <GlobalHeader
  //     {...props}
  //     className={cx(
  //       styles.stickyHeader,
  //       styles.transitionSlide,
  //       // scrolling down
  //       isScrollingDown && [styles.translateUp],
  //       // scrolling up
  //       !isScrollingDown && [styles.translateDown]
  //     )}
  //   />
  // );
};
