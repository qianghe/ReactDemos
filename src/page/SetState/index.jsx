import React, { Component } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import Tab from '@components/Tab';
import Content from './Content';
import { log } from '@src/common/decorator.js';

const tabs = [{
    name: 'setStateWithObject',
}, {
    name: 'setStateWithUpdator',
    setWidthObject: false,
}, {
    name: 'setStateWitAsyncEvent',
}, {
    name: 'setStateBatch',
}];

class SetStateDemo extends Component {
    state = {
        counter: 0,
        activeTabIndex: 0,
    }
    @log()
    shouldComponentUpdate() { return true;}
    updateCounter = (setWidthObject) => {
        const callback = () => console.log('setState callback', this.state.counter);

        return setWidthObject ? this.setState({
            counter: this.state.counter + 1,
        }, callback) : this.setState(preState => ({
            counter: preState.counter + 1,
        }), callback);
    }
    triggerUpdator = () => {
        const { setWidthObject = true, name } = tabs[this.state.activeTabIndex]; 
        const whatToUpdate = () => {
            this.updateCounter(setWidthObject);
            this.updateCounter(setWidthObject);
            this.updateCounter(setWidthObject);
        }
        const updators = {
            'setStateWithObject': () => whatToUpdate(),
            'setStateWithUpdator': () => whatToUpdate(),
            'setStateWitAsyncEvent': () => setTimeout(() => whatToUpdate()),
            'setStateBatch': () => setTimeout(() => unstable_batchedUpdates(() => whatToUpdate())),
        }
        updators[name]();
    }
    toggleTab = (index) => {
        this.setState({ 
            activeTabIndex: index,
            counter: 0,
         });
    }
    @log('orange')
    render() {
        const { activeTabIndex } = this.state;
        console.log('render');
        return (
            <div>
                <Tab 
                    tabs={tabs} 
                    activeIndex={activeTabIndex}
                    toggleTab={this.toggleTab}
                />
                <section style={{ marginTop: 30, marginLeft: 50 }}>
                    <Content showIndex={activeTabIndex} />
                    <input type="button" value="Trigger" onClick={this.triggerUpdator}/>
                </section>
            </div>
        );
    }
}

export default SetStateDemo;