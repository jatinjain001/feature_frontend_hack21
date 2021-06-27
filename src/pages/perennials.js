import React from 'react';
import {perennialData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Perennials(){
    return (
        
          <> { perennialData.map((val) =>{
                return(
                    <div >
                    <Herbs
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