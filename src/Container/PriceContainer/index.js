import React, { Component } from 'react';
import Nav from '../../Component/Nav';
import style from './Price.module.css'
import { Link } from 'react-router-dom';

class PriceContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Nav />
        <div>
          <div className={style.title}>Price Calculator</div>
          <div className={style.calculator_box}>
            <form>
              <div>
                <label>From:</label>
                <div><input className={style.address} /></div>
              </div>
              <div>
                <label>To:</label>
                <div><input  className={style.address}/></div>
              </div>

              <div className={style.size}>
                <div className={style.size_input}>
                  <label>Length:</label>
                  <div><input /></div>
                </div>
                <div className={style.size_input}>
                  <label>Width:</label>
                  <div><input /></div>
                </div>
                <div className={style.size_input}>
                  <label>Height:</label>
                  <div><input /></div>
                </div>
                <div>
                  <br></br>
                  <div>
                    <select>
                      <option value="in">in</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={style.weight}>
                <div>
                  <label>Weight</label>
                  <div><input /></div>
                </div>

                <div>
                  <br></br>
                  <div>
                    <select>
                      <option value="lb">lb</option>
                    </select>
                  </div>
                </div>
              </div>
              <button id={style.btn} type="submit">Get a quote</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default PriceContainer
