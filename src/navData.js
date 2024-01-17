import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const navData = [
  {
    navItem: {
      title: "Home",
      icon: AiOutlineHome,
    }
  },
  {
    navItem: {
      title: "Work",
      icon: GrProjects
    }
  },
  {
    navItem: {
      title: "Projects",
      icon: AiOutlineProject
    }
  },
  {
    navItem: {
      title: "Resume",
      icon: BsPerson
    }
  },
  {
    navItem: {
      title: "Contact",
      icon: AiOutlineMail
    }
  }
]

export default navData