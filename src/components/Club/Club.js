import React, { useEffect, useState } from 'react';
import './Club.css'
import Item from '../Item/Item';
import Time from '../Time/Time';
const Club = () => {
    const [items, setItems] = useState([]);
    const [time,setTime] = useState([])
    useEffect(() =>{
        fetch('ultra.json')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[]);
    const btnHandeler = (item) =>{
    const newTime = [...time,item.time] ;
    setTime(newTime)
  
  
  
    }
    return (
        <div className='mother-container'>
            <div className="patrent-container">
             
              {
                items.map(item => <Item 
                  key={item.id}
                  item={item}
                  handeler={btnHandeler}
                ></Item>)
              }
            </div>
            <div className="sub-container">
              <Time time ={time}></Time>
            
            
            </div>
        </div>
    );
};

export default Club;