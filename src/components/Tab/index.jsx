import React, { Component } from 'react';
import './index.scss';

class Tab extends Component {
    render() {
        const { tabs, activeIndex, toggleTab } = this.props;
        return (
            <ul className="hq-tab">
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