import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { log } from '@src/common/decorator.js';

class LifeCycleChild extends Component {
    state = {
        throwMessage: false,
    }
    static propTypes = {
        countdown: PropTypes.number.isRequired,
    }
    @log('#000', '#a0a0a0')
    componentDidMount() {}
    @log('#000', '#a0a0a0')
    static getDerivedStateFromProps(props, state) {
        return {
            throwMessage: props.countdown === 0,
        };
    }
    @log('#000', '#a0a0a0')
    shouldComponentUpdate(nextProps, nextState) { return true;}
    @log('#000', '#a0a0a0')
    componentDidUpdate() {}
    @log('#000', '#a0a0a0')
    render() {
        const { throwMessage } = this.state;

        return (
            throwMessage ? <div>I come back. dady...</div> : '....'
        );
    }
}
class LifeCycleParent extends Component {
    state = {
        counter: 3,
        showContent: false,
        timer: null,
    }
    @log()
    componentWillMount() {}
    @log()
    componentDidMount() {}
    @log()
    shouldComponentUpdate() { return true; }
    triggerCall = () => {
        this.setState({
            showContent: true,
        });
        const worker = new Worker('./worker.js');
        worker.onmessage = (message) => {
            const { counter } = message.data;
            if (counter === 0) worker.terminate();
            this.setState({
                counter,
            });
        };
    }
    @log()
    componentDidUpdate() {
        console.log('__________________');
    }
    @log('orange')
    render() {
        const { counter, showContent } = this.state;
        return (
            <div>
                <input type="button" onClick={this.triggerCall} value="Start" />
                {
                    showContent ? (
                        <div>
                            <h3>call your baby....</h3>
                            <h4>count down num 3</h4>
                            <p>{counter}</p>
                            <LifeCycleChild countdown={counter}/>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
}

export default LifeCycleParent;