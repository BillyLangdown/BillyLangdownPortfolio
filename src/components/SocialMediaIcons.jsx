import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = ()=>{
    return( 
        <div className="flex justify-center md:justify-start my-8 gap-7">
            <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/billy-l-263072142/"
            target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </a>
            <a className=" hover:opacity-50 transition duration-500" href="https://github.com/BillyLangdown"
            target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faGithub} size='2xl'/>
            </a>
            
        </div>
    )
}

export default SocialMediaIcons