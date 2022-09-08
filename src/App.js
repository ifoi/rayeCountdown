import logo from './logo.svg';
import './App.css';
import Countdown ,{ zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds }) => (
  <span>
     {zeroPad(days)} Days : {zeroPad(hours)} hours :{zeroPad(minutes)} minutes:{zeroPad(seconds) } seconds
  </span>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Raye plans to level up by Dec 31st.   They asked us to keep them accountable.
           so I setup the Raye level up Countdown.
        </p>
        <Countdown
        date={new Date("Dec 31 2022" )}
        intervalDelay={0}
        precision={3}
        renderer={renderer}
        />,
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
