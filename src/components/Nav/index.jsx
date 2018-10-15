import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

class Nav extends Component {
    state = {}
    render () {
        const { menus } = this.props;
        return (
            <ul className="hq-nav">
                {
                    menus.map(({ path, name }, index) => (
                        <li key={`path_${index}`}>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Nav;