import React from 'react'
import './About.css'

export const About = () => {
let aboutstyle ={
        minHeight: "50vh",
        margin: "10px auto"
}
    return (
        <div className='about' style={aboutstyle}>
           <h1>ITS ABOUT TODO WEBSITE</h1> 
            <p className='mypara'>A todo list website simplifies task management by allowing users to create, organize, and prioritize tasks online. Users can add, edit, and delete items, set deadlines, and categorize tasks for better organization. With features like reminders and notifications, users stay on top of their commitments.<br></br> Collaborative functionalities enable teams to share lists and work collectively towards goals. Intuitive interfaces and customizable options enhance user experience, making it easy to navigate and use.<br></br> Whethe for personal productivity or team projects, todo list websites streamline workflow and boost efficiency, ensuring tasks are completed on time and goals are achieved effectively.</p>
            <h2>ABOUT ME</h2>
            <p className='mypara'>My name is Nikita Kumari currently pursuing B.tech CSE from GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY  haryana(hisar)<br></br>
            My overall CGPA is 7.3 and i have a greate knowledge of frontend and problem solving.<br></br>
            Contact - 9304015295
            <br></br>
            Email - niku2003kumari@gmail.com
            </p>
        </div>
    );
}
