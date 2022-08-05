import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {Container, Button} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container className='mt-5'>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);//if you need lazy call of function i.e. only once then pass only name of the function or callback. if you pass calcVal() it will be called each time when setState calls
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log!')
    }

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            'https://images.pexels.com/photos/9320207/pexels-photo-9320207.jpeg?cs=srgb&dl=pexels-juan-samudio-9320207.jpg&fm=jpg',
            'https://images.pexels.com/photos/7111469/pexels-photo-7111469.jpeg?cs=srgb&dl=pexels-piotr-arnoldes-7111469.jpg&fm=jpg',
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        ]
    }, []);

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;
        window.addEventListener('click', logging);
        return () => {
            window.removeEventListener('click', logging);//if we need to free resources we return function from useEffect()
        }
    }, [slide]);//second arg watches only selected state changes and ignore other state changes. if we need this effect only once use empty array - []

    useEffect(() => {
        console.log('autoplay')
    }, [autoplay]);

    function changeSlide(i) {
        setSlide(slide => slide + i);//use callback function to run it in async mode
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);//use callback function to run it in async mode
    }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => ({
        color: slide > 3 ? 'red' : 'black'
    }), [slide]);

    useEffect(() => {
        console.log('styles!')
    }, [style]);

    return (
        <Container className='mt-5'>
            <Form/>

            <div className="slider w-50 m-auto">                
                <Slide getSomeImages={getSomeImages}/>
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div style={style} className="text-center mt-5">Total slides: {total}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
            
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img className="d-block w-100" src={url} alt="slide" key={i}/>)}
        </>
    )
}

//custom hook
function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = () => {return value.search(/\d/) >= 0}

    return {value, onChange, validateInput}
}

const Form = () => { 
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');   

    const color = input.validateInput() ? 'text-danger' : null;

    return (
        <form className='w-50 border mt-5 mb-5 p-3 m-auto'>
            <div className="mb-3">
                <input value={`${input.value} / ${textArea.value}`} type="text" className='form-control' readOnly/>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    onChange={input.onChange} 
                    value={input.value}
                    type="email" 
                    className={`form-control ${color}`} 
                    id="exampleInputEmail1" 
                    placeholder='name@example.com'/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputTextarea1" className="form-label">Example textarea</label>
                <textarea 
                    value={textArea.value}
                    onChange={textArea.onChange}
                    className="form-control" 
                    id="exampleInputTextarea1" 
                    rows="3"></textarea>
            </div>            
        </form>
    )
}


function App() {
    const  [slider, setSlider] = useState(true);

  return (
        <>
            <Button onClick={() => setSlider(!slider)}>Click</Button>
            {slider? <Slider/> : null}
        </>        
  );
}

export default App;
