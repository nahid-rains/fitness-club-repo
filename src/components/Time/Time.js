
import { useState } from 'react';

import './Time.css'
const Time = (props) => {
    // console.log(props.time)
    let totalTime= props.time;
    // console.log(totalTime)
    let sum = 0;
    totalTime.forEach(element => {
        sum = sum + element
    });
    const [show,setShow] = useState([])
    
    const clickHandeler = (id) =>{
        let showon = id;
        // console.log(show)
       setShow(showon)
        
 

    }
   
    return (
        <div>
            <div className="break-sec">
                <h4>Add a Break</h4>
               <div className="btn-section">
                <p><button onClick={()=>clickHandeler(10)} className='btn-group'>10s</button></p>
                <p><button onClick={()=>clickHandeler(20)}className='btn-group'>20s</button></p>
                <p><button onClick={()=>clickHandeler(30)}className='btn-group'>30s</button></p>
                <p><button onClick={()=>clickHandeler(40)}className='btn-group'>40s</button></p>
                <p><button onClick={()=>clickHandeler(50)}className='btn-group'>50s</button></p>
                <p><button onClick={()=>clickHandeler(60)}className='btn-group'>60s</button></p>
               </div>
            </div>
            <div className="add-section">
            <h3 className='heading-design'>Exercise Details:{totalTime.length}</h3> 
            <p className='para-style'>Exercise Time:{sum} minutes</p> 
            <p className='para-style'>Break Time:{show} seconds</p> 
            </div>
        </div>
    );
};

export default Time;