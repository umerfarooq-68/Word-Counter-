import Navbar from './Navbar';
import './App.css';
import TextForm from './TextForm';

// import AboutUs from './AboutUs';

function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About Text" />;
      <div className="container">
        <TextForm heading="Word Counter" />
        {/* <AboutUs></AboutUs> */}
      </div>


    </>
  );
}

export default App;
