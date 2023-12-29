import React from 'react';
import './Item.css'
const Item = (props) => {
    const {name,age,img,time} = props.item
    return (
        <div className='item'>
            <img src={img} alt="" />
          <div className="info-box">
            <p className='info-name'>{name}</p>
            <p className='age-info'>For Age:{age}</p>
            <p className='time-info'>Time Require:{time}</p>
          </div>
         <div className="btn-add">
      <p><button onClick={()=>props.handeler(props.item)}>addToList</button></p>
         </div>
        </div>
    );
};

export default Item;