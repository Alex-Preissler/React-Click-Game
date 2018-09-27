import React from "react";
import ClickResponse from "./ClickResponse";
import Score from "./Score";

class headWrapper extends React.Component {

    render() {

        return(
            <div className="row">
                <div className="col-md-4">
                    <a href="/">Clicky-Game</a>
                </div>
                <div className="col-md-4">
                    <ClickResponse></ClickResponse>
                </div>
                <div className="col-md-4">
                    <Score></Score>
                </div>
            </div>
        );
    };
};

export default headWrapper;