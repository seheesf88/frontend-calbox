import React, { Component } from 'react';
import Nav from '../../Component/Nav';
import EnglishVersion from '../../Component/EnglishVersion';
import style from './Shipping.module.css'
import { Link } from 'react-router-dom';

class ShippingContainer extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNum: '',
      email: '',
      emailConfirm: '',
      deliveryOption: '',
      recipient: '',
      recipientAddressOne: '',
      recipientAddressTwo: '',
      recipientCity: '',
      recipientPhoneNum: '',
      detailed:'',
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addAddress  = async (myAddress, e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:9000/api/v1/addresses', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(myAddress),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if(!response.ok){
          throw Error(response.statusText)
        }

        const parsedCreateAddress = await response.json();

        // this.props.history.push('/home');

    }catch(err){
      return err
    }
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
              <EnglishVersion addAddress={this.addAddress} handleInput={this.handleInput} />
            </div>
        </div>
      </div>
    )
  }
}
export default ShippingContainer
