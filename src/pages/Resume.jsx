import React from 'react'
import NavBar from '../components/NavBar'

const Resume = React.forwardRef((props, ref) => {
  return (
    <>

      <NavBar backgroundColor={"rgba(62, 52, 91, 0.8)"} printableComponentRef={props.printableComponentRef} handlePrint={props.handlePrint}/>
      <div className="max-w-[1040px] mx-auto md:pl-4 md:pr-4 lg:pr-20 p-4 pt-28 text-gray-500 bg-white print-section">
        <div ref={ref}>
        <header className="text-indigo-900 text-opacity-70 text-center">
          <h1 className="text-3xl font-bold">Elyse Montano | Full Stack Developer</h1>
          <p>
            <a href="http://elysemontano.com" target="_blank">elysemontano.com</a> |{' '}
            <a href="https://linkedin.com/in/elysemontano" target="_blank">linkedin.com/in/elysemontano</a> |{' '}
            <a  href="https://github.com/elysemontano" target="_blank">github.com/elysemontano</a> | elysemontano.dev@gmail.com
          </p>
        </header>

        <section id="skills" className="pt-2">
          <h2 className="text-xl font-semibold mb-2 text-indigo-900 text-opacity-70 text-center border-t-2 border-b-2 border-indigo-900 border-opacity-70">SKILLS</h2>
          <ul className="list-disc pl-6">
            <li className="mb-1 print-section"><span className='font-bold'>Tech Stack:</span> Ruby, JavaScript, HTML, CSS, SQL, React, Ruby on Rails, Tailwind, Bootstrap</li>
            <li className="mb-1 print-section"><span className='font-bold'>Testing:</span> RSpec, Jest, React Testing Library</li>
            <li><span className='font-bold'>Other:</span> Agile Development, Postgres, REST APIs, Test Driven Development, Figma, Notion, Slack, Version Control (Git)</li>
          </ul>
        </section>

        <section id="work-experience" className="pt-4 print-section">
          <h2 className="text-xl font-semibold mb-2 text-indigo-900 text-opacity-70 text-center border-t-2 border-b-2 border-indigo-900 border-opacity-70">WORK EXPERIENCE</h2>

          <div className="mb-4 print-section">
            <h3 className="text-lg font-semibold">LEARN Academy (Ruby on Rails Bootcamp)</h3>
            <p>Teaching 12-week web development courses with over 57 technical lectures in React and Ruby on Rails, utilizing industry best practices in test-driven development, version control, and project management</p>
            <div className='flex justify-between items-center'>
              <p className="font-medium italic pt-2">Lead Instructor</p>  
              <p className="font-bold">February 2023 - Present</p>
            </div>
            <ul className='list-disc ml-8'>
              <li>Instructing a total of 9 twelve-week cohorts with over 440 hours of instruction time each, totaling 173 students</li>
              <li>Modernized 3 key sections of the student curriculum, including mock developer experiences, React functional components, and JWT (JSON Web Tokens) integration into decoupled Rails and React applications</li>
              <li>Teaching and guiding students in daily activities, lectures, and coding challenges</li>
              <li>Mentoring and supporting Associate Instructors to enhance the quality of lectures and student interactions through daily one-on-ones</li>
              <li>Collaborating on syllabus documentation, resulting in increased student comprehension as evidenced by weekly assessment skill acquisition</li>
            </ul>
            <div className='flex justify-between items-center'>
              <p className="font-medium italic">Associate Instructor</p>
              <p className="font-bold">September 2021 - February 2023</p>
            </div>
            <ul className='list-disc ml-8'>
              <li>Reviewed student's daily and weekly code assessments, while providing quality feedback to ensure curriculum comprehension</li>
              <li>Enforced industry-standard Git workflow for daily class exercises and assessments, while also identifying and resolving technical issues in student applications</li>
              <li>Guided students in implementing Agile methodology, creating Trello templates for project management, and acting as project manager approving pull requests in full-stack projects</li>
            </ul>
          </div>

          <div className="mb-4 print-section">
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <h3 className="text-lg font-semibold">Webstacks </h3>
                <p className='italic ml-2'>- Full Stack Software Developer Intern</p>
              </div>
              <p className="font-bold">May 2021</p>
            </div>
            <ul className='list-disc ml-8'>
              <li>Implemented a company internal portal using React, and Ruby on Rails allowing employees to find and consolidate client information more easily</li>
              <li>Achieved over 95% test coverage using Jest and RSpec following TDD (Test Driven Development) principles</li>
            </ul>
          </div>

          <div className="mb-4 print-section">
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <h3 className="text-lg font-semibold">Photos Movies and More </h3>
                <p className='italic ml-2'>- Digital Scanning Technician</p>
              </div>
              <p className="font-bold">June 2020 - February 2021</p>
            </div>
            <ul className='list-disc ml-8'>
              <li>Developed and integrated new systems to streamline workflow across four different departments</li>
              <li>Led the initiative to establish and enforce uniform quality standards throughout the organization, resulting in a 40% decrease in rework and a 15% increase in profitability.</li>
            </ul>
          </div>


          <div className="mb-4 print-section">
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <h3 className="text-lg font-semibold">Sonrise Church </h3>
                <p className='italic ml-2'>- Live Sound Engineer/Audio Video Technician	</p>
              </div>
              <p className="font-bold">June 2014 - July 2020</p>
            </div>
            <ul className='list-disc ml-8'>
              <li>Streamlined facilities and live event AV needs through requirement analysis, effective troubleshooting, and proficient equipment setup, guaranteeing the seamless execution of 50+ live events with zero AV-related disruptions.</li>
              <li>Led the architectural overhaul of video and audio production, leveraging innovative technologies and equipment; revamped workflows resulting in a 25% increase in production output and a 15% decrease in equipment maintenance costs</li>
            </ul>
          </div>
        </section>
        

        <section id="education" className="pb-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-900 text-opacity-70 text-center border-t-2 border-b-2 border-indigo-900 border-opacity-70">EDUCATION</h2>
          <h3 className="text-lg font-semibold">Udemy</h3>
          <ul className='list-disc ml-8' >
            <li>
              <div className='flex justify-between'>
                <p>Practical PHP <span className='italic'>- by Brad Hussey, Code College</span></p>
                <p className='font-bold'>June 2021</p>
              </div>
            </li>
            <li>
              <div className='flex justify-between'>
                <p>Git: Become an Expert in Git and GitHub <span className='italic'>- by VideoLab</span></p>
                <p className='font-bold'>April 2021</p>
              </div>
            </li>
          </ul>

          <div className='flex justify-between'>
            <h3 className="text-lg font-semibold">LEARN Academy <span className='font-medium italic'> - Full Stack Software Developer Student</span></h3>
            <h3 className='font-bold'>February 2021 - May 2021</h3>
          </div>
          <ul className='list-disc ml-8' >
            <li>
            Over 480 hours of direct coding experience in React and Ruby on Rails tech stack
            </li>
          </ul>

          <div className='flex justify-between'>
            <h3 className="text-lg font-semibold">Grossmont College <span className='font-medium italic'> - Graduated with honors</span></h3>
            <h3 className='font-bold'>August 2012 - June 2015</h3>
          </div>
          <ul className='list-disc ml-8' >
            <li>
            Associate Degree in Media Communications for Audio Production and Video Production  
            </li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
})

export default Resume