import React, { useEffect } from 'react'
import '../../App.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { edit, add, remove } from '../../state/cartSlice'


const Counter = (props) => {
    const [quantity, setQuantity] = useState((props.data.quantity ? props.data.quantity : 0));
    const [prev, setPrev] = useState(-1);
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const inc = (e) => {
        setPrev(quantity)
        setQuantity(quantity + 1)
    }
    const dec = (e) => {
        if (quantity > 0) {
            setPrev(quantity)
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        handlegetOne();
    }, []);

    useEffect(() => {
        if (prev === 0 && quantity === 1) {
            console.log("Add");
            handleAdd();
        } else if (prev === 1 && quantity === 0) {
            console.log("Remove");
            handleRemove();
        } else if(prev!==-1){
            console.log("Edit");
            handleEdit();
        }
    }, [quantity]);

    const handleEdit = async () => {
        try {
            const res = await fetch(`http://localhost:3001/item/edit`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: props.data.name, desc: props.data.desc, price: props.data.price, quantity: quantity, shop: props.shop })
            })
            const data = await res.json()
            dispatch(edit(data))
            if (data.error) {
                throw data.error
            }
            if (props.handleClick) {
                props.handleClick()
            }
        } catch (error) {
            setError(error)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    const handleRemove = async () => {
        try {
            const res = await fetch(`http://localhost:3001/item/remove`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: props.data.name, desc: props.data.desc, price: props.data.price, quantity: quantity, shop: props.shop })
            })

            const data = await res.json()
            //   console.log(data)
            dispatch(remove(data))
            if (data.error) {
                throw data.error
            }
            if (props.handleClick) {
                props.handleClick()
            }
        } catch (error) {
            setError(error)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    const handleAdd = async () => {
        try {
            const res = await fetch(`http://localhost:3001/item/add`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: props.data.name, desc: props.data.desc, price: props.data.price, quantity: quantity, shop: props.shop })
            })

            const data = await res.json()
            //   console.log(data)
            dispatch(add(data))
            if (data.error) {
                throw data.error
            }
            if (props.handleClick) {
                props.handleClick()
            }
        } catch (error) {
            setError(error)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    const handlegetOne = async () => {
        try {
            const res = await fetch(`http://localhost:3001/item/one`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: props.data.name, desc: props.data.desc, price: props.data.price, quantity: quantity, shop: props.shop })
            })
            const data = await res.json()
            // console.log(data.data.quantity)
            setQuantity(data.data.quantity)
        } catch (error) {
            console.log(error)
            setError(error)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    return (
        <div className="flex-list">
            <div className="flex-name-desc">
                <div className="Name">{`${props.data.name}`}</div>
                <div className="Desc">{`${props.data.desc}`}</div>
            </div>
            <div className="flex-rate-quant">
                <div className="Rs">Rs</div>
                <div className="Rate">{`${props.data.price}`}</div>
                <div className="Quant">
                    <button className="inc-dec" disabled={quantity === 0} onClick={(e) => dec(e)}>-</button>
                    <output className="Quant-out" id="out">{quantity}</output>
                    <button className="inc-dec" onClick={(e) => inc(e)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter