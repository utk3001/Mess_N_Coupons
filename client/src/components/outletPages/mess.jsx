import React, { useState } from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"
import FoodImg from '../../assets/mess-menu.jpg'
import { foods } from '../../data/data'
import Counter from '../total/counter'

const mess = () => {
  
  return (
    <div>
      <h1><a href="/home" className="hLink">Mess and Canteen Booking</a></h1>
      <Top />
      <div className="slide-back">
      <div className='login-body-flex-item'>
        <p className="cartheading">Mess</p>
        <img src={FoodImg} alt="" className="outletImg" id='mess' />
        <div className="menu">
          <div className="menu-items">
            <h2>Menu</h2>
            <div className="list">
              {foods.map((food) => (
                food.category === "mess" &&
                <div className="list-item">
                    <Counter data={food} shop={"Mess"}/>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-div">
          <button className="navitem"><a href="/cart">View Cart</a></button>
          </div>
        </div>
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default mess