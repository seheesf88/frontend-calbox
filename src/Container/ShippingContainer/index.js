import React, { Component } from 'react';
import Nav from '../../Component/Nav';
import style from './Shipping.module.css'
import { Link } from 'react-router-dom';

class ShippingContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Nav />
        <div>
          <div className={style.shipping_form}>
            <div className={style.title}>Shipping Form</div>
            <div className={style.languages}>
                <div className={style.option_one}>
                  English
                </div>
                <span id={style.divider}>|</span>
                <div className={style.option_two}>
                  Korean
                </div>
            </div>
          </div>
            <div className={style.shipping_form_box}>


            </div>
        </div>
      </div>
    )
  }
}
export default ShippingContainer
