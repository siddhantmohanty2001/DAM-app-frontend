import React from 'react'
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
interface Props {
    imageQuality: number,
    setImageQuality:(x:number)=>void
}
const ImageQualityButtonDetails = ({imageQuality,setImageQuality}:Props) => {
    return (
        <div className="button-details">
            <h1>Image Quality</h1>
            <div className="image-format-button">
                    <div className="but1">
                        <div className="but2">
                        <button style={{margin:"0.25rem",backgroundColor:imageQuality===0.2?"#DA70D6":""}} onClick={() =>{setImageQuality(0.2)}}><GppBadIcon style={{fontSize:"3rem"}}/><div>very low</div></button>
                        <button style={{margin:"0.25rem",backgroundColor:imageQuality===0.4?"#DA70D6":""}} onClick={() =>{setImageQuality(0.4)}}><img alt="low" src="https://img.icons8.com/ios-filled/50/000000/thumbs-down.png"/><div>low</div></button>
                        </div>        
                    </div>
                    <div className="but1">
                        <div className="but2">
                    <button style={{margin:"0.25rem",backgroundColor:imageQuality===0.66?"#DA70D6":""}} onClick={() =>{setImageQuality(0.66)}}><img alt="medium"src="https://img.icons8.com/ios-filled/50/000000/thumb-up--v3.png"/><div>medium</div></button>
                    <button style={{margin:"0.25rem",backgroundColor:imageQuality===0.75?"#DA70D6":""}} onClick={() =>{setImageQuality(0.75)}}><img alt="high"src="https://img.icons8.com/ios-filled/50/000000/thumb-up--v1.png"/><div>high</div></button>
                         </div>
                    </div>
                    <div className="but1">
                        <div className="but2">
                    <button style={{margin:"0.25rem",backgroundColor:imageQuality===1?"#DA70D6":""}} onClick={() =>{setImageQuality(1)}}><GppGoodIcon style={{fontSize:"3rem"}}/><div>very high</div></button>
                    <button style={{margin:"0.25rem",backgroundColor:imageQuality===0.5?"#DA70D6":""}} onClick={() =>{setImageQuality(0.5)}}><CropOriginalIcon style={{fontSize:"3rem"}}/><div>original</div></button>
                    </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default ImageQualityButtonDetails
