import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@mui/material";


import Note from './Note';


const List = (props) => {



    const deletelist = (idx) => {
        props.deleteNoteFromList(idx);


    }

  


return (


    <React.Fragment>
        {props.List.map((item,idx)=>{

            return (

                <div key={idx} className="note">

                   <Note title = {item.title} content = {item.content} />

                    <Fab onClick={()=>{deletelist(idx)}}><DeleteIcon /></Fab>

                    
                </div>
            )
        })}

        
    </React.Fragment>
)




}


export default List;