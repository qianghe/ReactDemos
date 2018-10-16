import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Talk from '@components/Talk';
import talks from './talks.js';
import { log } from '@src/common/decorator.js';
import Context from '../Context/ContextProvider/context.js';
import './index.scss';

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
            throwMessage ? <div style={{ display: 'none' }}>I come back. dady...</div> : ''
        );
    }
}
class LifeCycleParent extends Component {
    state = {
        counter: 3,
        showContent: false,
        timer: null,
        talks,
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
       setTimeout(() => {
        const worker = new Worker('./worker.js');
        worker.onmessage = (message) => {
            const { counter } = message.data;
            if (counter === 0) worker.terminate();
            this.setState({
                counter,
            });
        };
       }, 1800);
    }
    @log()
    componentDidUpdate() {
        console.log('__________________');
    }
    @log('orange')
    render() {
        const { counter, showContent, talks } = this.state;
        return (
          <div>
              <Context.UserConsumer>
                    {({name}) => (
                            <div className="life-cycle">
                                <input type="button" onClick={this.triggerCall} value="Start Talking" />
                                <span>{name}12313</span>
                                {
                                    showContent ? (
                                        <div className="life-cycle-content">
                                            <Talk talks={talks} />
                                            <LifeCycleChild countdown={counter} />
                                        </div>
                                    ) : ''
                                }
                            </div>
                    )}
                </Context.UserConsumer>
          </div>
        );
    }
}

export default LifeCycleParent;