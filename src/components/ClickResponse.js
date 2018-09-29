import React from "react";

const ClickResponse = props => {

    console.log(props.highestScore);

    if(props.highestScore === 0) {
        return(<div>Click an Image to Begin!</div>);
    }else{
        return(
            <div>
                {props.correct ? (
                    <div>Great Job!</div>
                ) : ( 
                    <div>Try Again.</div>
                )}
            </div>
        );
    }
}

export default ClickResponse;