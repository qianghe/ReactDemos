import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ThemeSelectButton extends Component {  
    static contextTypes = {
        themes: PropTypes.object,
        currentThemeIndex: PropTypes.number,
    }
    render() {
        const { themes = {}, currentThemeIndex } = this.context;
        const themeKeys = Object.keys(themes);
        const currentThemeKey = themeKeys[currentThemeIndex];

        return (
            <select 
                style={themes[currentThemeKey]}
                value={currentThemeIndex}
                onChange={this.props.onChange}
            >
                {
                    themeKeys.map((themeKey, index) => (
                        <option
                            key={`theme_${themeKey}`} 
                            value={index}
                        >
                            {themeKey}
                        </option>
                   ))
                }
            </select>
        );
    }
}

class GetChildContextDemo extends Component {
    state = {
        themes: {
           dark: {
               backgroundColor: '#a0a0a0',
               color: 'red',
           },
           light: {
               backgroundColor: '#999',
               color: 'green',
           },
        },
        currentThemeIndex: 0,
    }
    static childContextTypes = {
        themes: PropTypes.object,
        currentThemeIndex: PropTypes.number,
    }
    getChildContext() {
        return {
            themes: this.state.themes,
            currentThemeIndex: this.state.currentThemeIndex,
        }
    }
    changeTheme = (event) => {
        event.persist();
        this.setState(preState => ({
            currentThemeIndex: parseInt(event.target.value, 10),
        }));
    }
    render() {
        return (                
            <>
                <h1>This is a test page.</h1>
                <ThemeSelectButton onChange={this.changeTheme} />
            </>
        )
    }
}

export default GetChildContextDemo;