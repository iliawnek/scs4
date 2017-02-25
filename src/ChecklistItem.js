import React, {Component, PropTypes} from 'react';
import './ChecklistItem.css';

export default class ChecklistItem extends Component {
  static propTypes = {
    failure: PropTypes.string,
    action: PropTypes.string,
    RPN: PropTypes.number,
  };

  render() {
    const {
      failure,
      action,
      RPN,
    } = this.props;

    return (
      <div className="ChecklistItem">
        <div className="ChecklistItem-text">
          <div className="ChecklistItem-RPN">{RPN}</div>
          <div className="ChecklistItem-label">
            <div className="ChecklistItem-failure"><b>Failure:</b> {failure}</div>
            <div className="ChecklistItem-action"><b>Action:</b> {action}</div>
          </div>
        </div>
        <input type="checkbox"/>
      </div>
    );
  }
}
