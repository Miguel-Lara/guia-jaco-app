import React from 'react';
import { TablePagination } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  toolbar: {
    padding: 0,
    margin: 0,
    marginBottom: 20
  }
};

const Paginator = ({ callback, classes, currentPage, itemsPerPage, total }) => {

  if (total <= itemsPerPage) {
    return <div style={{ padding: 10 }} />;
  }

  return (
    <TablePagination
      backIconButtonProps={{
        'aria-label': 'Anterior'
      }}
      classes={{ toolbar: classes.toolbar }}
      component="div"
      count={total}
      nextIconButtonProps={{
        'aria-label': 'Próxima'
      }}
      page={currentPage}
      rowsPerPage={itemsPerPage}
      rowsPerPageOptions={[10]}
      onChangePage={callback}
    />
  );
};

export default withStyles(styles)(Paginator);
