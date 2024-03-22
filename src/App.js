import { useState } from 'react';
import './App.css';
import Article from './components/Article';

function App() {
  const [message,setMessage] = useState(true); 
  const changeMessage = () => {
    setMessage(prevState => !prevState);
  };
  const style = { container: { color: "red", height: 100, width: 100 } };
  return (
    <div className='center'>
      <Article
      message={message}
      />
      <button onClick={changeMessage} style={style.container}>{message ? '吉幾三':'波田陽区'}</button>
    </div>
  );
}
export default App;
