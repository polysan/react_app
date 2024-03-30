import { useState } from 'react';
import '../App.css';
import Article from './Article';
import Signup from './Signup.tsx';

function App() {
  const [message,setMessage] = useState(true); 
  const changeMessage = () => {
    setMessage(prevState => !prevState);
  };
  const style = { container: { color: "red", height: 100, width: 100 } };
  return (
    <div className='center'>
     <div>{`REACT_APP_APIKEY:${process.env.REACT_APP_APIKEY}`}</div>
     <div>{`REACT_APP_AUTHDOMAIN:${process.env.REACT_APP_AUTHDOMAIN}`}</div>
     <div>{`REACT_APP_DATABASEURL:${process.env.REACT_APP_DATABASEURL}`}</div>
     <div>{`REACT_APP_PROJECT_ID:${process.env.REACT_APP_PROJECT_ID}`}</div>
     <div>{`REACT_APP_STORAGE_BUCKET:${process.env.REACT_APP_STORAGE_BUCKET}`}</div>
     <div>{`REACT_APP_MESSAGING_SENDER_ID:${process.env.REACT_APP_MESSAGING_SENDER_ID}`}</div>
     <div>{`REACT_APP_APP_ID:${process.env.REACT_APP_APP_ID}`}</div>
     <div>{`REACT_APP_MEASUREMENT_ID:${process.env.REACT_APP_MEASUREMENT_ID}`}</div>
      <Article
      message={message}
      />
      <Signup />
      <button onClick={changeMessage} style={style.container}>{message ? '吉幾三':'波田陽区'}</button>
    </div>
  );
}
export default App;
