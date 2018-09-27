import React from "react";
import ClickResponse from "./ClickResponse";
import Score from "./Score";
import "./HeadWrapper.css";

class headWrapper extends React.Component {

    render() {

        return(
            <div className="row headWrapper">
                <div className="col-md-4 logo">
                    <a href="/">Clicky-Game</a>
                </div>
                <div className="col-md-4 response">
                    <ClickResponse></ClickResponse>
                </div>
                <div className="col-md-4 score">
                    <Score></Score>
                </div>
            </div>
        );
    };
};

export default headWrapper;