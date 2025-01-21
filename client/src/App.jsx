import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import Home   from './components/Home/Home';

import Account from './components/Account/Account';
import ProfileForm from './components/Account/ProfileForm';

import MessagesSend from './components/Messages/MessagesSend';
import MessagesRecive from './components/Messages/MessagesRecive';

import Update from './components/Update/Update';
import UpdateView from './components/Update/UpdateView';

import Task from './components/Task/Task';
import TaskView from './components/Task/TaskView';

import StudentProfiles from './components/Profiles/StudentProfiles';
import ProfessionalProfiles from './components/Profiles/ProfessionalProfiles';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/home" element={<Home/>} />


        <Route path="/account" element={<Account/>} />
        <Route path="/profileform" element={<ProfileForm/>} />


        <Route path="/messagessend" element={<MessagesSend/>} />
        <Route path="/messagesrecive" element={<MessagesRecive/>} />


        <Route path="/updates" element={<Update/>} />
        <Route path="/updateview" element={<UpdateView/>}/>


        <Route path="/tasks" element={<Task/>} />
        <Route path="/taskview" element={<TaskView/>} />


        <Route path="/studentprofiles" element={<StudentProfiles/>} />
        <Route path="/professionalprofiles" element={<ProfessionalProfiles/>} />

        
        

 


        
      </Routes>
    </Router>
  );
}

export default App;
