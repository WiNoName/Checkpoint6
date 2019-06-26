import React from 'react'
import Name from "./Name.js";
import Photo from "./Photo.js";
import ProfileLink from "./ProfileLink.js"

function Profile(){
    let firstName = "Abderrahman"
    let lastName = "Braham"
    let canRender = false
    let link = "https://www.facebook.com/no.name.PNYCLSCFUSA"
    if(link === ""){
        canRender = false
    }else {
        canRender = true
    }
    console.log(canRender)
    return(  
        <center><div className="main">

         <Photo src = "./profilePhoto.jpg"></Photo>
         <Name style = {{color : '#487eb0'}}>
             {firstName} {lastName}
         </Name>
         <ProfileLink isVisible = {canRender}onSimpleClick={()=> {
            window.location = link}}
            >
                
            My Facebook</ProfileLink>  

     </div></center>
    )
}

export default Profile;