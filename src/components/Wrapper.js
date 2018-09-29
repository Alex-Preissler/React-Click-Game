import React from "react";
import HeadWrapper from "./HeadWrapper";
import Billboard from "./Billboard";
import "./Wrapper.css";

const images = [
    {
        "key": 1,
        "url": "../images/atat"
    },
    {
        "key": 2,
        "url": "../images/deathstar.jpg" 
    },
    {
        "key": 3,
        "url": "../images/dooku.jpg" 
    },
    {
        "key": 4,
        "url": "../images/han.jpg" 
    },
    {
        "key": 5,
        "url": "../images/luke.jpg" 
    },
    {
        "key": 6,
        "url": "../images/maul.jpg" 
    },
    {
        "key": 7,
        "url": "../images/obi-wan.jpg" 
    },
    {
        "key": 8,
        "url": "../images/qui-gon.jpg" 
    },
    {
        "key": 9,
        "url": "../images/stardestroyer.jpg" 
    },
    {
        "key": 10,
        "url": "../images/strom-trooper.jpg" 
    },
    {
        "key": 11,
        "url": "../images/vader.jpg" 
    },
    {
        "key": 12,
        "url": "../images/yoda.jpg" 
    }
]
let guesses = [];

class Wrapper extends React.Component {

    state = {
        score: 0,
        highestScore: 0,
        correct: false,
    };

    handleClickEvent = event => {
        let clickedItem = event.target.value;
        let correct = true;
        let currentScore = this.state.score;

        console.log(clickedItem);

            guesses.map(function(guess) {

                if(guess === clickedItem){

                    correct = false;

                }
                return(correct);
            });

        if(correct === false){
            this.resetRound();
        }else{

            guesses.push(clickedItem);
            currentScore++;       

            if(currentScore > this.state.highestScore){

                this.setState({
                    score: currentScore,
                    highestScore: currentScore,
                    correct: true
                });

            }else{

                this.setState({
                    score: currentScore,
                    correct: true
                });
            }
        }   
    }; 

    resetRound = () => {

        guesses = [];

        this.setState({ 
           score: 0,
           correct: false
        });

    };

    render() {

        return (
            <div className="background">
                <header>
                    <HeadWrapper score={this.state.score} highestScore={this.state.highestScore} correct={this.state.correct}></HeadWrapper>
                    <Billboard></Billboard>
                </header>
                <div className="container">
                    <div>
                        <div className="row">
                            {images.map(image => {
                                console.log(image);
                                return (
                                    <div key={image.key} className="col-md-3">
                                        <button className="btn btn-lg btn-default" value={image.key} onClick={this.handleClickEvent} key={image.key}></button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default Wrapper;