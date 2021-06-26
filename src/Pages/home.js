import React from 'react';
import ImgCarousel from '../Components/ImgCarousel';
import { herbData } from '../data.js';
import Herbs from '../Components/Herb';


export default function Home(){
    return (
        <>
         <ImgCarousel/>
          {
            herbData.map((val) => {
                return ( 
                    <div >
                    <Herbs style = {
                        { positon: 'relative' }
                    }
                    key = { val.id }
                    imgscr = { val.imgsrc }
                    title = { val.title }
                    desc = { val.description }
                    /> </div >
                );
            })
        }
        
        </>
    )
}