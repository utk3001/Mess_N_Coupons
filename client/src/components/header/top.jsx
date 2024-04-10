import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import '../../App.css'

const Top = (props) => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);

    const verifyCookie = async () => {
        // if (!cookies.token) {
        //     navigate("/");
        // }
        const res = await fetch(`http://localhost:3001/auth/verify`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000/'
            }
        })
        const data = await res.json()
        console.log(data);
        const { status, user } = data;
        if(status===false) {
            navigate("/")
        }
        if(props.userData!==undefined) {
            props.userData(user)
        }
        return status;
    };

    const removeAll = async()=> {
        try{
            const res = await fetch('http://localhost:3001/item/removeAll')
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // console.log(cookies)
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
          removeCookie("token");
          removeAll();
          navigate("/");
    };

    return (
        <div className='block'>
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
                <div><button id='lgo' className="navitem" onClick={Logout}>Logout</button></div>
            </div>
        </div>
        </div>
    )
}

export default Top