import React from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"
import FoodImg from '../../assets/mess-menu.jpg'
import { foods } from '../../data/data'
import Counter from '../total/counter'

const mess = () => {
  return (
    <div>
      <h1><a href="/" className="hLink">Mess and Canteen Booking</a></h1>
      <Top />
      <div className="slide-back">
        <p className="cartheading">Mess</p>
        <img src={FoodImg} alt="" className="outletImg" id='mess' />
        <div className="menu">
          <div className="menu-items">
            <h2>Menu</h2>
            <div className="list">
              {foods.map((food) => (
                food.category === "mess" &&
                <div className="list-item">
                  <div className="flex-list">
                    <div className="flex-name-desc">
                      <div className="Name">{`${food.name}`}</div>
                      <div className="Desc">{`${food.desc}`}</div>
                    </div>
                    <div className="flex-rate-quant">
                      <div className="Rs">Rs</div>
                      <div className="Rate">{`${food.price}`}</div>
                      <Counter />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-div">
            <a href="/cart"><button className="navitem">View Cart</button></a>
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default mess