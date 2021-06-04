import React from "react";


const PostInput = () => {
    return(
        <div className="ui form">
                <div className="field" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <input style={{width:"50%" }} type="text" placeholder="What's on your mind?" />
                </div>
         </div>       
    );
}


export default PostInput;