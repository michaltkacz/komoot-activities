import React, { useRef, useEffect, useState } from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    '@media (max-width: 576px)': {
      flexDirection: 'column',
    },
  },
  top: {},
  left: {
    width: 300,
    '@media (max-width: 576px)': {
      width: '100%',
      height: '40%',
    },
  },
  right: {
    flexGrow: 1,
    '@media (max-width: 576px)': {
      height: '60%',
    },
  },
  hidden: {
    display: 'none',
  },
});

const PageLayout = ({ top, left, right }) => {
  const topRef = useRef(null);
  const [topHeight, setTopHeight] = useState(0);

  useEffect(() => {
    setTopHeight(topRef.current.clientHeight);
  }, [topRef]);

  return (
    <div className={css(styles.page)}>
      <div className={css(styles.top)} ref={topRef}>
        {top}
      </div>
      <div
        className={css(styles.container)}
        style={{ height: `calc(100vh - ${topHeight}px)` }}
      >
        <div className={css(styles.left, false && styles.hidden)}>{left}</div>
        <div className={css(styles.right)}>{right}</div>
      </div>
    </div>
  );
};

export default PageLayout;
