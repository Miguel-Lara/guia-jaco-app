import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { ButtonBase } from '@material-ui/core';
import '../../css/DataBox.css';

const styles = {
  span: {
    display: 'flex',
    flexGrow: '1'
  },
  textIcon: {
    width: '100%',
    minHeight: 20,
    display: 'flex',
    flexDirection: 'row'
  }
};

const LinkBox = props => {
  const { link, title, value } = props.data;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Divider />
      <ButtonBase className="DataBox">
        <span className="Left main-color">
          <h3>{title}</h3>
        </span>
        <span style={styles.span}>
          <div style={styles.textIcon}>
            <p>{value}</p>
            <span className="spacer" />
            <ChevronRight />
          </div>
        </span>
      </ButtonBase>
    </a>
  );
};
export default LinkBox;
