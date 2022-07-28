import './about.scss';

import logo from '../../images/logos/beans_logo_black.svg';


const About = ({about}) => {
    const {title, description} = about;

    return (
        <div className='about'>
            <h2>{title}</h2>
            <img src={logo} alt="Beans Logo Black" />
            <p>{description}</p>
        </div>
    )
}

export default About;