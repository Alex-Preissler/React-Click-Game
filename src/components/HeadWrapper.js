import React from "react";
import ClickResponse from "./ClickResponse";
import Score from "./Score";
import "./HeadWrapper.css";

const HeadWrapper = props => {

        return(
            <div className="row headWrapper">
                <div className="col-md-4 logo">
                    <a href="/">Clicky-Game</a>
                </div>
                <div className="col-md-4 response">
                    <ClickResponse correct={props.correct} score={props.score} highestScore={props.highestScore}></ClickResponse>
                </div>
                <div className="col-md-4 score">
                    <Score score={props.score} highestScore={props.highestScore}></Score>
                </div>
            </div>
        );
    };


export default HeadWrapper;