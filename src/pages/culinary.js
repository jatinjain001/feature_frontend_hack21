import React from 'react';
import {cullinaryData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Cullinary(){
    return (
        
          <> { cullinaryData.map((val) =>{
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