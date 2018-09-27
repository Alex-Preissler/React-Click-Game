import React from "react";
import HeadWrapper from "./HeadWrapper";
import Billboard from "./Billboard";
import ClickItems from "./ClickItems";

class Wrapper extends React.Component {

    render() {

        return(
            <div>
                <header>
                    <HeadWrapper></HeadWrapper>
                    <Billboard></Billboard>
                </header>
                <div className="container">
                    <div>
                        <ClickItems></ClickItems>
                    </div>
                </div>
            </div>
        
        );
    };
}

export default Wrapper;