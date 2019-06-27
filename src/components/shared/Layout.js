import React from 'react';

const styles = {
  main: {
    padding: 30
  },
  small: {
    padding: '0 20px'
  }
};

const Layout = ({ children, small }) => {
  const style = small ? styles.small : styles.main;

  return <div style={style}>{children}</div>;
};

export default Layout;
