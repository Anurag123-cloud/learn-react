import { useState } from "react";
import { FaArrowCircleLeft} from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
export default function Carousel() {
  const[currentIndex ,setCurrentIndex]=useState(0)
  const slides=[
    { url:"https://www.w3schools.com/w3images/parallax1.jpg"},
     {url:"https://www.w3schools.com/w3images/avatar_hat.jpg"},
     {url:"https://www.w3schools.com/w3images/parallax1.jpg"},
    {url:"https://www.w3schools.com/w3images/avatar_hat.jpg"}
 ]

 const changeSliderLeft=()=>{
  const isnextIndex= currentIndex===0
  const nextIndex= isnextIndex? slides.length-1:currentIndex-1;
  setCurrentIndex(nextIndex)
 }

 const changeSliderRight=()=>{
  const isnextIndex= currentIndex===slides.length-1
  const nextIndex= isnextIndex?0:currentIndex+1;
  setCurrentIndex(nextIndex)
 }
  return (
    <div className=" h-[780px] m-auto py-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="hidden group-hover:block  absolute top-[50%] translate-x-0 translate-y-[-50%]
         left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
    <FaArrowCircleLeft onClick={changeSliderLeft} />
        </div>

        <div  className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%]
         right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
    <FaCircleArrowRight onClick={changeSliderRight}/>
        </div>
       
      </div>
    </div>
  )
}
