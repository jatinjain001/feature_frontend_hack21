import React from 'react';
import {biennialData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Biennials(){
    return (
        
          <> { biennialData.map((val) =>{
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