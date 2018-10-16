import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

class Talk extends Component {
    static propTypes = {
        talks: PropTypes.arrayOf(PropTypes.shape({
            user: PropTypes.string,
            message: PropTypes.string,
            timeout: PropTypes.number,
        })).isRequired,
    }
    state = {
        messages: [],
    }
    componentDidMount() {
        this.props.talks.map(talk => {
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
        const { messages } = this.state;
        return (
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
        )
    }
}

export default Talk;