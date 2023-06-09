import React from 'react'

export default function Navbar({onHome , changeToHome }) {
    return (

        <div className='nav' style={{ display: "flex", padding: "5px 4rem 0 4rem", justifyContent: "space-between" ,position:"sticky" ,top:"0px" }}>
            <div  style={{fontWeight:`${onHome?"bold":"400"}` ,cursor:"pointer"}} onClick={()=>changeToHome(true)}>Home</div>
            <div style={{fontWeight:`${!onHome?"bold":"400"}` ,cursor:"pointer"}} onClick={()=>changeToHome(false)}>Bookmarks</div>
        </div>
    )
} 
