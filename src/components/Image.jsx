import {useState} from "react";
import Button from "./button";
import "../styles/Image.css";


const Image =(props)=>{

    let[Imagesize, setImage] = useState(props.w);

const IncreaseImg =() =>{
    const widthValue= parseInt(props.w);
   // console.log(widthValue)
   setImage(Imagesize=widthValue +0.2*widthValue)

  // console.log(Imagesize)
} 

const DecreaseImg =() =>{
    const widthValue= parseInt(props.w);
    //console.log(widthValue)
    setImage(Imagesize=widthValue -0.2*widthValue) 
    //console.log(Imagesize)
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








