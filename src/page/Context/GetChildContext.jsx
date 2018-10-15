import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { themeOptions } from './dataSource';

class ThemeSelectButton extends Component {  
    static contextTypes = {
        themes: PropTypes.object,
        currentThemeIndex: PropTypes.number,
    }
    render() {
        const { themes = {}, currentThemeIndex } = this.context;
        const themeKeys = Object.keys(themes);

        return (
            <select 
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
        themes: themeOptions,
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
    // shouldComponentUpdate() {
    //     return false;
    // }
    changeTheme = (event) => {
        event.persist();
        this.setState(preState => ({
            currentThemeIndex: parseInt(event.target.value, 10),
        }));
    }
    render() {
        const { themes, currentThemeIndex } = this.state;
        const themeKey = Object.keys(themes)[currentThemeIndex];
        const theme = themes[themeKey];

        return (                
            <div className="hq-app-content">
                <ThemeSelectButton onChange={this.changeTheme} />
                <h2 style={{ marginTop: 20, padding: 20, ...theme }}>
                    Current Theme bgColor is
                    <span style={{ marginLeft: 10, fontStyle: 'italic', fontSize: 35 }}>
                        “{theme.backgroundColor}”
                    </span>
                </h2>
            </div>
        )
    }
}

export default GetChildContextDemo;