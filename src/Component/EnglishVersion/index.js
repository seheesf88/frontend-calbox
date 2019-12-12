import React, { Component } from 'react';
import style from './EnglishVersion.module.css'
import { Link } from 'react-router-dom';

const EnglishVersion = (props) => {
    return(
      <div className={style.format}>
        <div className={style.labels}>
          <div className={style.label}>Name : </div>
          <div className={style.label} id={style.label_address}>Address : </div>
          <div className={style.label} id={style.label_phoneNumber}>Phone Number : </div>
          <div className={style.label} id={style.label_email}>Email Address : </div>
          <div className={style.label} id={style.label_confirm_email}>Confirm Email Address : </div>
          <div className={style.label} id={style.label_delivery_options}>Delivery Options : </div>
          <div className={style.label} id={style.label_recipient_name}>Recipient's name : </div>
          <div className={style.label} id={style.label_recipient_phone_number}>Recipient's Phone Number : </div>
          <div className={style.label} id={style.label_recipient_address}>Recipient's Address : </div>
          <div className={style.label} id={style.label_recipient_phoneNumber}>Recipient's Phone Number : </div>
          <div className={style.label} id={style.label_recipient_email}>Recipient's Email Address : </div>
          <div className={style.label} id={style.label_recipient_confirm_email}>Recipient's Confirm Email Address : </div>
        </div>
        <form onSubmit={props.addAddress} className={style.formStyle}>
          <div className={style.test}>
            <div><input name="name" id={style.name} type="text" onChange={props.handleInput} value={props.name} /></div>
          </div>
          <div>
            <div><input name="addressOne" id={style.address_one} type="text" onChange={props.handleInput} value={props.addressOne} placeholder="Street Address"/></div>
            <div><input name="addressTwo" id={style.address_two} type="text" onChange={props.handleInput} value={props.addressTwo} placeholder="Street Address Line 2"/></div>
            <div className={style.cityStateContainer}>
              <span><input name="city" id={style.city} type="text" onChange={props.handleInput} value={props.city} placeholder="City"/></span>
              <span><input name="state"  id={style.State} type="text" onChange={props.handleInput} value={props.state} placeholder="State/Province"/></span>
            </div>
              <span><input name="zipcode" type="text" onChange={props.handleInput} value={props.zipcode} placeholder="Postal/Zip Code"/></span>
            <div><input name="phoneNum" type="tel" onChange="props.handleInput" value={props.phoneNum} placeholder="Phone Number"/></div>
            <div><input name="email" type="text" onChange="props.handleInput" value={props.email} /></div>
            <div><input name="emailConfirm" type="text" onChange="props.handleInput" value={props.emailConfirm} /></div>
            <div>
              <label className={style.container_options}>
                <input className={style.checkbox} name="" type="checkbox" checked />
                <span className={style.option}>UPS Free Drop-off</span>
              </label>
            </div>
            <div>
              <label className={style.container_options}>
                <input className={style.checkbox} name="" type="checkbox" />
                <span className={style.option}>Free Pick-up(SF, Berkeley, Oakland)</span>
              </label>
            </div>
            <div>
              <label className={style.container_options}>
                <input className={style.checkbox} name="" type="checkbox" />
                <span className={style.option}>Domestic shipping(Only Bay Area to Other Cities)</span>
              </label>
            </div>
          </div>
          <div className={style.recipient_input}>
            <div><input name="name" id="name" type="text" onChange={props.handleInput} value={props.name} /></div>
            <div><input name="addressOne" id={style.recipient_address} type="text" onChange={props.handleInput} value={props.addressOne} placeholder="Street Address"/></div>
            <div><input name="addressTwo" id={style.recipient_address} type="text" onChange={props.handleInput} value={props.addressTwo} placeholder="Street Address Line 2"/></div>
            <div className={style.cityStateContainer}>
              <span><input name="city" id={style.receipient_city} type="text" onChange={props.handleInput} value={props.city} placeholder="City"/></span>
              <span><input name="state"  id={style.receipient_State} type="text" onChange={props.handleInput} value={props.state} placeholder="State/Province"/></span>
            </div>
              <span><input name="zipcode" id={style.receipient_zipcode} type="text" onChange={props.handleInput} value={props.zipcode} placeholder="Postal/Zip Code"/></span>
            <div><input name="phoneNum" id={style.receipient_phoneNumber} type="text" onChange="props.handleInput" value={props.phoneNum} placeholder="Phone Number"/></div>
            <div><input name="email" id={style.receipient_email} type="text" onChange="props.handleInput" value={props.email} /></div>
            <div><input name="emailConfirm" id={style.receipient_emailConfirm} type="text" onChange="props.handleInput" value={props.emailConfirm} /></div>
          </div>
          <input className={style.shipping_btn} type="submit" />
        </form>

      </div>
    )
}


export default EnglishVersion;


// <div className="form-group mt-4 mb-4">
//   <label className="mb-0" htmlFor="status">Status:</label>
//     <select name="status" id="status" onChange={props.handleInput} value={props.report.status}>
//       <option value="Arrived early">Arrived early</option>
//       <option value="Delay">Delay</option>
//     </select>
// </div>
