import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
import { useChatContext } from './context/chats-context';

function App() {
  const { chatUser } = useChatContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={chatUser ? <Navigate to='/home' /> : <Navigate to='/login' />} />
        <Route path='/login' element={!chatUser ? <Login /> : <Navigate to='/home' />} />
        <Route path='/signup' element={!chatUser ? <Signup /> : <Navigate to='/home' />} />
        <Route path='/home' element={chatUser ? <Home /> : <Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
