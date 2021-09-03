import "./CenteredCard.css"

function CenteredCard (prop){
    return(
        <div className="mainDiv">
            <span>{prop.children}</span>
        </div>
    )
}

export default CenteredCard