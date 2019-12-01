import React, { Component } from 'react';
import Nav from '../../Component/Nav';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Nav />
        <div className={style.icons}>
          <Link to="/shippingform">
            <div className={style.icon_shipping_form}>
              go to shipping form
            </div>
          </Link>
          <Link to="/calculate">
            <div className={style.icon_calculator}>
              go to Calculator
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default HomeContainer
