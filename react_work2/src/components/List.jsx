import React, { useState } from 'react'

function List() {
    let [List,setList] =useState(
        [{
            imgs:require("../img/Ballantines.png"),
            title:"상품1",
            price:"15,000"
        },
        {
            imgs:require("../img/Ballantines.png"),
            title:"상품2",
            price:"25,000"
        },
        {
            imgs:require("../img/Ballantines.png"),
            title:"상품3",
            price:"35,000"
        },
        {
            imgs:require("../img/Ballantines.png"),
            title:"상품4",
            price:"45,000"
        }]
    )
  return (
    <div className='Lists'>
        {
                List.map((menu,idx)=>{
                    return(
                        <div className='box' key={idx}>
                            <img src={menu.imgs} />
                            <h2>{menu.title}</h2>
                            <p>{menu.price}</p>
                        </div>
                    )
                }
            )    
        }
    </div>
  )
}

export default List