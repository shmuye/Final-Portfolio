import React from 'react'
import { ArrowUp } from "lucide-react";
import {useState, useEffect} from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const toggleVisibility = () => {
          if(window.scrollY > 300){
              setIsVisible(true);

          }else{
              setIsVisible(false);
          }
      }
      window.addEventListener("scroll", toggleVisibility);
      return () => removeEventListener("scroll", toggleVisibility);
   }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
       <>
           {
               isVisible &&
               <button
                   className="fixed bottom-6 right-6 p-2 text-brand hover:text-brand-light
                   rounded-full bg-brand-dark  cursor-pointer
                   transition duration-300"
                   onClick={scrollToTop}>
                   <ArrowUp size={24} />
               </button>
           }
       </>


    )
}
export default ScrollToTop;
