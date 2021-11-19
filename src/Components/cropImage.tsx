
import React, { useState} from 'react'
import Cropper from 'react-easy-crop'


interface oncrop{
    x:number,
    y:number,
    width:number,
    height:number,
}

interface Props{
    image: string|number| undefined,
    setImage:(x:string|undefined)=>void,
    croppedArea:oncrop|null,
    setCroppedArea:(x:oncrop|null)=>void,
    aspectRatio:number|string
}
const Image = ({image,setImage,croppedArea,setCroppedArea,aspectRatio}:Props) => {
    // const [image,setImage]=useState<string | undefined>('');
    // const [croppedArea,setCroppedArea]=useState<oncrop|null>(null);
    const [crop,setCrop]=useState({x:0,y:0});
    const [zoom,setZoom]=useState(1);
    const onCropComplete = (croppedAreaPercentage:oncrop,croppedAreaPixels:oncrop) => {
        setCroppedArea(croppedAreaPixels);
    }
    
    
    return (
        <div className="image">
           
           <div className="image-cropper">
           {image&&<div className="cropper"><Cropper image={image as string} zoom={zoom} crop={crop} aspect={aspectRatio as number} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete}/></div>}
           </div>
            
        </div>
    )
}

export default Image
