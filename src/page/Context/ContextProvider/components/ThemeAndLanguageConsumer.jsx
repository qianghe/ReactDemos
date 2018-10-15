import React from 'react';
import Context from '../context';

const ThemeAndLanguageConsumer = ({ children }) => {
    return (
        <Context.LanguageConsumer>
          {({currentLang: language, onChange: onLangChange}) =>  (
                <Context.ThemeConsumer>
                  {({currentTheme: theme, onChange: onThemeChange}) => children({
                        language, 
                        theme,
                        onLangChange,
                        onThemeChange,
                    })}
                </Context.ThemeConsumer>
              )}
        </Context.LanguageConsumer>
    )
    
}
export default ThemeAndLanguageConsumer;