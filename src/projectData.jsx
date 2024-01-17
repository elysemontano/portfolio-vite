// Images:
import apartmentApp from './assets/apartmentapp.png'
import pairingRandomizer from './assets/paring-randomizer.png'
import teamOrganizer from './assets/team-organizer.png'
import fullStackLesson from './assets/full-stack-lesson.png'
import learnProcess from './assets/learnprocess.png'
import colabPuzzles from './assets/collaborating-puzzles.webp'
import solvingProblems from './assets/solvingProblems.png'
import pairingAssociations from './assets/pairing-associations.png'
import pairingSchema from './assets/pairing-randomizer-schema.png'
import pairingSpreadsheet from './assets/pairing-spreadsheet.png'
import bandWireframe from './assets/band-org-wireframe.png'
import bandSchema from './assets/band-org-schema.png'
import dizzySpreadheet from './assets/team-org-spreadsheet.jpeg'
import apartmentAppFigma from './assets/apartment-app-figma.png'
import apartmentAppColab from './assets/collaboration.jpg'
import research from './assets/research.jpg'

// Icons:
import { IoLogoJavascript } from "react-icons/io5";
import { SiRuby, SiRubyonrails, SiJest } from "react-icons/si";
import { FaHtml5, FaReact, FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { DiHeroku } from "react-icons/di";

const projectData = [
    {
        id: 1,
        name: "Development Lessons",
        descriptionShort: "Over the last 2 years, I have taught numerous students the foundation and fundamentals of web development.",
        descriptionLong: "Over the past 2 years, I've had the pleasure of teaching students the foundations and essentials of web development. Teaching web development isn't just about delivering lectures and lessons. It's also about creating engaging projects, offering guidance and support to students, and constantly adapting the curriculum to keep up with the ever-evolving technologies. Just like development itself, effective communication is key to ensure that everyone can come along on this exciting journey. Below, you'll find a video of a live lecture over Zoom, where I guided a cohort through an essential moment in full stack web development using Ruby on Rails. By this point, the students had already learned the basics of writing code in Ruby, grasped the Rails MVC architecture, database structures, SQL queries, and are familiar with RESTful routes.",
        why: "I love collaboration, helping people, and puzzles. Teaching web development has been an incredible opportunity for me to indulge in all of these passions every single day. I am lucky to work with an incredibly passionate team that shares the same drive as me. Together, we get to guide and support students as they embark on a fulfilling career path. And the best part? Building applications feels like a thrilling puzzle that we get to piece together.",
        process: "Preparing a lesson involves so many important components. It's not just about choosing the right vocabulary, but also making sure that the projects we work on in class align with what the industry is currently doing. That's why research and documentation play a big role in my everyday work. And, to ensure everything runs smoothly in the classroom, staying organized is key.",
        lesson: "Teaching has always been hailed as one of the most effective ways to truly grasp a subject. When it comes to teaching web development, a significant aspect revolves around guiding students in solving problems and overcoming obstacles. This happens to be the core essence of the development realm itself - coming across challenges that demand us to find solutions. Personally, I have experienced tremendous growth over the years by comprehending the flow of information, deciphering errors, and determining the ultimate goal.",
        display: {
            tag: 'video',
            src: "https://youtu.be/PDoEL58fZWA",
            notes: "This video has been modified to remove students due to privacy policies."
        },
        img1: fullStackLesson,
        whyPic: colabPuzzles,
        processPic: learnProcess,
        lessonPic: solvingProblems,
        technologies: [IoLogoJavascript, SiRuby, FaHtml5, FaCss3Alt, BiLogoPostgresql, FaReact, SiRubyonrails, SiJest, FaGitAlt],
        links: [
            {icon: AiFillGithub, url: "https://github.com/elysemontano/elyse-lecture-notes", description: "Lecture Notes Repo"},
        ]
    },
  {
      id: 2,
      name: "Pairing Randomizer",
      descriptionShort: "Pairing Randomizer is a React and Rails project that optimizes student pairings on projects.",
      descriptionLong: "As developers, we're always on the lookout for tools that can make our work easier. And if we can't find those tools, we create them ourselves! That's exactly how this pairing randomizer application started. Although this application is still in development, the goal of this app is to make life easier for instructors by helping them organize and manage their classrooms effortlessly. It takes care of maintaining and optimizing pairs, so instructors can focus on what they do best!",
      why: "I came across this problem that got me thinking - wouldn't it be great to have a user-friendly tool that can easily organize and randomize student pairings for various activities? I already had an app that can randomize pairs, but the data did not get stored or help plan for future activities using that data.  As a result, I created this tool that would randomize pairs like other apps, but also keep track of previous pairings and optimize future pairings to avoid repetition. I couldn't help but feel that there must be a more efficient and enjoyable way to handle this task than using a complicated spreadsheet.",
      process: "Although the concept of this application may appear straightforward, during the initial planning stages, it became evident that in order to maximize its potential, the structure of the application would need to be more complex. A detailed approach was necessary to handle the data effectively and ensure scalability, considering the utilization of five database tables and multiple associations. Additionally, the use of Figma to create a wireframe aided in identifying potential challenges and enabled necessary restructuring before the development phase.",
      lesson: "During the planning phase of this application, I came across various things that I learned, particularly when it came to setting up appropriate associations for the pairs table. It was quite a challenge for me to figure out a way to have two foreign keys coming from the same table. However, after going through documentation and exploring different approaches to this association, I was able to successfully implement the structure and efficiently provide the necessary data.",
      display: {
        tag: 'img',
        src: pairingRandomizer,
        notes: ""
    },
    technologies: [FaReact, SiRubyonrails, FaGitAlt],
      img1: pairingRandomizer,
      whyPic: pairingSpreadsheet,
      processPic: pairingSchema,
      lessonPic: pairingAssociations,
      links: [
          {icon: AiFillGithub, url: "https://github.com/LEARNAcademy/pairing-app-frontend", description: "Frontend Repo"},
          {icon: AiFillGithub, url: "https://github.com/LEARNAcademy/pairing-app-backend", description: "Backend Repo"}
      ]
  },
  {
      id: 3,
      name: "Band Organizer",
      descriptionShort: "Band organizer was built with React in Rails to organize band member's using multiple search functions and tags.",
      descriptionLong: "The Band Organizer application is a tool designed to support band directors by effectively managing and organizing their talented ensemble. This application simplifies the process of searching through a repertoire of songs, enabling users to easily locate them based on the designated leader, a particular song, or even relevant tagged keywords that align with the desired style or theme. Furthermore, it allows users to assign individualized keys to each member of the band, eliminating the need to constantly recall their preferences. In essence, the Band Organizer functions as a dedicated personal assistant for bands, greatly facilitating both rehearsals and performances.",
      why: "A band director shared with me that one of the challenges in their job is keeping track of which team members perform certain songs and the keys they use. Like many others, they often rely on long and complicated spreadsheets that can be quite time-consuming to find the desired information. In order to make things easier and more efficient, I took the initiative to develop an application that provides a fantastic user experience, allowing them to gather event information quickly and effortlessly.",
      process: "I initially chose to build this application with React in Rails as this was a technology that I knew served the purpose of allowing a relational database structure that handles many different types of associations, and a frontend that supports reusable and dynamic components with quick rendering capabilities. During the planning phase, I meticulously designed the database structure, considering potential user needs, while ensuring the data would be accessible and maintainable.",
      lesson: "I was so excited to begin working on this project, that I encountered some initial challenges due to inadequate planning. Specifically, I overlooked the importance of creating a wireframe, which led to some confusion about the overall direction of the application. However, once I realized my mistake, I took it upon myself to be proactive and create a wireframe using Figma, which effectively shaped the vision for the user experience.",
      display: {
        tag: 'img',
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBveWRhenFpZGk2aXJwdGt4Zjlybm9jeTZwN3Q3OTF2ZDg0MGR6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xjgg1kcHIFkhygWuYT/giphy.gif",
        notes: ""
        },
      img1: teamOrganizer,  
      whyPic: dizzySpreadheet,
      processPic: bandSchema,
      lessonPic: bandWireframe,
      technologies: [FaReact, SiRubyonrails, FaGitAlt, DiHeroku],
      links: [
          {icon: AiFillGithub, url: "https://github.com/elysemontano/team-organizer", description: "GitHub Repo"},
          {icon: AiOutlineLink, url: "https://chasing-out-foxes-organizer.herokuapp.com/", description: "Deployed App"}
      ]
  },
  {
      id: 4,
      name: "Apartment App",
      descriptionShort: "Apartment App is a project as a part of LEARN Academy, where I have integrated many changes to this assignment.",
      descriptionLong: "Apartment App represents a comprehensive application developed within the LEARN Academy bootcamp, utilizing React and Rails. Over the last three years, the application underwent multiple transformations. Originally conceived as a solo project for students to complete before their capstones, the decision was made to switch gears and introduce project management concepts by assigning this project to a small development team. In this capacity, I assumed the role of project manager, assigning tasks to students, overseeing pull requests, and creating assignments. I also took on the responsibility of designing a wireframe for the students to utilize during their development process. Roughly a year ago, the instructional team at LEARN Academy determined it was appropriate to transition away from a monolithic application that combined React and Rails. Instead, we opted to develop a decoupled application, leveraging Devise and JWT for authentication purposes.",
      why: "Although I initially undertook this project as a student, I have since developed numerous iterations with the goal of enhancing both the application itself and the curriculum content imparted to students throughout this project. Several notable enhancements I have been particularly engaged in include the incorporation of project management principles, the utilization of Figma for creating a wireframe, and the conversion to a decoupled application architecture.",
      process: "As this project is an integral component of the LEARN Academy curriculum, the instructional team would systematically evaluate each iteration of the project in order to identify any necessary modifications. We would frequently engage in brainstorming sessions to determine the most essential objectives for students to achieve through this project, and to contemplate potential adjustments to the technology stack in instances when the structure we were employing could no longer be accommodated. Collaboration played a fundamental role in our continuous updates, ensuring the attainment of a successful student experience.",
      lesson: "The conversion of this application from a monolithic architecture to a decoupled architecture required a significant amount of research and thorough documentation, mainly due to the inclusion of authentication, which presents additional challenges in a decoupled setup. This endeavor was an extensive undertaking, but it provided valuable opportunities for me to delve into exploring novel concepts and experimenting with innovative approaches.",
      display: {
        tag: 'img',
        src: apartmentApp,
        notes: ""
        },
      img1: apartmentApp,
      whyPic: apartmentAppFigma,
      processPic: apartmentAppColab,
      lessonPic: research,
      technologies: [FaReact, SiRubyonrails, FaGitAlt],
      links: [
          {icon: AiFillGithub, url: "https://github.com/elysemontano/apartment-app-frontend", description: "Frontend Repo"},
          {icon: AiFillGithub, url: "https://github.com/elysemontano/apartment-app-backend", description: "Backend Repo"},
          {icon: AiOutlineLink, url: "https://apartment-app-frontend.onrender.com/", description: "Deployed App"}
      ]
  }
]

export default projectData