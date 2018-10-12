import React, { Component } from 'react';
import LogHOC from '@components/LogHOC';

class SetStateDemo extends Component {
    state = {
        counter: 0,
    }
    componentDidMount() {
        setTimeout(() => {
            this.updateCounter();
            this.updateCounter();
            this.updateCounter();
        });
    }
    updateCounter = () => {
        this.setState(preState => ({
            counter: preState.counter + 1,
        }), () => {
            console.log('callback', this.state.counter);
        });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('[SetStateDemo] componentDidUpdate', prevState.counter);
    }
    render() {
        return (
            <section>this is SetState Component</section>
        );
    }
}

export default LogHOC(SetStateDemo);