import React from 'react';
import {aromaticData} from '../descrip';
import Herbs from '../Components/Herb';


export default function Aromatic(){
    return (
        
          <> { aromaticData.map((val) =>{
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