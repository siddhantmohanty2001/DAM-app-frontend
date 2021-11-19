
import React from 'react'
import { HexColorPicker } from "react-colorful";

interface Props{
   
    setPadding:(x:string|number| undefined)=>void,
    color: string|number| undefined,
    setColor:(x:string|number| undefined)=>void,
}
const FramesButtonDetails = ({setPadding,color,setColor}:Props) => {
    return (
        <div className="button-details">
            <h1>Frames</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="but2" >
            <h4>Padding</h4>
            <input style={{width:"100%"}} type="text" onChange={(e)=>{setPadding(e.target.value)}}></input> 
            </div>
            <h3>BACKGROUND</h3>
            <div className="but2">
            <h4>Color</h4>
            <div className="but1">
            <div style={{backgroundColor:`${color}`, width:"20px", height:"20px"}}></div>
            <div >
            <input style={{width:"100%",border:"none"}} type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}></input> 
            </div>
            </div>
            <div style={{marginTop:"2rem"}}>
            <HexColorPicker color={color as 'string | undefined'} onChange={setColor} />
            </div>
            </div>
            <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default FramesButtonDetails
