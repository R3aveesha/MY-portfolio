import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
const Tools = () => {
    return (
        <>
            <motion.section
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
                className='md:pt-0 md:pr-10 lg:pr-0 lg:pt-20   2xl:pt-40rem'>
                <div className='inner-glass-effect'>
                    <h1 className='text-center md:text-left text-xl pl-0 md:pl-6 pt-3 md:text-2xl lg:text-3xl   2xl:text-6xl font-bold'>
                        Tools</h1>
                    <h1 className='text-center md:text-left text-sm pl-0 md:pl-6 pt-3 md:text-md lg:text-xl   2xl:text-4xl mb-4 font-semibold tracking-wide'>
                        Languages and Frameworks:</h1>
                    <Marquee pauseOnHover>
                        <div className='flex items-center space-x-8 py-3 md:py-6'>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://reactjs.org/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://nodejs.org" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" /></a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://expressjs.com" target="blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" /></a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://www.mysql.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://www.mongodb.com/" target="blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://postman.com" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://www.microsoft.com/en-us/sql-server" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" /></a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://firebase.google.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://git-scm.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://getbootstrap.com" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" /></a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://tailwindcss.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>
                            <a className='w-9 md:w-16   2xl:w-24 h-9 md:h-16   2xl:h-24' href="https://www.w3.org/html/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>
                            <a className='w-9 md:w-16 2xl:w-24 h-9 md:h-16 2xl:h-24' href="https://www.java.com" target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg" alt="Java" />
</a>

                        </div>
                    </Marquee>
                </div>
            </motion.section>
        </>
    )
}

export default Tools