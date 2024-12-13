import logo from './logo.svg';
import './App.css';
import DemoPage from './components/DemoPage.tsx';
import SignupPage from './components/SignupPage.tsx';
import Api from './components/Api.tsx';
import PageParallax from './components/PageParallax.tsx';


function App() {
  return (
    <div className="App">
     {/* <DemoPage/> */}
     {/* <SignupPage/> */}
     {/* <Api/> */}
    <PageParallax/>
    </div>
  );
}

export default App;