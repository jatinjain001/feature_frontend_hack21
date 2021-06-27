import React from 'react';
import {annualData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Annuals(){
    return (
        
          <> { annualData.map((val) =>{
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




