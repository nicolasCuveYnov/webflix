import React from "react";

function Rating(props) {

    let scoreOn5 = props.score / 2;
    
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if(i < Math.round(scoreOn5)) {
            stars.push(<span key={i} className="star">★</span>);
        } else {
            stars.push(<span key={i} className="star">☆</span>);
        }
    }

    return (
        <div className="rating">
            <h3>Note du public</h3>
            <div className="rating-content">
                <div className="stars">{stars}</div>
                <p>{scoreOn5} / 5</p>
            </div>
        </div>
    );
}

export default Rating;