import React from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => { 

    useGSAP(() => {
        gsap.fromTo('nav', 
            { backgroundColor: 'transparent' }, 
            { 
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: 'nav',
                    start: 'bottom top',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    return (

<nav>
    <div>
        <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="opacity-100 h-12 w-auto" />
            <p> Sapphire MUN </p>
        </a>

        <ul>
            {navLinks.map((link => (
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            )))}
        </ul>
    </div>
</nav>
)
}
export default Navbar