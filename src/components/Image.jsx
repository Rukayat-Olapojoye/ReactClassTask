import {useState} from "react";
import Button from "./button";
import "../styles/Image.css";


const Image =(props)=>{

    let[Imagesize, setImage] = useState(props.w);

const IncreaseImg =() =>{
   setImage(Imagesize="400px")
   
   //console.log(props.w)
   //console.log(Imagesize)
} 

const DecreaseImg =() =>{
    setImage(Imagesize="100px") 
 }

    return (
        <div className="container">
        <img width={Imagesize} height={props.h} src={props.source} alt="A house"/>
        <Button clickHandler={IncreaseImg}>Increase Image</Button>
        <Button clickHandler={DecreaseImg}>Decrease Image</Button>

</div>


        
     
    );
}
export default Image;








