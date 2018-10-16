import React from 'react';
import HighLight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/atelier-sulphurpool-dark.css';

const first = `
//更新counter
updateCounter = () => {
    const callback = () => console.log('setState callback', this.state.counter);

    this.setState({
        counter: this.state.counter + 1,
    }, callback)
}

//触发更新
triggerUpdator = () => {
    this.updateCounter();
    this.updateCounter();
    this.updateCounter();
}
`
const second = `
//更新counter
updateCounter = () => {
    const callback = () => console.log('setState callback', this.state.counter);

    this.setState(preState => ({
        counter: preState.counter + 1,
    }), callback)
}

//触发更新
triggerUpdator = () => {
    this.updateCounter();
    this.updateCounter();
    this.updateCounter();
}
`
const third = `
//更新counter
updateCounter = () => {
    const callback = () => console.log('setState callback', this.state.counter);

    this.setState({
        counter: this.state.counter + 1,
    }, callback)
}

//触发更新
triggerUpdator = () => {
    setTimeout(() => {
        this.updateCounter();
        this.updateCounter();
        this.updateCounter();
    })
}
`

const four = `
//更新counter
updateCounter = () => {
    const callback = () => console.log('setState callback', this.state.counter);

    this.setState({
        counter: this.state.counter + 1,
    }, callback)
}

//触发更新
triggerUpdator = () => {
   setTimeout(() => {
        ReactDOM.unstable_batchedUpdates(() => {
            this.updateCounter();
            this.updateCounter();
            this.updateCounter();
        });
   })
}
`

const Content = ({ showIndex }) => {
    return (
        <HighLight language="javascript">
            {[first, second, third, four][showIndex]}
        </HighLight>
    )
};


export default Content;