import React from "react";
import Zurag from "../assets/1.jpg";


const Mo = ()=>{
    const data = [
        {
            key:1,
            title:"Ene bol NISSAN GTR35 Xoxo",
            img: Zurag
        }
    ]

    return(
        <div className="w-full h-[100vh] bg-black">
            {
                data.map((row)=>(
                    <div className="w-[70%] h-full bg-[#cdd4cd] m-auto">
                        <div className="w-[60%] h-[65%] bg-black ml-[50px]">
                            <img src={row.img} alt="/"/>
                            <h3 className="text-[80px] ml-[00px]">{row.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}
export default Mo;