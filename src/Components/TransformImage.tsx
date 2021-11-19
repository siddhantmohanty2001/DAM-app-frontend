import React,{SyntheticEvent,useRef} from 'react'
import dummy from '../dummy.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface Props{
    image:string|undefined,
    width:string|number|undefined,
     height:string|number|undefined,
     hflip:string|number|undefined,
     vflip:string|number|undefined,
     brightness:number | number[] | undefined,
     contrast:number|number[]|undefined,
     saturation:number|number[]|undefined,
     threshold:number|number[]|undefined,
     padding:string|number|undefined,
     color:string|number|undefined,
     setImage:(x:string|undefined)=>void
}
const TransformImage = ({image,setImage,width, height,hflip,vflip,brightness,contrast,saturation,threshold,padding,color}:Props) => {

    const uploadref = useRef<HTMLInputElement|null>(null);

    const onSelectFile=(e:SyntheticEvent) => {
        const target= e.target as HTMLInputElement;
        if(target.files&&target.files.length>0){
            const reader=new FileReader();
            reader.readAsDataURL(target.files[0]);
            reader.addEventListener('load',()=>{
                console.log(reader.result);
                const result=reader.result as string | undefined;
                 setImage(result);
            })
        }
    }
   
    return (
        <div className="transform-image">
            <div className="crop">
                {image?<img src={image} alt="given" className="resize" style={{width:`${width}`,height:`${height}`, transform: `scaleX(${hflip}) scaleY(${vflip})`,filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${threshold}%)`,border: `${padding}px solid ${color}`,
            
        }} ></img>:<div className="dummy"><img alt="dummy" src={dummy}></img><div>
            <div className="but2">
        <button onClick={(e) =>{e.preventDefault();(uploadref as React.MutableRefObject<HTMLInputElement>).current.click();}}><CloudUploadIcon style={{fontSize:"3rem"}}/><div>upload</div></button>
        </div>
        <input type="file" accept="image/*" onChange={onSelectFile} ref={uploadref} style={{display:"none"}}></input>
        </div></div>
    }
            
        </div>
        </div>
    )
}

export default TransformImage
