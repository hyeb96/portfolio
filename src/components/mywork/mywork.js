import React from 'react'
import './mywork.css';
//import project list object
import { ProjectList } from "../projects/projectList";

const MyWork = () => {
    return (
        <>
            <div>
                <div class="project-container" id='my-work'>

                    {ProjectList.map((project, idx) => {
                        return (
                            <section id="projects">

                                <div className="cards">
                                    <img id="project-images" src={project.image} alt=""></img>
                                    <h1 className='name'>{project.name}</h1>
                                    <p className='skills'>{project.skills}</p>
                                    <div id="buttons">
                                        <button><a className="project-links" href={project.github} target="_blank" rel="noreferrer" >Github</a></button>
                                        <button><a className="project-links" href={project.website} target="_blank" rel="noreferrer" >Website</a></button>
                                    </div>
                                </div>

                            </section>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default MyWork