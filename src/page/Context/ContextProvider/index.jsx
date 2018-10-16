import React, { Component } from 'react'
import { languageOptions, themeOptions, welcomeMessages } from '../dataSource';
import AllProviders from './components/AllProviders';
import ThemeAndLanguageConsumer from './components/ThemeAndLanguageConsumer';
import Select from './components/Select';
import Content from './components/Content';
import './index.scss';
class ContextProviderDemo extends Component {
    render() {
        return (
            <AllProviders>
                <ThemeAndLanguageConsumer>
                     {({ theme, language, onLangChange, onThemeChange }) => {
                         const langSelectProps = {
                            source: languageOptions,
                            onChange: onLangChange,
                            currentVal: language,
                         };
                         const themeSelectProps = {
                            source: Object.keys(themeOptions),
                            onChange: onThemeChange,
                            currentVal: theme,
                         };
                         const contentProps = {
                             message: welcomeMessages[language],
                             theme,
                             language,
                         };
                         return (
                             <div className="hq-app-context">
                                <div>
                                    <p>
                                        <span>Language:</span>
                                        <Select {...langSelectProps} />
                                    </p>
                                    <p>
                                        <span>Theme:</span>
                                        <Select {...themeSelectProps} />
                                    </p>
                                </div>
                                <Content {...contentProps} />
                             </div>
                         )
                     }}
                </ThemeAndLanguageConsumer>
            </AllProviders>
        )
    }
}

export default ContextProviderDemo;