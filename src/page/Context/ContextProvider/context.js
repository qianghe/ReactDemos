import React from 'react';

const { Provider: LanguageProvider, Consumer: LanguageConsumer } = React.createContext('Chinese');
const { Provider: ThemeProvider, Consumer: ThemeConsumer } = React.createContext('dark');
const { Provider: UserProvider, Consumer: UserConsumer } = React.createContext('hqiswonder');


export default {
    LanguageProvider,
    LanguageConsumer,
    ThemeConsumer,
    ThemeProvider,
    UserProvider,
    UserConsumer,
};