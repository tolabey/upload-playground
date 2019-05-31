import * as React from 'react';
import { Link } from 'react-router-dom'
import './menu.scss';


export default class Menu extends React.Component {
    public render() {
        return (
            <div id="menu">
                <div className="title">{"MENU"}</div>
                <div className="menu-wrapper">
                    <Link to="/picture"><button>{"Picture Upload"}</button></Link>
                    <Link to="/pdf"><button>{"Picture Upload"}</button></Link>
                </div>
            </div>
        )
    }
}