import { useState } from "react";

function Hog({info:{name, specialty, greased, weight, image}}){

    const [isHidden, setIsHidden] = useState(true);

    function handleCardClick(){
        setIsHidden((prev) => !prev);
    }
    return(
        <div className="ui four wide column hog-card" onClick={handleCardClick}>
            <img src={image} className="hog-image"/>
            <h2>{name}</h2>
            {isHidden? '' : 
            <div>           
            <p>Weight: {weight}</p>
            <p>Specialty: {specialty}</p>
            <p>{greased? 'Greased' : ''}</p>
            </div>
            }
        </div>
    )
}

export default Hog;