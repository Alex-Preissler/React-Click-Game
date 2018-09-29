import React from "react";
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


const ClickItemImage = images.map(image => {
    
    return(
        <div className="col-md-3">
            <button value={image.key}></button>
        </div>
    );      
});

export default ClickItemImage;