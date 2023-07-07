import React, { useState } from 'react'

function Slide() {
    let [number,numberSet] = useState(0);

    let [views,viewsSet] = useState(
            ["view1","view2","view3","view4"])
  return (
    <div className='slider'>
        <div className='move' style={{marginLeft:(number* -100) + "%"}}>
            {
                views.map((list,index)=>{
                    return(
                        <div key={index} className="views">
                            {list}
                        </div>
                    )
                })
            }
        </div>
        <button className="prev" onClick={() => {(number === 0) ? numberSet(views.length - 1) : numberSet(--number) }}>이전</button>
        <button className="next" onClick={() => {(number === views.length - 1) ? numberSet(0) : numberSet(++number) }}>이후</button>
        <ul className='circles'>
            {
                views.map((list,index)=>{
                    return(
                        <li key={index} className={(number === index) ? "on" : ""} onClick={(event) => {numberSet(index); event.preventDefault();}}></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Slide