import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChipTitle from './ChipTitle';
import ChipsList from './ChipsList';
import '../../../css/ChipBox.css';

const styles = {
  main: {
    position: 'relative',
    float: 'left',
    width: '100%',
    marginTop: '10px'
  }
};

const ChipBox = props => {
  const { link, color, items, title } = props;

  return (
    <div style={styles.main}>
      <Divider />
      <ChipTitle color={color} title={title} />
      <ChipsList color={color} link={link} items={items} />
    </div>
  );
};

export default ChipBox;
