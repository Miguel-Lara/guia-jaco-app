import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../css/FilterBox.css';

class SimpleExpansionPanel extends Component {
  state = {
    currentId: -1,
    opened: false
  };

  setLabel() {
    if (this.state.currentId === -1) {
      return <i>(Opcional)</i>;
    } else {
      const res = this.props.items.filter(
        element => element.id === this.state.currentId
      );
      return <span>{res[0].label}</span>;
    }
  }

  onClick = value => {
    this.setState({
      currentId: value.id,
      opened: false
    });
    if (this.props.cb) {
      this.props.cb(value.id);
    }
  };

  buildItems = () => {
    return this.props.items.map(item => (
      <div key={item.id} onClick={() => this.onClick(item)} className="ItemDiv">
        <Radio checked={item.id === this.state.currentId} className="Radio" />
        <div className="Label">{item.label}</div>
      </div>
    ));
  };

  componentDidUpdate(newProps) {
    if (newProps.selected !== this.state.currentId) {
      console.log('TODO: UPDATEAR EL STATE!!!!!');
    }
  }

  render() {
    return (
      <div className="FilterBox">
        <ExpansionPanel expanded={this.state.opened}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => this.setState({ opened: !this.state.opened })}
          >
            <Typography>
              <strong>{this.props.title}</strong>
              &nbsp;
              {this.setLabel()}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="Details">
            <Typography component={'span'}>{this.buildItems()}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default SimpleExpansionPanel;
