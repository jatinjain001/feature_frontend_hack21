import React from 'react';
import {medicinalData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Medicinal(){
    return (
        
          <> { medicinalData.map((val) =>{
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