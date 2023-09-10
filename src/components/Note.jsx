import React, {useState} from "react";



const Note = (props) => {


    
    const[isExpanded, setExpanded] = useState(false);

    const expandpara = () => {

        //  setExpanded(true);

         setExpanded(!isExpanded);
    }



    return (

        <React.Fragment>

             <h1 onClick={expandpara}>{props.title}</h1>

                    {
                        isExpanded? <p>{props.content}</p> : null
                    }

        </React.Fragment>
    )
}


export default Note;