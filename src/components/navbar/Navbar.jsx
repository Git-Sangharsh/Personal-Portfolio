import React from 'react'
import {motion} from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}}>Hitesh Ram</motion.span>
        <motion.div initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}} className='social'>
            <a href='#'><img src='/instagram.png'/></a>
            <a href='#'><img src='/linkedin.png'/></a>
            <a href='#'><img src='/github.png'/></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
