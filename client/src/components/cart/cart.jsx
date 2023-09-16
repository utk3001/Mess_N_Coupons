import React from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"

const cart = () => {
    return (
        <div className="contain">
            <h1><a href="/" className="hLink">Mess and Canteen Booking</a></h1>
            <Top/>
            <div className="slide-back">
                <div className="cartheading">Cart</div>
                <div className="menu">
                    <div className="menu-items">
                        <h2>name of Place that recieved order</h2>
                        <div className="list">
                            <div className="list-item">
                                <div className="flex-list">
                                    <div className="flex-name-desc">
                                        <div className="Name">Tea</div>
                                        <div className="Desc">A hot drink</div>
                                    </div>
                                    <div className="flex-rate-quant">
                                        <div className="Rs">Rs</div>
                                        <div className="Rate">9.00</div>
                                        <div className="Quant">
                                            <button className="inc-dec" onclick="decrement(0)">-</button>
                                            <output className="Quant-out">0</output>
                                            <button className="inc-dec" onclick="increment(0)">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="flex-list">
                                    <div className="flex-name-desc">
                                        <div className="Name">Tea</div>
                                        <div className="Desc">A hot drink</div>
                                    </div>
                                    <div className="flex-rate-quant">
                                        <div className="Rs">Rs</div>
                                        <div className="Rate">9.00</div>
                                        <div className="Quant">
                                            <button className="inc-dec" onclick="decrement(1)">-</button>
                                            <output className="Quant-out">0</output>
                                            <button className="inc-dec" onclick="increment(1)">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="flex-list">
                                    <div className="flex-name-desc">
                                        <div className="Name">Tea</div>
                                        <div className="Desc">A hot drink</div>
                                    </div>
                                    <div className="flex-rate-quant">
                                        <div className="Rs">Rs</div>
                                        <div className="Rate">9.00</div>
                                        <div className="Quant">
                                            <button className="inc-dec" onclick="decrement(2)">-</button>
                                            <output className="Quant-out">0</output>
                                            <button className="inc-dec" onclick="increment(2)">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="flex-list">
                                    <div className="flex-name-desc">
                                        <div className="Name">Total</div>
                                        <div className="Desc">To pay</div>
                                    </div>
                                    <div className="flex-rate-quant">
                                        <div className="Rs">Rs</div>
                                        <div id="Total"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button onclick="window.location.href='/'" className="navitem" id="cancel">Cancel</button>
                        <button onclick="window.location.href='/'" className="navitem" id="pay">Pay</button>
                    </div>
                </div>
                <Bottom/>
            </div>
        </div>
    )
}

export default cart