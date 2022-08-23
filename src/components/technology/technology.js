import React from 'react'
import './technology.css';

const Technology = () => {
    return (
        <section id="technology">
            <div className='containers'>
                <h1>front end</h1>
                <img className="tech-images" src='images/html.png'></img>
                <img className="tech-images" src='images/css.png'></img>
                <img className="tech-images" src='images/javascript.png'></img>
                <img className="tech-images" src='images/react.png'></img>
            </div>
            <div className='containers'>
                <h1>back end</h1>
                <img className="tech-images" src='images/mysql.png'></img>
                <img className="tech-images" src='images/mongodb.png'></img>
                <img className="tech-images" src='images/java.png'></img>
                <img className="tech-images" src='images/node.png'></img>
                <img className="tech-images" src='images/express.png'></img>
            </div>
        </section>
    )
}

export default Technology;