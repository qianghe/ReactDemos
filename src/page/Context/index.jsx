import React, { Component } from 'react';
import Tab from '@components/Tab';
import ContextProvider from './ContextProvider';
import GetChildContext from './GetChildContext';
import './index.scss';

const tabs = [{
    name: 'GetChildContext',
}, {
    name: 'ContextProvider',
}];

class ContextDemo extends Component {
    state = {
        activeTabIndex: 0,
    }
    toggleTab = (index) => {
        this.setState({ 
            activeTabIndex: index,
         });
    }
    render() {
        const { activeTabIndex } = this.state;
        return (
            <div className="hq-context">
                <Tab 
                    tabs={tabs} 
                    activeIndex={activeTabIndex}
                    toggleTab={this.toggleTab}
                />
                <section>
                    {
                        activeTabIndex ? <ContextProvider /> : <GetChildContext />
                    }
                </section>
            </div>
        );
    }
}

export default ContextDemo;