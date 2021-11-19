import React from 'react'
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import Crop169OutlinedIcon from '@mui/icons-material/Crop169Outlined';
import CropPortraitOutlinedIcon from '@mui/icons-material/CropPortraitOutlined';
import Crop54OutlinedIcon from '@mui/icons-material/Crop54Outlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


interface Props {
    cropWidth: string|number,
    cropHeight: string|number,
    aspectRatio:string|number,
    setCropWidth:(x:string|number)=>void,
    setCropHeight:(x:string|number)=>void,
    setAspectRatio:(x:string|number)=>void,
}
const Buttondetails = ({cropWidth,cropHeight,aspectRatio,setCropWidth,setCropHeight,setAspectRatio}:Props) => {
    return (
        <div className="button-details">
        <form onSubmit={(e)=>{e.preventDefault()}}>
        <h1>Crop</h1>
        <div className="but1">
            <div className="but2">
            <h4>Width</h4>
            <input type="text"  onChange={(e)=>{setCropWidth(e.target.value+"px")}}></input>   
            </div>
                        
            <div className="but2">
            <h4>Height</h4>
            <input type="text"  onChange={(e)=>{setCropHeight(e.target.value+"px")}}></input>
            </div> 
        </div>
        <div>
            <h4>Common Aspect Ratios</h4>
            <div >
                <div className="but1">
                <div className="but2">
            <button onClick={()=>{setAspectRatio(1)}} style={{backgroundColor:aspectRatio===1?"#DA70D6":""}}><CropSquareOutlinedIcon style={{fontSize:"6rem"}}/><div>square</div></button>
                </div>
                <div className="but2">
            <button onClick={() =>{setAspectRatio(16/9)}} style={{backgroundColor:aspectRatio===16/9?"#DA70D6":""}}><Crop169OutlinedIcon style={{fontSize:"6rem"}}/><div>16:9</div></button>
                </div>
                </div>
                <div className="but1">
                <div className="but2">
            <button onClick={()=>{setAspectRatio(9/16)}} style={{backgroundColor:aspectRatio===9/16?"#DA70D6":""}}><CropPortraitOutlinedIcon style={{fontSize:"6rem"}}/><div>9:16</div></button>
                </div>
                <div className="but2">
            <button onClick={() =>{setAspectRatio(4/3)}} style={{backgroundColor:aspectRatio===4/3?"#DA70D6":""}}>< Crop54OutlinedIcon style={{fontSize:"6rem"}}/><div>4:3</div></button>
                </div>
                </div>
                <div className="but1">
                <div className="but2">
            <button onClick={()=>{setAspectRatio(3/4)}} style={{backgroundColor:aspectRatio===3/4?"#DA70D6":""}}><CropPortraitOutlinedIcon style={{fontSize:"6rem"}}/><div>3:4</div></button>
                </div>
                <div className="but2">
            <button onClick={() =>{setAspectRatio(0)}} style={{backgroundColor:aspectRatio===0?"#DA70D6":""}}><CircleOutlinedIcon style={{fontSize:"6rem"}}/><div>circle</div></button>
                </div>
                </div>
            </div>
            
        </div>
        <div>
            <h4>Facebook Ratios</h4>
            {/* <div className="but1">
                <div className="but2">
            <button onClick={()=>{setHflip((hflip===1)?-1:1)}}><SwapHorizontalCircleIcon/><div>Flip Horizontally</div></button>
                </div>
                <div className="but2">
            <button onClick={() =>{setVflip((vflip===1)?-1:1)}}><SwapVerticalCircleIcon/><div>Flip Vertically</div></button>
                </div>
            </div> */}
        </div>
        <button>reset</button>
        <input type="submit" value="save"></input>
        </form>
    </div>
    )
}

export default Buttondetails

