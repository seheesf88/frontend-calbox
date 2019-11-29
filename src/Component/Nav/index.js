import React, { Component } from 'react';
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className={style.nav}>
      <div className={style.main_nav}>navbar placeholer</div>
      <div className={style.sub_nav}>
        <div className={style.nav_item}>
            <Link to="/" className={style.nav_item_one}>Place holder</Link>
        </div>
        <div className={style.nav_item}>
            <Link to="/report">Shipping Form</Link>
        </div>
        <div className={style.nav_item}>
            <Link to="/report/new">Price Calculator</Link>
        </div>
      </div>
    </div>
  )
}
export default Nav;
