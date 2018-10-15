import React, { Component } from 'react';
import Context from '../context';

class AllProviders extends Component {
    state = {
        currentLang: 'English',
        currentTheme: 'light',
    }
    changeState = key => newVal => this.setState(() => ({
        [key]: newVal,
    }));
    render() {
        const { currentLang, currentTheme } = this.state;
        const LanguageProviderValue = {
            currentLang,
            onChange: this.changeState('currentLang'),
        };
        const ThemeProviderValue = {
            currentTheme,
            onChange: this.changeState('currentTheme'),
        };
        return (
            <Context.LanguageProvider value={LanguageProviderValue}>
                <Context.ThemeProvider value={ThemeProviderValue}>
                    {this.props.children}
                </Context.ThemeProvider>
            </Context.LanguageProvider>
        )
    }
}

export default AllProviders;