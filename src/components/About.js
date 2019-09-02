import React from 'react'
import Rainbow from '../hoc/Rainbow';

function About() {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Valentine’s Day, also called St. Valentine’s Day, holiday 
                (February 14) when lovers express their affection with greetings 
                and gifts. The holiday has origins in the Roman festival of 
                Lupercalia, held in mid-February. The festival, which celebrated 
                the coming of spring, included fertility rites and the pairing off 
                of women with men by lottery. At the end of the 5th century, P
                ope Gelasius I replaced Lupercalia with St. Valentine’s Day. 
                It came to be celebrated as a day of romance from about the 14th century.</p>
        </div>
    )
}

export default Rainbow(About)