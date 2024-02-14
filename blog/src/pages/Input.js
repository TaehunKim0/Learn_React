import React, {useState} from "react";

const Input = () => {

    const [txtValue, setTxtValue] = useState("");
    const onTextChange = (e) =>{
        setTxtValue(e.target.value);
    };

    return(
      <div>
        <input type="text"  value={txtValue} onChange={onTextChange} />
        <br />
        <p>{txtValue}</p>
      </div>
    )
}

export default Input;