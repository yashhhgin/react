import React, {useState} from "react";

function Image({img,ind,handleImage}){

    const [isHovering,setIsHovering] = useState(false);

    return (
        <div className="w-1/3 p-1 flex justify-center"  onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="relative">
                <i className={`fas fa-times absolute cursor-pointer opacity-300 hover:opacity-500 ${isHovering ? "" : "hidden"}`} onClick={() => handleImage(ind)}></i>
            </div>
            <img src={img} width="100%" />
        </div>
    )
}

export default Image;
