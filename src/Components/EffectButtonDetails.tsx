import React from 'react'
import { Slider } from '@mui/material'

interface Props {
    brightness:number | number[] | undefined,
    setBrightness:(x:number | number[] | undefined)=>void,
    contrast:number | number[] | undefined,
    setContrast:(x:number | number[] | undefined)=>void,
    saturation:number | number[] | undefined,
    setSaturation:(x:number | number[] | undefined)=>void,
    threshold:number | number[] | undefined,
    setThreshold:(x:number | number[] | undefined)=>void
}
const EffectButtonDetails = ({brightness,setBrightness,contrast,saturation,setContrast,setSaturation, threshold,setThreshold}:Props) => {
    return (
        <div className="button-details">
            <h1>Effect</h1>
            <div>
                <h4>Brightness</h4>
                <Slider color="secondary" min={0} max={200} step={1} value={brightness} onChange={(e,brightness)=>{setBrightness(brightness)}}  />
            </div>
            <div>
                <h4>Contrast</h4>
                <Slider color="secondary" min={0} max={200} step={1} value={contrast} onChange={(e,contrast)=>{setContrast(contrast)}} />
            </div>
            <div>
                <h4>Saturation</h4>
                <Slider color="secondary" min={0} max={200} step={1} value={saturation} onChange={(e,saturation)=>{setSaturation(saturation)}}/>
            </div>
                <h3>SHARPEN</h3>
                
            <div>
                <h4>Amount</h4>
                <Slider color="secondary"/>
            </div>
            <div>
                <h4>Radius</h4>
                <Slider color="secondary"/>
            </div>
            <div>
                <h4>Threshold</h4>
                <Slider color="secondary" min={0} max={100} step={1} value={threshold} onChange={(e,threshold)=>{setThreshold(threshold)}}/>
            </div>
        </div>
    )
}

export default EffectButtonDetails
