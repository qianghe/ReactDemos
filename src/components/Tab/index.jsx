import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

class Tab extends Component {
    state = {
        classTabNames: ['one', 'two', 'three', 'four'],
    }
    render() {
        const { tabs, activeIndex, toggleTab} = this.props;
        const { classTabNames } = this.state;

        return (
            <ul className={classNames({
                'hq-tabs': true,
                [`hq-tabs--${classTabNames[activeIndex]}`]: true,
            })}>
                {
                    tabs.map(({ name }, index) => (
                        <li 
                            className={ activeIndex === index ? 'active' : '' }
                            key={`tab_${name}`} 
                            onClick={() => toggleTab(index)}
                        >
                            {name}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Tab