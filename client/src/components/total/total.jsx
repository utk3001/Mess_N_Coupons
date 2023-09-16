import React from 'react'
import "../../App.css"

const total = () => {
    return (
        <div>
            <div className="list-item">
                <div className="flex-list">
                    <div className="flex-name-desc">
                        <div className="Name">Total</div>
                        <div className="Desc">To pay</div>
                    </div>
                    <div className="flex-rate-quant">
                        <div className="Rs">Rs</div>
                        <div id="Total">xxxxx</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default total