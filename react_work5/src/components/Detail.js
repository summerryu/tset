import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
    let {no} = useParams();
  return (
    <div>
        <img src={props.page[no].imgs}/>
        <p>{props.page[no].price}</p>
        <h2>{props.page[no].title}</h2>
    </div>
  )
}

export default Detail