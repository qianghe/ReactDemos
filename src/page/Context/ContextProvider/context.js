import React from 'react';

const { Provider: LanguageProvider, Consumer: LanguageConsumer } = React.createContext('Chinese');
const { Provider: ThemeProvider, Consumer: ThemeConsumer } = React.createContext('dark');

export default {
    LanguageProvider,
    LanguageConsumer,
    ThemeConsumer,
    ThemeProvider,
};