
import './Time.css'
const Time = (props) => {
    console.log(props.time)
    let totalTime= props.time;
    // console.log(totalTime)
    let sum = 0;
    totalTime.forEach(element => {
        sum = sum + element
    });
    // const [showOn ,setShowOn] = useState([])
    const clickHandeler = (id) =>{
        console.log('btn clicked')
        
 

    }
   
    return (
        <div>
            <div className="break-sec">
                <h4>Add a Break</h4>
               <div className="btn-section">
                <p><button onClick={()=>clickHandeler(10)} className='btn-group'>10s</button></p>
                <p><button onClick={()=>clickHandeler(10)}className='btn-group'>20s</button></p>
                <p><button onClick={()=>clickHandeler(10)}className='btn-group'>30s</button></p>
                <p><button onClick={()=>clickHandeler(10)}className='btn-group'>40s</button></p>
                <p><button onClick={()=>clickHandeler(10)}className='btn-group'>50s</button></p>
                <p><button onClick={()=>clickHandeler(10)}className='btn-group'>60s</button></p>
               </div>
            </div>
            <div className="add-section">
            <h3 className='heading-design'>Exercise Details:{totalTime.length}</h3> 
            <p className='para-style'>Exercise Time:{sum} minutes</p> 
            <p className='para-style'>Break Time:{}</p> 
            </div>
        </div>
    );
};

export default Time;