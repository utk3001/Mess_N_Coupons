import React from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"
import FoodImg from '../../assets/maggie.jpg'
import { foods } from '../../data/data'
import Counter from '../total/counter'


const hotspot = () => {
  return (
    <div>
      <h1><a href="/home" className="hLink">Mess and Canteen Booking</a></h1>
      <Top/>
      <div className="slide-back">
      <div className='login-body-flex-item'>
        <p className="cartheading">Hotspot</p>
        <img src={FoodImg} alt="" className="outletImg" />
        <div className="menu">
          <div className="menu-items">
            <h2>Menu</h2>
            <div className="list">
              {foods.map((food) => (
                food.category === "hotspot" &&
                <div className="list-item">
                    <Counter data={food} shop={"Hotspot"}/>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-div">
          <button className="navitem"><a href="/cart">View Cart</a></button>
          </div>
        </div>
        </div>
        <Bottom/>
      </div>
    </div>
  )
}

export default hotspot