import React, {Component, PropTypes} from 'react';
import './Failure.css';

class Failure extends Component {
  static propTypes = {
    id: PropTypes.number,

    failure: PropTypes.string,
    effect: PropTypes.string,
    cause: PropTypes.string,
    occurrence: PropTypes.number,
    criticality: PropTypes.number,
    detection: PropTypes.number,
    action: PropTypes.string,

    failureChange: PropTypes.func,
    effectChange: PropTypes.func,
    causeChange: PropTypes.func,
    occurrenceChange: PropTypes.func,
    criticalityChange: PropTypes.func,
    detectionChange: PropTypes.func,
    actionChange: PropTypes.func,
  };

  failureChange = (event) => this.props.failureChange(event.target.value);
  effectChange = (event) => this.props.effectChange(event.target.value);
  causeChange = (event) => this.props.causeChange(event.target.value);
  occurrenceChange = (event) => this.props.occurrenceChange(event.target.value);
  criticalityChange = (event) => this.props.criticalityChange(event.target.value);
  detectionChange = (event) => this.props.detectionChange(event.target.value);
  actionChange = (event) => this.props.actionChange(event.target.value);

  render() {
    const {
      failure,
      effect,
      cause,
      occurrence,
      criticality,
      detection,
      action,
    } = this.props;

    return (
      <div className="Failure">
        What is the failure?
        <input value={failure} onChange={this.failureChange}/>
        What effect does it have?
        <input value={effect} onChange={this.effectChange}/>
        <span>How critical is the effect? <span className="hint">(10 = extremely critical)</span></span>
        <div className="slider">
          <input type="range" min="1" max="10" step="1" value={criticality} onChange={this.criticalityChange}/>
          {criticality}
        </div>
        What caused it?
        <input value={cause} onChange={this.causeChange}/>
        <span>How often does it occur? <span className="hint">(10 = almost inevitable)</span></span>
        <div className="slider">
          <input type="range" min="1" max="10" step="1" value={occurrence} onChange={this.occurrenceChange}/>
          {occurrence}
        </div>
        <span>How likely is it to be detected? <span className="hint">(10 = undetectable)</span></span>
        <div className="slider">
          <input type="range" min="1" max="10" step="1" value={detection} onChange={this.detectionChange}/>
          {detection}
        </div>
        How can the failure be mitigated?
        <input value={action} onChange={this.actionChange}/>

        <div className="RPN">
          risk priority number = {occurrence * criticality * detection}
        </div>
      </div>
    );
  }
}

export default Failure;
