 import React from 'react'
import './Order.css'

export const Order = ({data}) => {
    return (
        <div  className="order">
            <div style={{backgroundImage:`url(${data.img})`}} className="img" > </div>
            <div className="title">
               {data.title}
            </div>
            <div className="text">
              {data.text}
            </div>
            <div className="price">
               {data.price}
            </div>
           <div className="pieces">
               {data.pieces}
           </div>
             <div className="calorie">
                 {data.calorie}
             </div>
             <div className="count">
                  <div className="minus">
                      {data.minus}
                  </div>
                  <input className="in" type="number" value="1"/>
                 <div className="plus">
                      {data.plus}
                 </div>
             </div>
          
                <div className="add">
                    {data.add}
                </div>
     </div>
    )
}


