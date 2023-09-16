import React from 'react'
import '../../App.css'
import { useState } from 'react';

const Counter = () => {
    const [quantity, setquantity] = useState(0);
    const inc = () => {
        return setquantity(quantity + 1)
    }
    const dec = () => {
        if(quantity>0) {
            return setquantity(quantity - 1)
        }
    }
        return (
        <div className="Quant">
            <button className="inc-dec" disabled={quantity === 0} onClick={dec}>-</button>
            <output className="Quant-out" id="out">{quantity}</output>
            <button className="inc-dec" onClick={inc}>+</button>
        </div>
    )
}

export default Counter