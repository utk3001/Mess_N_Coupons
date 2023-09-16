import React from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"
import FoodImg from '../../assets/coffee.jpg'
import { foods } from '../../data/data'


const coffee_day = () => {
  return (
    <div>
      <h1><a href="/" className="hLink">Mess and Canteen Booking</a></h1>
      <Top/>
      <div className="slide-back">
        <p className="cartheading">Coffee Day</p>
        <img src={FoodImg} alt="" className="outletImg" />
        <div className="menu">
          <div className="menu-items">
            <h2>Menu</h2>
            <div className="list">
              {foods.map((food) => (
                food.category === "coffee" &&
                <div className="list-item">
                    <div className="flex-list">
                      <div className="flex-name-desc">
                        <div className="Name">{`${food.name}`}</div>
                        <div className="Desc">{`${food.desc}`}</div>
                      </div>
                      <div className="flex-rate-quant">
                        <div className="Rs">Rs</div>
                        <div className="Rate">{`${food.price}`}</div>
                        <div className="Quant">
                          <button className="inc-dec" onclick="decrement(0)">-</button>
                          <output className="Quant-out" id="out"></output>
                          <button className="inc-dec" onclick="increment(0)">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="btn-div">
            <button onclick="window.location.href='/cart'" className="navitem">View Cart</button>
          </div>
        </div>
        <Bottom/>
      </div>
    </div>
  )
}

export default coffee_day