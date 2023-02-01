import logo from './logo.svg';
import './App.css';
import { Header } from './cmps/header/header';

function App() {
  const halfCircle = "half-circle-black.svg"
  return (
    <div className="homepage-container">
      {/* <div className='header'>HEADER</div> */}
      <Header />
      <div className='child first flex justify-between'>
        {/* <img width="200px" height="200px" src={require(`../src/assets/img/${halfCircle}`)} /> */}
        <span>Find the best <span style={{ color: '#F67E7E' }}>talent</span></span>
        <div className='paragraph flex column justify-between'>
          <div className='rect' />
          <p>Finding the right people and building high performing teams can be hard.
            Most companies aren't tapping into the abundance of global talent.
            Wn're about to change that.</p>
        </div>
      </div>
      <div className='child second flex justify-between'>
        <div className="left-text">
          <div className='rect' />
          <span>Build & manage distributed teams like no one else.</span>
        </div>
        <ul>
          <li>SomeItem</li>
          <li>SomeItem</li>
          <li>SomeItem</li>
        </ul>
      </div>
      <div className='child third flex justify-center'>CHILD3</div>
      <div className='child fourth flex justify-center'>CHILD3</div>
    </div>
  );
}

export default App;
