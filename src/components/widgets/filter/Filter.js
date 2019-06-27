import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterItem from './FilterItem';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class Filter extends Component {
  state = {
    selected: this.props.selected || this.props.items[0].string_id,
    opened: false
  };

  setLabel() {
    /* if (!this.state.selected) {
      return null;
    } */

    let dom = '';

    this.props.items.find(item => {
      if (item.string_id === this.state.selected) {
        return (dom = <span>&nbsp;{item.title || ''}</span>);
      }
      return null;
    });

    return dom;
  }

  onClick = itemStringId => {
    this.setState({
      opened: false,
      selected: itemStringId
    });

    if (this.props.callback) {
      this.props.callback(itemStringId, this.props.id);
    }
  };

  swapOpened() {
    this.setState({
      opened: !this.state.opened
    });
  }

  setupItem(item) {
    return {
      key: item.id,
      id: item.id,
      stringId: item.string_id,
      onClick: this.onClick.bind(this),
      checked: item.string_id === this.state.selected,
      label: item.title
    };
  }

  componentWillReceiveProps(newProps) {
    let selected = newProps.selected;
    if (!selected) {
      selected = this.props.items[0].string_id;
    }
    this.setState({
      selected
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;
    }
    return true;
  }

  render() {
    const opened = this.state.opened;
    const { items, title } = this.props;
    const icon = <ExpandMoreIcon />;
    const onClick = this.swapOpened.bind(this);

    return (
      <div className="Filter">
        <ExpansionPanel expanded={opened} square>
          <ExpansionPanelSummary expandIcon={icon} onClick={onClick}>
            <Typography>
              <strong>{title}</strong>
              {this.setLabel()}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component={'span'}>
              {items.map(item => (
                <FilterItem {...this.setupItem(item)} />
              ))}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Filter;
