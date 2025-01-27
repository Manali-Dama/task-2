"use client"

import { useSelector } from "react-redux"
import { setParsedJson,setError } from '../redux/slice'

export default function DisplayJson(){

    const jsonFile = useSelector((data)=>data.inputJson);
    
//   const handleParseJson = () => {
//     try {
//       // Try to parse the JSON
//       const parsed = JSON.parse(jsonFile);
//       console.log("lpg parse ",parsed);
//       dispatch(setParsedJson(parsed)); // If successful, update the parsed JSON state
//     } catch (e) {
//       dispatch(setError('Invalid JSON format. Please check your input.'));
//     }
//   };

     console.log(jsonFile);

    return(
        <div className="display-json">
           <h3> returning json file</h3>
           {
                jsonFile
           }
        </div>
    )
}