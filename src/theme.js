import { createMuiTheme } from '@material-ui/core/styles';

const COLORS = {
  PRIMARY: 'rgba(82, 86, 159, 1)',
  PRIMARY_ALT: 'rgba(82, 86, 159, 0.54)',
  SECONDARY: '#f1645b',
  DISABLED: 'rgba(82, 86, 159, 0.38)',
  HINT: 'rgba(82, 86, 159, 0.38)',
  BORDER: 'rgba(82, 86, 159, 0.1)',
  YELLOW: '#ffcc4e'
};

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        border: 'none',
        padding: 20,
        boxShadow: 'none',
        borderTop: 'none',
        borderRadius: 0,
        borderColor: COLORS.BORDER
      }
    },
    MuiPaper: {
      elevation8: {
        backgroundColor: COLORS.YELLOW
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: COLORS.PRIMARY
      }
    },
    MuiButton: {
      root: {
        color: '#FFF'
      },
      contained: {
        marginTop: 30
      },
      sizeSmall: {
        marginTop: 0
      }
    },
    MuiChip: {
      root: {
        marginLeft: 20,
        marginTop: 10
      },
      sizeSmall: {
        marginLeft: 0,
        marginRight: 5,
        marginTop: 5
      }
    },
    MuiFab: {
      sizeSmall: {
        margin: 5,
        boxShadow: 'none'
      }
    },
    MuiListItemText: {
      multiline: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 20,
        paddingRight: 0,
        margin: 0
      },
      secondary: {
        paddingBottom: 0
      }
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: 'none',
        border: 'none',
        borderBottom: 'thin solid',
        borderBottomColor: COLORS.BORDER
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0
      },
      expandIcon: {
        color: '#f1645b'
      }
    },
    MuiDivider: {
      root: {
        margin: '30px 0'
      }
    },
    MuiToolbar: {
      gutters: {
        paddingRight: 5
      }
    },
    MuiTablePagination: {
      toolbar: {
        borderBottom: 'thin solid',
        borderBottomColor: COLORS.BORDER,
        height: 47,
        minHeight: 47
      },
      spacer: {
        flex: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: '#52569f'
    },
    secondary: {
      main: '#f1645b'
    },
    text: {
      primary: COLORS.PRIMARY,
      secondary: COLORS.PRIMARY_ALT,
      disabled: COLORS.DISABLED,
      hint: COLORS.HINT
    },
    divider: COLORS.BORDER
  },
  typography: {
    h1: {
      fontSize: '1.9rem',
      color: '#52569f',
      paddingBottom: 30
    },
    h2: {
      fontSize: '1.2rem',
      color: '#52569f',
      paddingBottom: 30
    },
    h3: {
      fontSize: '1rem',
      color: '#52569f',
      textTransform: 'uppercase',
      paddingBottom: 15,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: '1rem',
      color: COLORS.PRIMARY
    },
    body2: {
      fontSize: '1rem',
      color: COLORS.PRIMARY,
      paddingBottom: 15
    },
    caption: {
      color: COLORS.HINT
    },
    subtitle1: {
      fontSize: '2rem',
      color: 'white',
      backgroundColor: COLORS.PRIMARY,
      padding: 10,
      lineHeight: '2rem'
    },
    subtitle2: {
      fontSize: '1rem',
      color: 'white',
      backgroundColor: COLORS.PRIMARY,
      padding: 10
    }
  }
});

export default theme;
