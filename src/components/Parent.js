import React, {useState} from "react";
import Child from "./Child";

const Parent = ()=>{
    let [modal, setModal] = useState(false);

    function displayModal(){
        setModal(true);
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child modal={modal} displayFun={displayModal}/>
        </div>
    )
}

export default Parent;