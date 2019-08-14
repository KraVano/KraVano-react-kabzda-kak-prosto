import React, {Fragment} from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export default function Navbar(props) {
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><NavLink to="/profile"
                                                          activeClassName={classes.active}>Profile</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/dialogs"
                                                          activeClassName={classes.active}>Messages</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                    </li>
                    <li className={classes.item}><NavLink to="/settings"
                                                          activeClassName={classes.active}>Settings</NavLink>
                    </li>
                </ul>
                {/*<div className={classes.friends}>*/}
                {/*    <h4>Friends</h4>*/}
                {/*    {props.store.friends.map((item) => <div key={item.id} className={classes.friends__item}>*/}
                {/*        <h6>{item.name}</h6><img*/}
                {/*        src={item.img} alt="image"/></div>)}*/}
                {/*</div>*/}
            </nav>
        </Fragment>
    );
}