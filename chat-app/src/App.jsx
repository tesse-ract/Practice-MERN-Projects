import './App.css'
import { Auth } from './components/Auth'
import Cookies from 'universal-cookie'
import { useState,useRef } from 'react';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const cookies=new Cookies();

function App() {
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token"));
  const [room,setRoom] =useState(null);
  const roomInputRef=useRef(null);

  const signUserOut=async ()=>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  if(!isAuth)
  {
    return <div><Auth setIsAuth={setIsAuth}></Auth></div>
  };

  return (
    <>
       <div>
        {
          room?(
            <Chat room={room}></Chat>
          ):(
            <div className='room'>
              <label >Enter Room Name</label>
              <input ref={roomInputRef} />
              <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
            </div>
          )
        }
        </div>
        <div>
          <button onClick={signUserOut}>Sign Out</button>
        </div>
    </>
  )
}
export default App
