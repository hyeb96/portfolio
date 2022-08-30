import React from 'react'
import './technology.css';

const Technology = () => {
    return (
        <section id="technology" >
            <div >
                <h1>Front end</h1>
                <p>HTML, CSS, Javascript, React, NPM, Bootstrap</p>
                <h1>Back end</h1>
                <p>NodeJS, ExpressJS, MongoDB, MySQL</p>
            </div>
            <div className="tech">
                <img src="/images/html.png" alt="html logo"></img>
                <img src="/images/css.png" alt="css logo"></img>
                <img src="/images/javascript.png" alt="javascript logo"></img>
                <img src="/images/react.png" alt="react logo"></img>
                <img src="/images/nodejs.png" alt="nodejs logo"></img>
                <img src="/images/mongoDB.png" alt="mongdb logo"></img>
                <img src="/images/mysql.png" alt="mysql logo"></img>
            </div>
        </section>
    )
}

export default Technology;