import React from 'react'
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import PhotoSizeSelectLargeOutlinedIcon from '@mui/icons-material/PhotoSizeSelectLargeOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import WallpaperOutlinedIcon from '@mui/icons-material/WallpaperOutlined';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface Props{
    option:number,
    setOption:(x:number)=>void,
}
const Buttonbar = ({option,setOption}:Props) => {
    
    return (
        <div className="buttonbar">
            
            <button onClick={() =>{setOption(1)}} style={{backgroundColor:option===1?"#DA70D6":""}}><CropOutlinedIcon/></button>
            <button onClick={() =>{setOption(2)}} style={{backgroundColor:option===2?"#DA70D6":""}}><PhotoSizeSelectLargeOutlinedIcon/></button>
            <button onClick={() =>{setOption(3)}} style={{backgroundColor:option===3?"#DA70D6":""}}><FilterCenterFocusOutlinedIcon/></button>
            <button onClick={() =>{setOption(4)}} style={{backgroundColor:option===4?"#DA70D6":""}}><Brightness6OutlinedIcon/></button>
            <button onClick={() =>{setOption(5)}} style={{backgroundColor:option===5?"#DA70D6":""}}><PhotoLibraryOutlinedIcon/></button>
            <button onClick={() =>{setOption(6)}} style={{backgroundColor:option===6?"#DA70D6":""}}><WallpaperOutlinedIcon/></button>
            <button onClick={() =>{setOption(7)}} style={{backgroundColor:option===7?"#DA70D6":""}}><CameraEnhanceOutlinedIcon/></button>
            <button onClick={() =>{setOption(8)}} style={{backgroundColor:option===8?"#DA70D6":""}}><ImageOutlinedIcon/></button>
        </div>
    )
}

export default Buttonbar
