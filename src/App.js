import React, {Component} from 'react';
import './App.css';
import Failure from './Failure';

class App extends Component {
  state = {
    failures: [],
  };

  addFailure = () => {
    this.setState({
      ...this.state,
      failures: [
        ...this.state.failures,
        {
          failure: '',
          effect: '',
          cause: '',
          occurrence: 1,
          criticality: 1,
          detection: 1,
          action: '',
        },
      ]
    });
  };

  updateState = (i, type, value) => {
    const {failures} = this.state;
    failures[i] = {
      ...failures[i],
      [type]: value,
    };
    this.setState({
      ...this.state,
      failures,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">Failure modes</div>
        <button className="AddFailure" onClick={this.addFailure}>Add failure</button>
        <div className="FailureList">
            {this.state.failures.map((failure, i) => (
              <Failure
                failure={this.state.failures[i].failure}
                effect={this.state.failures[i].effect}
                cause={this.state.failures[i].cause}
                occurrence={this.state.failures[i].occurrence}
                criticality={this.state.failures[i].criticality}
                detection={this.state.failures[i].detection}
                action={this.state.failures[i].action}
                failureChange={this.updateState.bind(this, i, 'failure')}
                effectChange={this.updateState.bind(this, i, 'effect')}
                causeChange={this.updateState.bind(this, i, 'cause')}
                occurrenceChange={this.updateState.bind(this, i, 'occurrence')}
                criticalityChange={this.updateState.bind(this, i, 'criticality')}
                detectionChange={this.updateState.bind(this, i, 'detection')}
                actionChange={this.updateState.bind(this, i, 'action')}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
