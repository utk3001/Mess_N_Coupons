import React from 'react'
import '../../App.css'

const top = () => {
  return (
        <div className="navbar">
                <div><a href="/maincanteen" className="navitem">Main Canteen</a></div>
                <div><a href="/kerala" className="navitem">Kerala Canteen</a></div>
                <div><a href="/hotspot" className="navitem">Hotspot</a></div>
                <div><a href="/coffee" className="navitem">Coffee day</a></div>
                <div><a href="/shake" className="navitem">Shakes & Juice</a></div>
                <div><a href="/mess" className="navitem">Mess</a></div>
                <div className="cart-grow">
                    <div><a href="/cart" className="navitem cart-align">Cart</a></div>
                </div>
                <div className="drop-down">
                    <div><a href="/login" className="navitem">Logout</a></div>
                </div>
            </div>
  )
}

export default top