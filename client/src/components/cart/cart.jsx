import React from 'react'
import '../../App.css'
import Top from "../header/top"
import Bottom from "../footer/bottom"
import Counter from '../total/counter'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Cart = () => {

    const [all, setAll] = useState(null);
    const [user,setUser] = useState(null);
    const [error, setError] = useState("");
    const [total, setTotal] = useState(0);
    const [click, setClick] = useState(0);
    const [message,setMessage] = useState("");
    const navigate = useNavigate()
    const outlet = ["Mess", "Main Canteen", "Kerala Canteen", "Shakes N Juice", "Hotspot", "Coffee Day"];
    let ind=0;

    const handle = (userData) => {
        setUser(userData);
    }

    const handleCancel = () => {
        removeAll();
    }

    const handleClick = () => {
        // console.log(1);
        setClick(click + 1);
    }

    const resetInd = () => {
        ind=0;
    }

    useEffect(() => {
        getAll();
    }, [click]);

    const removeAll = async()=> {
        try{
            const res = await fetch('http://localhost:3001/item/removeAll')
            navigate("/home")
        } catch(error) {
            console.log(error);
        }
    }

    const getAll = async () => {
        try {
            const res = await fetch(`http://localhost:3001/item/all`);
            const body = await res.json();
            // console.log(body.data);
            setAll(body.data)
        } catch (error) {
            setError(error)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    useEffect(() => {
        setTotal(help().x);
        setMessage(help.apply().y);
    }, [all]);

    const help = () => {
        let y = "";
        let x = 0;
        let m = all;
        if (m !== null) {
            m.forEach((data) => {
                x += (data.price * data.quantity);
                y += (data.shop+" : "+data.name+" "+data.quantity+" x "+data.price+" = "+data.price*data.quantity+"\n");
            });
        }
        // console.log(y);
        return {x,y};
    };

    const handleSendEmail = async () => {
        try {
            const finalmsg = "Please collect your food in 30 mins.\n"
            +message+"Total = "+total+"\nThank you for the purchase."
          const response = await fetch('http://localhost:3001/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({
              to: user.email,
              subject: 'Confirmed Order',
              text: finalmsg
            }),
          });
          const data = await response.json();
          console.log(finalmsg)
        //   console.log(data);
          handleCancel();
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

    return (
        <div className="contain">
            <h1><a href="/home" className="hLink">Mess and Canteen Booking</a></h1>
            <Top userData={handle} />
            <div className="slide-back">
            <div className='login-body-flex-item'>
                <div className="cartheading">Cart</div>
                <div className="menu">
                    {outlet.map(outletName => {
                        return (
                            <div className="menu-items">
                                {/* <h2>{outletName}</h2> */}
                                <div className="list">
                                    {all === null ? "" :
                                        all.map(data => {
                                            if (data.shop === outletName) {
                                                return (
                                                    <div className="list-item">
                                                        {(ind++)===0 && <h2>{outletName}</h2>}
                                                        <Counter data={data} shop={outletName} handleClick={handleClick} />
                                                    </div>
                                                );
                                            }
                                        })
                                    }
                                </div>
                                {ind===0?"":resetInd()}
                            </div>
                        );
                    })

                    }
                    <div className='menu-items'>
                        <div className='list'>
                            <div className="list-item">
                                <h2>Total</h2>
                                <div className="flex-list">
                                    <div className="flex-name-desc">
                                        <div className="Name">Total</div>
                                        <div className="Desc">To pay</div>
                                    </div>
                                    <div className="flex-rate-quant">
                                        <div className="Rs">Rs</div>
                                        <div id="Total">{total}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btn-div">
                        <button onClick={handleCancel} className="navitem" id="cancel">Cancel</button>
                        <button onClick={handleSendEmail} className="navitem" id="pay">Pay</button>
                    </div>
                </div>
                </div>
                <Bottom />
            </div>
        </div>
    )
}

export default Cart