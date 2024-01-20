import React from 'react'
import skillsData from '../skillsData'

const Skills = () => {

  const languages = skillsData.filter((skill) => skill.category === "language")
  const frameworks = skillsData.filter((skill) => skill.category === "framework")
  const otherSkills = skillsData.filter((skill) => skill.category === "other")

  return (
    <div id="skills" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 pt-40 text-gray-500 lg:hover-animate'>  

        <h1 className='text-4xl font-bold text-indigo-900'>Some <span className='text-indigo-400'>tools</span> I use</h1>
        <p className='py-8'>I work everyday with React and Ruby on Rails which is often the stack I defer to due to it's scalability.  However, since I love learning, I have spent time working with many other tools beyond what I have listed.  To get an idea of what I know, here are some of my most used languages, frameworks, and tools.</p>


      <div className='flex row flex-wrap items-center'>
        <h3 className='font-bold'>Languages:</h3>
        {languages.map(((skill, index) => {
          return (
            <div className='flex p-2 items-center text-indigo-900' key={index}>
              <skill.icon /><p className='pl-2'>{skill.name}</p>
            </div>
          )
        }))}
      </div>
      <div className='flex row flex-wrap items-center'>
        <h3 className='font-bold'>Frameworks:</h3>
        {frameworks.map((skill, index) => {
          return (
            <div className='flex p-2 items-center text-indigo-900' key={index}>
              <skill.icon /><p className='pl-2'>{skill.name}</p>
            </div>
          )
        })}
      </div>
      <div className='flex row flex-wrap items-center'>
        <h3 className='font-bold'>Other:</h3>
        {otherSkills.map((skill, index) => {
          return (
            <div className='flex p-2 items-center text-indigo-900' key={index}>
              <skill.icon /><p className='pl-2'>{skill.name}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Skills