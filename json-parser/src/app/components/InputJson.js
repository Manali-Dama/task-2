"use client"

import { useState } from "react"
import { setInputJson, setParsedJson, setError} from "../redux/slice";
import { useDispatch , useSelector } from "react-redux";

export default function InputJson(){

    // const [data,setData]=useState("");

    const dispatch= useDispatch();
    const { inputJson, parsedJson, error } = useSelector((state) => state.jsonSlice);

    const handleInputChange = (e) => {
        dispatch(setInputJson(e.target.value));
      };

      const handleParseJson = () => {
        try {
          // Try to parse the JSON
          const parsed = JSON.parse(inputJson);
          dispatch(setParsedJson(parsed)); // If successful, update the parsed JSON state
        } catch (e) {
          dispatch(setError('Invalid JSON format. Please check your input.'));
        }
      };


    // const JsonView=()=>{
    //    dispatch(setInputJson(data))

    // }

    return(
        <div className="input-json">
           <h3> input json file</h3>
           <textarea type="text" 
           onChange={handleInputChange}
           placeholder="add stringified json file" /><br/ >
           <button onClick={handleParseJson}>convert</button>
        </div>
    )
}