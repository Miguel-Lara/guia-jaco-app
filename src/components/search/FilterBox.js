import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterBoxItem from './FilterBoxItem';
import Typography from '@material-ui/core/Typography';
import '../../css/FilterBox.css';

class SimpleExpansionPanel extends Component {
  state = {
    currentId: -1,
    opened: false
  };

  setLabel() {
    if (this.state.currentId !== -1) {
      const res = this.props.items.filter(
        element => element.id === this.state.currentId
      );
      return <span>&nbsp;{res[0].label}</span>;
    }
    return <i>&nbsp;(Opcional)</i>;
  }

  onClick = itemId => {
    this.setState({
      currentId: itemId,
      opened: false
    });
    if (this.props.cb) {
      this.props.cb(itemId);
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
      onClick: this.onClick.bind(this),
      checked: item.id === this.state.currentId,
      label: item.label
    };
  }

  componentDidUpdate(newProps) {
    if (newProps.selected !== this.state.currentId) {
      // TODO: Chequear para no updatear de más.
    }
  }

  render() {
    const opened = this.state.opened;
    const title = this.props.title;
    const items = this.props.items;
    const icon = <ExpandMoreIcon />;
    const onClick = this.swapOpened.bind(this);

    return (
      <div className="FilterBox">
        <ExpansionPanel expanded={opened}>
          <ExpansionPanelSummary expandIcon={icon} onClick={onClick}>
            <Typography>
              <strong>{title}</strong>
              {this.setLabel()}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component={'span'}>
              {items.map(item => (
                <FilterBoxItem {...this.setupItem(item)} />
              ))}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default SimpleExpansionPanel;
