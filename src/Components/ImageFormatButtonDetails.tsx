import React from 'react'
interface Props{
    setImageFormat:(x:string)=>void,
    imageFormat:string,
}

const ImageFormatButtonDetails = ({setImageFormat,imageFormat}:Props) => {
    return (
        <div className="button-details">
            <h1>Image Format</h1>
            <h3>COMMON</h3>
            <div className="image-format">
                <div className="image-format-button">
                    <div className="but1">
                        <div className="but2">
                        <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/png"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/png")}}><img alt="png" src="https://img.icons8.com/ios/50/000000/png.png"/></button>
                        <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/jpg"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/jpg")}}><img alt="jpg" src="https://img.icons8.com/ios/50/000000/jpg.png"/></button>
                        </div>        
                    </div>
                    <div className="but1">
                        <div className="but2">
                    <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/tiff"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/tiff")}}><img alt="tiff" src="https://img.icons8.com/ios/50/000000/tif.png"/></button>
                    <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/bmp"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/bmp")}}><img alt="bmp" src="https://img.icons8.com/ios/50/000000/bmp.png"/></button>
                         </div>
                    </div>
                    <div className="but1">
                        <div className="but2">
                    <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/gif"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/gif")}}><img alt="gif" src="https://img.icons8.com/ios/50/000000/gif--v2.png"/></button>
                    <button style={{margin:"0.25rem",backgroundColor:imageFormat==="image/eps"?"#DA70D6":""}} onClick={() =>{setImageFormat("image/eps")}}><img alt="eps" src="https://img.icons8.com/ios/50/000000/eps.png"/></button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ImageFormatButtonDetails
