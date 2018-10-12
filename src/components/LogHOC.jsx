import React, { Component } from "react";

export default function LogHOC(WrappedComp) {
  return class LogWrappedComp extends Component {
    state = {
      logs: [
        'start....',
      ]
    };
    UNSAFE_componentWillMount() {
      const log = "[LogWrappedComp] UNSAFE_componentWillMount";
      console.log(log);
      this.updateLog(log);
    }
    componentDidMount() {
      const log = "[LogWrappedComp] componentDidMount";
      console.log(log);
      this.updateLog(log);
    }
    // static getDerivedStateFromProps(nextProp) {
    //   const log = "[LogWrappedComp] getDerivedStateFromProps";
    //   console.log(log);
    // }
    UNSAFE_componentWillReceiveProps() {
      const log = "[LogWrappedComp] UNSAFE_componentWillReceiveProp";
      console.log(log);
      this.updateLog(log);
    }
    shouldComponentUpdate() {
      const log = "[LogWrappedComp] shouldComponentUpdate";
      console.log(log);
      // this.updateLog(log);
      return true;
    }
    UNSAFE_componentWillUpdate() {
      const log = "[LogWrappedComp] UNSAFE_componentWillUpdate";
      console.log(log);
      // this.updateLog(log);
    }
    // getSnapshotBeforeUpdate() {
    //   const log = "[LogWrappedComp] getSnapshotBeforeUpdate";
    //   console.log(log);
    //   this.updateLog(log);
    // }
    componentDidUpdate() {
      const log = "[LogWrappedComp] componentDidUpdate";
      console.log(log);
      // this.updateLog(log);
    }
    componentWillUnmount() {
      const log = "[LogWrappedComp] componentWillUnmount";
      console.log(log);
      this.updateLog(log);
    }
    updateLog = log => {
      this.setState(preState => ({
        logs: [...preState.logs, log]
      }));
    }
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
