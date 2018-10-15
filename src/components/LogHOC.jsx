import React, { Component } from "react";
import { log } from '@src/common/decorator.js';

export default function LogHOC(WrappedComp) {
  return class LogWrappedComp extends Component {
    state = {
      logs: [
        'start....',
      ]
    };
    @log()
    UNSAFE_componentWillMount() {
      const log = "LogWrappedComp] UNSAFE_componentWillMount";
      this.updateLog(log);
    }
    @log()
    componentDidMount() {
      const log = "[LogWrappedComp] componentDidMount";
      this.updateLog(log);
    }
    @log()
    UNSAFE_componentWillReceiveProps() {
      const log = "[LogWrappedComp] UNSAFE_componentWillReceiveProp";
      this.updateLog(log);
    }
    @log()
    shouldComponentUpdate() {
      return true;
    }
    @log()
    UNSAFE_componentWillUpdate() {}
    // getSnapshotBeforeUpdate() {
    //   const log = "[LogWrappedComp] getSnapshotBeforeUpdate";
    //   console.log(log);
    //   this.updateLog(log);
    // }
    @log()
    componentDidUpdate() {}
    @log()
    componentWillUnmount() {
      const log = "[LogWrappedComp] componentWillUnmount";
      this.updateLog(log);
    }
    updateLog = log => {
      this.setState(preState => ({
        logs: [...preState.logs, log]
      }));
    }
    @log('orange')
    render() {
      const { logs } = this.state;

      return (
        <>
          <WrappedComp />
          <ul>
            {
               logs.map((log, index) => (
                  <li key={index}>{log}</li>
              )) 
            }
          </ul>
        </>
      );
    }
  };
}
