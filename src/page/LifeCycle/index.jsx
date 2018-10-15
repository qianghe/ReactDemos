import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const talks = [{
    user: 'parent',
    message: 'Little Strong, come back eating',
    timeout: 0,
}, {
    user: 'child',
    message: 'I don\'t want..',
    timeout: 800,
}, {
    user: 'parent',
    message: 'no, I will count 3 times',
    timeout: 1200,
}, {
    user: 'parent',
    message: '3',
    timeout: 1800,
}, {
    user: 'child',
    message: 'ummm....',
    timeout: 2300,
},{
    user: 'parent',
    message: '2',
    timeout: 2800,
}, {
    user: 'child',
    message: 'ummm....',
    timeout: 3300,
},{
    user: 'parent',
    message: '1',
    timeout: 3800,
}, {
    user: 'child',
    message: 'ok, mom, I\'m coming now.',
    timeout: 4300,
}]
class LifeCycleChild extends Component {
    static propTypes = {
        countdown: PropTypes.number.isRequired,
        needResponse: false,
    }
    static getDerivedStateFromProps(props) {
        return {
            needResponse: props.countdown === 0,
        }
    }
    render() {
        return this.state.needResponse ? <div>Mom, I am coming back!</div> : ''
    }
}
class LifeCycleParent extends Component {
    state = {
        counter: 3,
        showTalks: false,
        messages: [],
    }
    triggerTalk = () => {
        this.setState({
            showTalks: true,
        });
        // const worker = new Worker('worker.js');
        // worker.onmessage = ({ data }) => {
        //     const { counter = 0 } = data; 
        //     this.setState({
        //         counter,
        //     });
        //     if (counter === 0) worker.terminate();
        // }
        talks.map(talk => {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [
                        ...messages,
                        talk,
                    ],
                }));
            }, talk.timeout);
        })
    }
    render() {
        const { messages, showTalks } = this.state;
        return (
            <div className="hq-talk">
                <input type="button" value="Start.." onClick={this.triggerTalk} />
                {
                    showTalks ? (
                        <ul className="talk-list">
                            {
                                messages.map(({ user, message }, index) => (
                                    <li
                                        key={`item_${index}`}
                                        className={classNames({
                                            'talk-list-item--left': user === 'parent',
                                            'talk-list-item--right': user === 'child',
                                        })}
                                    >
                                        <div className="message">{message}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : ''
                }
            </div>
        )
    }
}

export default LifeCycleParent;