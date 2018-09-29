import React from "react";

const Score = props => {
   
    return(
        <div>
            Score: {props.score} | Top Score: {props.highestScore}
        </div>
    );
};

export default Score;