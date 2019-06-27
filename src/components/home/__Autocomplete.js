import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem, MenuList } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];

const ITEM_HEIGHT = 48;

export default class __Autocomplete extends React.PureComponent {
  state = {
    value: '',
    showMenu: false
  };
  
  render() {
    const { value, showMenu, anchorEl } = this.state;
    return [
      <TextField
        fullWidth
        key="field"
        value={value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />,
      <Popover
        key="menu"
        open={showMenu && !!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorPosition={{ top: 0, left: 0 }}
        disableAutoFocus
        disableEnforceFocus
        disableRestoreFocus
        hideBackdrop
        style={{ width: 200, height: 0 }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.7,
            width: 200
          }
        }}
      >
        <MenuList>
          {this.getFilteredSuggestions().map((item, i) => (
            <MenuItem
              key={i}
              onClick={this.handleMenuItemClick}
              data-value={item.label}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    ];
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleFocus = event => {
    this.setState({
      showMenu: true,
      anchorEl: event.currentTarget
    });
  };

  handleBlur = () => {
    this.setState({ showMenu: false });
  };

  handleMenuItemClick = event => {
    this.setState({
      showMenu: false,
      value: event.currentTarget.getAttribute('data-value') || ''
    });
  };

  getFilteredSuggestions() {
    const { value } = this.state;
    if (value.length === 0) {
      return suggestions;
    } else {
      return suggestions.filter(
        s =>
          s.label.substr(0, value.length).toLowerCase() === value.toLowerCase()
      );
    }
  }
}
