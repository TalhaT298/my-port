import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import bookShrore from '../../../assets/images/bookShore.png'
import bookshore1 from '../../../assets/images/bookshore1.png'
import bookshore2 from '../../../assets/images/bookshore2.png'
import adornment from '../../../assets/images/adornment.png'
import adaAcademy from '../../../assets/images/adaAcademy.png'
import esteTeri from '../../../assets/images/esteTeri.png'
import foodieHub from '../../../assets/images/foodieHub.png'
import ProjectModal from './ProjectModal'

const Projects = () => {
    const projects = [
        {
            "id": 1,
            "name": "EasyBook",
            "images": [
                bookShrore,
                bookshore1,
                bookshore2
            ],
            "description": "People can easily buy and read books from here.",
            "technologies": ["HTML", "CSS", "Tailwind", "Daisy UI", "React JS", "Node JS", "Express", "Firebase", "JWT Authentication", "Mongo DB"],
            "client": "https://github.com/TalhaT298/Easy-Book",
            "server": "https://github.com/TalhaT298/Easy-Book-server",
            "liveLink": "https://final-project-9df2d.web.app/"
        },
        {
            "id": 2,
            "name": "Buy-Courses",
            "images": [
                adornment,
            ],
            "description": "Anyone can buy different types of courses according to their choice from here which will help them in skill development.",
            "technologies": ["HTML5", "CSS3", "React JS", "Node JS", "Express", "Firebase", "JWT Authentication", "Mongo DB"],
            "client": "https://github.com/TalhaT298/Buy-Courses",
            "server": "https://github.com/TalhaT298/Buy-Courses-Server",
            "liveLink": "https://educare-bd0b7.web.app/"
        },
        {
            "id": 3,
            "name": "Quiz-Contest",
            "images": [
                adaAcademy,
            ],
            "description": "Various web related quizzes are here,through which you can gain a lot of web related knowledge.",
            "technologies": ["HTML", "CSS", "Bootstrap", "React JS", "Node JS", "Express", "Firebase"],
            "client": "https://github.com/TalhaT298/quiz-project",
            "server": "",
            "liveLink": "https://magenta-mermaid-3995e9.netlify.app/"
        },
        
    ]
    const [selected, setSelected] = useState(null)
    return (
        <>
            <h1 className='lg:text-5xl md:text-4xl text-3xl mb-12 mt-20 font-bold text-center'>Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {projects.map(project => <ProjectCard key={project.id} project={project} setSelected={setSelected} />)}
            </div>
            {
                selected &&
                <ProjectModal project={selected} />
            }
        </>
    )
}

export default Projects