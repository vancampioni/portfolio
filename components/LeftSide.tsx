import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


export const LeftSide = () => {
    return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/vancampioni" target='_blank'>
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center
                hover:text-white hover:bg-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <BsGithub />
                </span>
                </a>
            <a href="https://www.linkedin.com/in/vancampioni/">
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center
                hover:text-white hover:bg-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <BsLinkedin />
                </span>
            </a>     
            <a href="https://www.instagram.com/vancampioni/">
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center
                hover:text-white hover:bg-textPink cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <BsInstagram />
                </span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
    )
}