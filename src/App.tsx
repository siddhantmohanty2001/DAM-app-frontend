import React, {  useEffect, useState } from 'react';
import Buttonbar from './Components/Buttonbar'
import Buttondetails from './Components/cropButtondetails';
import Image from './Components/cropImage';
import TransformImage from './Components/TransformImage';
import TransformButtonDetails from './Components/TransformButtonDetails';
import FocalPointButtonDetails from './Components/FocalPointButtonDetails';
import EffectButtonDetails from './Components/EffectButtonDetails';
import OverlayButtonDetails from './Components/OverlayButtondetails';
import FramesButtonDetails from './Components/FramesButtonDetails';
import ImageQualityButtonDetails from './Components/ImageQualityButtonDetails';
import ImageFormatButtonDetails from './Components/ImageFormatButtonDetails';
import {generateDownload} from './utils/cropImage';
import getCroppedImg from './utils/cropImage';
import {dataURLtoFile} from './utils/dataURLtoFile';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
interface oncrop{
  x:number,
  y:number,
  width:number,
  height:number,
}

function App() {
  const[option,setOption]=useState(1);
  const [image,setImage]=useState<string | undefined>('');
  const [croppedArea,setCroppedArea]=useState<oncrop|null>(null);
  const [cropWidth,setCropWidth]=useState<string|number>("100%");
  const [cropHeight,setCropHeight]=useState<string|number>("100%");
  const [aspectRatio,setAspectRatio]=useState<string|number>(4/3);
  
  const [width,setWidth]=useState<string|number| undefined>("100%");
  const [height,setHeight]=useState<string|number| undefined>("80vh");
  const [hflip,setHflip]=useState<string|number| undefined>(1);
  const [vflip,setVflip]=useState<string|number| undefined>(1);
  const [brightness,setBrightness]=useState<number | number[] | undefined>(100);
  const [contrast,setContrast]=useState<number| number[]| undefined>(100);
  const [saturation,setSaturation]=useState<number|number[]| undefined>(100);
  const [threshold,setThreshold]=useState<number| number[]| undefined>(0);
  const [padding,setPadding]=useState<string|number| undefined>(0);
  const [color,setColor]=useState<string|number| undefined>("none");
  const[imageFormat,setImageFormat]=useState<string>("image/jpg");
  const [imageQuality,setImageQuality]=useState<number>(0.5);
  const [style,setStyle]=useState({width,height,hflip,vflip,brightness,contrast,saturation,threshold,padding,color});
  useEffect(()=>{
    setStyle({width,height,hflip,vflip,brightness,contrast,saturation,threshold,padding,color});
  },[width,height,hflip,vflip,brightness,contrast,saturation,threshold,padding,color])

  const onDownload=()=>{
    generateDownload(image,croppedArea,style);
  }
  const onUpload=async()=>{
    const canvas=await getCroppedImg(image,croppedArea,style);
    const canvasDataUrl=canvas.toDataURL(imageFormat,imageQuality);
    const editedImageFile=dataURLtoFile(canvasDataUrl,`edited-image.${imageFormat}`,imageFormat);
    console.log(editedImageFile);

    

    try{
      const formdata=new FormData();
    formdata.append("image",editedImageFile);
    console.log(formdata);
      const res=await fetch('http://localhost:9000/api/users/setProfilePic',{
      method:"POST",
      body:formdata,
    });
    const res2= await res.json();
    console.log(res2);
    }catch(err){
      console.warn(err);
    }

    
  }
  return (
    <div className="head">
      <div className="header">
      <h1>Image Name</h1>
      </div>
      
    <div className="subhead">
      <Buttonbar option={option} setOption={setOption}/>
      {(option===1)&&<><Buttondetails cropWidth={cropWidth} cropHeight={cropHeight} aspectRatio={aspectRatio} setCropWidth={setCropWidth} setCropHeight={setCropHeight} setAspectRatio={setAspectRatio}/>{image?<Image image={image} setImage={setImage} croppedArea={croppedArea} setCroppedArea={setCroppedArea} aspectRatio={aspectRatio}/>:<TransformImage image={image} setImage={setImage} width={width} height={height} hflip={hflip} vflip={vflip} brightness={brightness} contrast={contrast} saturation={saturation} threshold={threshold} padding={padding} color={color}/>}</>}
      {(option===2)&&<><TransformButtonDetails width={width} height={height} setWidth={setWidth} setHeight={setHeight} vflip={vflip} hflip={hflip} setVflip={setVflip} setHflip={setHflip}/></>}
      {(option===3)&&<><FocalPointButtonDetails/></>}
      {(option===4)&&<><EffectButtonDetails brightness={brightness} setBrightness={setBrightness} contrast={contrast} setContrast={setContrast} saturation={saturation} setSaturation={setSaturation} threshold={threshold} setThreshold={setThreshold}/></>}
      {(option===5)&&<><OverlayButtonDetails/></>}
      {(option===6)&&<><FramesButtonDetails color={color} setPadding={setPadding}  setColor={setColor}/></>}
      {(option===7)&&<><ImageQualityButtonDetails imageQuality={imageQuality} setImageQuality={setImageQuality}/></>}
      {(option===8)&&<><ImageFormatButtonDetails setImageFormat={setImageFormat} imageFormat={imageFormat}/></>}
      {option!==1&&<TransformImage image={image} setImage={setImage} width={width} height={height} hflip={hflip} vflip={vflip} brightness={brightness} contrast={contrast} saturation={saturation} threshold={threshold} padding={padding} color={color}/>}
      {image&&<div>
      <button style={{backgroundColor:"white",border:"none"}} onClick={()=>{setImage(undefined)}}>
      <CancelOutlinedIcon style={{fontSize:"3rem"}}/>
      </button>
      </div>}
    </div>

    <div className="footer">
    <button onClick={onDownload}>Done</button>
    <button onClick={onUpload}>upload</button>
    </div>
    
    </div>
  );
}

export default App;
