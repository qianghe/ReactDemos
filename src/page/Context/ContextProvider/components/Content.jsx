import React from 'react'
import { themeOptions } from '../../dataSource';

const Content = ({message, theme, language}) => (
    <div style={themeOptions[theme]}>
        <section>
            <p>current theme: {theme}</p>
            <p>current language: {language}</p>
        </section>
        <h2>{message}</h2>
    </div>
)

export default Content;