import { useSelector } from 'react-redux';
import { useState } from 'react';

const DisplayJsonComponent = () => {
  const { parsedJson, error } = useSelector((state) => state.json);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Function to format JSON with color coding and without double quotes
  const formatJsonWithoutQuotes = (json) => {
    if (!json) return '';

    let formattedJson = JSON.stringify(json, null, 2)
      .replace(/"([^"]+)":/g, '<span class="json-key">$1:</span>') // Style keys
      .replace(/"([^"]+)"/g, '<span class="json-string">$1</span>') // Style string values
      .replace(/\b(true|false|null)\b/g, '<span class="json-boolean">$1</span>'); // Style booleans & null

    return formattedJson;
  };

  return (
    <div className="display-json">
      <div className="toggle-container" onClick={toggleVisibility}>
        <span className={`toggle-icon ${isVisible ? 'rotate' : ''}`}>&gt;</span>
        <h2>Parsed JSON</h2>
      </div>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        isVisible && (
          <pre dangerouslySetInnerHTML={{ __html: parsedJson ? formatJsonWithoutQuotes(parsedJson) : 'Parsed JSON will appear here' }}></pre>
        )
      )}
    </div>
  );
};

export default DisplayJsonComponent;




// import { useSelector } from 'react-redux';

// const DisplayJsonComponent = () => {
//   const { parsedJson, error } = useSelector((state) => state.json);

//   return (
//     <div className="display-json">
//       {error ? (
//         <p className="error">{error}</p>
//       ) : (
//         <pre>{parsedJson ? JSON.stringify(parsedJson, null, 2) : 'Parsed JSON will appear here'}</pre>
//       )}
//     </div>
//   );
// };

// export default DisplayJsonComponent;



// "use client"

// import { useSelector } from "react-redux"
// import { setParsedJson,setError } from '../redux/slice'

// export default function DisplayJson(){

//     const jsonFile = useSelector((data)=>data.inputJson);
    
// //   const handleParseJson = () => {
// //     try {
// //       // Try to parse the JSON
// //       const parsed = JSON.parse(jsonFile);
// //       console.log("lpg parse ",parsed);
// //       dispatch(setParsedJson(parsed)); // If successful, update the parsed JSON state
// //     } catch (e) {
// //       dispatch(setError('Invalid JSON format. Please check your input.'));
// //     }
// //   };

//      console.log(jsonFile);

//     return(
//         <div className="display-json">
//            <h3> returning json file</h3>
//            {
//                 jsonFile
//            }
//         </div>
//     )
// }
