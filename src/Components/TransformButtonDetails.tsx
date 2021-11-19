import React from 'react'
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

interface Props{
    width:string|number| undefined, 
    height:string|number| undefined,
    vflip:string|number|undefined,
    hflip:string|number| undefined,
    setWidth:(x:string|number| undefined)=>void,
    setHeight:(x:string|number| undefined)=>void,
    setVflip:(x:string|number| undefined)=>void,
    setHflip:(x:string|number| undefined)=>void
}
const TransformButtonDetails = ({width, height,setWidth,setHeight,hflip,vflip,setVflip,setHflip}:Props) => {
    
    return (
        <div className="button-details">
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>Transform</h1>
                <h3>RESIZE</h3>
            <div className="but1">
                <div className="but2">
                <h4>Width</h4>
                <input type="text"  onChange={(e)=>{setWidth(e.target.value+"px")}}></input>   
                </div>
                            
                <div className="but2">
                <h4>Height</h4>
                <input type="text"  onChange={(e)=>{setHeight(e.target.value+"px")}}></input>
                </div> 
            </div>
            <div>
                <h3>FLIP</h3>
                <div className="but1">
                    <div className="but2">
                <button onClick={()=>{setHflip((hflip===1)?-1:1)}} style={{backgroundColor:hflip!==1?"#DA70D6":""}}><SwapHorizontalCircleIcon/><div>Flip Horizontally</div></button>
                    </div>
                    <div className="but2">
                <button onClick={() =>{setVflip((vflip===1)?-1:1)}} style={{backgroundColor:vflip!==1?"#DA70D6":""}}><SwapVerticalCircleIcon/><div>Flip Vertically</div></button>
                    </div>
                </div>
            </div>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default TransformButtonDetails
