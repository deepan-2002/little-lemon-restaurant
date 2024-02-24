import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoWhiteImage from '../../assets/img/logo-white.png';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const contacts = [
    { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: faPhone, info: '(312) 593-2744', },
    { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
];

const Footer = () => {
    return (
        <footer className="py-5 px-5 md:px-20 text-lemonWhite bg-lemonGrey flex flex-row flex-wrap gap-10 items-center justify-around">
            <div>
                <img
                    className='w-28'
                    src={logoWhiteImage}
                    alt="Little Lemon"
                />
            </div>

            <div>
                <h4 className='font-custom1 text-center text-2xl'>Contact us</h4>
                <address>
                    {contacts.map((contact, index) =>
                        <p key={index}>
                            <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                        </p>
                    )}
                </address>
            </div>
            <div>
            <h4 className='font-custom1 text-center text-2xl'>Site Map</h4>
                <ul className='flex flex-col'>
                    <NavLink to={'/'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
                        Home
                    </NavLink>
                    <NavLink to={'/about'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
                        About
                    </NavLink>
                    <NavLink to={'/reserve'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
                        Reserve Table
                    </NavLink>
                    <NavLink to={'/contact'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
                        Contact
                    </NavLink>
                    <NavLink to={'/login'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
                        Login
                    </NavLink>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
                <h4 className='font-custom1 text-2xl'>Connect with us</h4>
                <div className=' space-x-3'>
                    {socials.map((social, index) =>
                        <a
                            key={index}
                            href={`https://www.${social.name}.com`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={social.icon} className='text-3xl hover:text-lemonYellow' />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;