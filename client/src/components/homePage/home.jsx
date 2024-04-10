import React, { useEffect, useState } from 'react'
import "../../App.css"
import Top from "../header/top"
import Bottom from "../footer/bottom"
import Burger from "../../assets/burger.jpg"
import Coffee from "../../assets/coffee.jpg"
import Dosa from "../../assets/dosa.jpg"
import Shake from "../../assets/shake.jpg"
import Maggie from "../../assets/maggie.jpg"
import NorthIndian from "../../assets/north_indian.jpg"
import Online from "../../assets/online.jpg"
import Counter from "../../assets/crowd-free-counter.jpg"
import Pastry from "../../assets/pastry.jpg"

const Home = () => {
    const [num, setNum] = useState(1)
    const handleChange = (event) => {
        console.log(event.target.value)
        setNum(event.target.value)
    }
    useEffect(() => {
        let intervalScroll = setInterval(function () {
            if (document.getElementById('radio1').checked === true) {
                setNum(2);
            } else if (document.getElementById('radio2').checked === true) {
                setNum(3);
            } else if (document.getElementById('radio3').checked === true) {
                setNum(4);
            } else if (document.getElementById('radio4').checked === true) {
                setNum(5);
            } else if (document.getElementById('radio5').checked === true) {
                setNum(6);
            } else if (document.getElementById('radio6').checked === true) {
                setNum(7);
            } else {
                setNum(1);
            }
            console.log(num)
        }, 5000)
    return () => clearInterval(intervalScroll);
    }, []);

    return (
        <div>
            <h1><a href="/home" className="hLink">Mess and Canteen Booking</a></h1>
            <Top />
            <div className="slide-back">
                <div className='login-body-flex-item'>
                    <div className="slider">
                        <div className="slides">
                            <input type="radio" name="radio-btn" id="radio1" value={1} checked={num === 1} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio2" value={2} checked={num === 2} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio3" value={3} checked={num === 3} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio4" value={4} checked={num === 4} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio5" value={5} checked={num === 5} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio6" value={6} checked={num === 6} onClick={handleChange} />
                            <input type="radio" name="radio-btn" id="radio7" value={7} checked={num === 7} onClick={handleChange} />


                            <div className="slide first"><img src={NorthIndian} alt="" /></div>
                            <div className="slide"><img src={Dosa} alt="" /></div>
                            <div className="slide"><img src={Maggie} alt="" /></div>
                            <div className="slide"><img src={Burger} alt="" /></div>
                            <div className="slide"><img src={Pastry} alt="" /></div>
                            <div className="slide"><img src={Coffee} alt="" /></div>
                            <div className="slide"><img src={Shake} alt="" /></div>


                            <div className="auto-nav">
                                <div className="auto-btn1"></div>
                                <div className="auto-btn2"></div>
                                <div className="auto-btn3"></div>
                                <div className="auto-btn4"></div>
                                <div className="auto-btn5"></div>
                                <div className="auto-btn6"></div>
                                <div className="auto-btn7"></div>
                            </div>

                        </div>

                        <div className="manual-nav">
                            <label htmlFor="radio1" className="manual-btn"></label>
                            <label htmlFor="radio2" className="manual-btn"></label>
                            <label htmlFor="radio3" className="manual-btn"></label>
                            <label htmlFor="radio4" className="manual-btn"></label>
                            <label htmlFor="radio5" className="manual-btn"></label>
                            <label htmlFor="radio6" className="manual-btn"></label>
                            <label htmlFor="radio7" className="manual-btn"></label>
                        </div>
                    </div>
                    <div className="tagline">
                        <div className="ad"><img src={Counter} alt="" /></div>
                        <div className="txt">
                            <div> Tired of long order lines </div>
                            <div> No more hassle </div>
                        </div>
                    </div>
                    <div className="tagline">
                        <div className="ad"><img src={Online} alt="" /></div>
                        <div className="txt">
                            <div> Book Online </div>
                            <div> Get Notified </div>
                        </div>
                    </div>
                </div>
                <Bottom />
            </div>
        </div>
    )
}

export default Home