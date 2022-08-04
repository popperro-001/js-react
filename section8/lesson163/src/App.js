import {Component, useState, useEffect} from 'react';
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

const calcValue = () => {
    console.log('random');
    return Math.floor(Math.random() * (50 - 1) + 1);
}

const Slider = (props) => {

    const [slide, setSlide] = useState(calcValue);//if you need lazy call of function i.e. only once then pass only name of the function or callback. if you pass calcVal() it will be called each time when setState calls
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log!')
    }

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

    return (
        <Container className='mt-5'>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
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
