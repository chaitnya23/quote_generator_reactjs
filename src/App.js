import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import './App.css';
import RightBar from './components/right-bar';
import { useState } from 'react';
import Middle from './components/Middle';
function App() {

  const [widgets, setwidgets] = useState([]);
  const [text, settext] = useState(null);
  const [button, setbutton] = useState(null);

  return (
    <div className="main">
      <Sidebar setwidgets={setwidgets} text={text} settext={settext} setbutton={setbutton} button={button} widgets={widgets}/>
      <Middle text={text} button={button}/>
      <RightBar widgets={widgets} settext={settext} text={text} button={button} setbutton={setbutton} setwidgets={setwidgets} />
    </div>
  );
}

export default App;
