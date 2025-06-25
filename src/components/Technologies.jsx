import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { DiPython } from 'react-icons/di'
import { SiHtml5, SiCss3 } from 'react-icons/si'
import { motion} from "framer-motion"
import { SiCplusplus } from "react-icons/si";




const iconVariants = (duration) => ({
    initial: { y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration : duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    
    }
}

)
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
            whileInView= {{opacity: 1, y: 0}}
            initial={{opacity:0, y:-100}}
            transition={{duration :1.5}}            className='my-20 text-center text-4xl'> Technologies
        </motion.h1>
        <motion.div 
            whileInView= {{opacity: 1, x: 0}}
            initial={{opacity:0, x:-100}}
            transition={{duration :1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">

            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div> </a>

            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <motion.div 
                variants={iconVariants(3)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div> </a>

            <a href="https://www.python.org/" target="_blank" rel="python">
            <motion.div 
                variants={iconVariants(4)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPython className='text-7xl text-yellow-500'/>
            </motion.div> </a>

            <a href="https://www.bing.com/ck/a?!&&p=799495db03fd0461e355ddcb0b2d66b6b6145c7917dc62e822b9b80fd8cb5611JmltdHM9MTc0NTM2NjQwMA&ptn=3&ver=2&hsh=4&fclid=26a5c6f6-649f-67d2-0d35-d32e650f662f&psq=html&u=a1aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTA&ntb=1" target="_blank" rel="html">
            <motion.div 
                variants={iconVariants(5)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiHtml5 className='text-7xl text-orange-600' />
            </motion.div>  </a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="css">
            <motion.div 
                variants={iconVariants(4)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-7xl text-blue-500' />
            </motion.div>  </a>

            <a href="https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170" target="_blank" rel="c++">
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial" 
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCplusplus className='text-7xl text-blue-700' />
            </motion.div> </a>
            

            


        </motion.div>
    </div>
  )
}

export default Technologies