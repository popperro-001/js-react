import img from './error.gif';

const stylz = {
    display: 'block',
    width: '250px',
    height: '250px',
    objectFit: 'contain',
    margin: '0 auto'
};

const ErrorMessage = () => {
    return (
        <img style={stylz} src={img} alt='Error'/>
    )
}

export default ErrorMessage;