/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import CardJSX from './Component/DemoComp/CardJSX';
import CardFunc from './Component/DemoComp/CardFunc';
import BaiTapLayOut from './Component/BaiTapLayOut/BaiTapLayOut';
import Databinding from './Databinding/Databinding';
import EventHandler from './EventHandler/EventHandler';


// Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {
  return (
    <div className="App">
      {/* <CardFunc/>
      <CardJSX/>
       */}

       {/* <BaiTapLayOut/> */}
       {/* <Databinding/> */}
       <EventHandler/>
    </div>
  );
}

export default App;
