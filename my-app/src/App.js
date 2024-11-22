// import logo from './logo.svg';
import './App.css';
import { Testimonials } from './components/Testimonials';
import data from './data'
// import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="App">
      {/* <h6>{data.map((e)=>(e.name))}</h6> */}
      <div>our testimonials</div>
        <div>
          <Testimonials reviews={data}/>
        </div>
      

    </div>
  );
}

export default App;
