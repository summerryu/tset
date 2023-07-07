import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Maincontainer(props) {
    
  return (
    <div id="container">
        <h2>메인 컴포넌트</h2>
        {
            props.page.map(function(item,index){
                return(
                    <div key={index} className='boxs'>
                        <Link to={`/sub/${index}`}>
                            <img src={item.imgs}/>
                            <p>{item.price}</p>
                            <h4>{item.title}</h4>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Maincontainer