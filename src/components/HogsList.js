import Hog from "./Hog";

function HogsList({hogs}) {
    
    return(
        <div className="ui grid container">
            {hogs.map((hog) => {
                return <Hog info={hog} key={hog.name}/>
            })}
        </div>
    )
}

export default HogsList;