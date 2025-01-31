import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/pages/Home.js';
import Account from './components/pages/Account.js';
import Domains from './components/pages/Domains.js';
import NotificationRecived from './components/pages/NotificationRecived.js';
import NotificationSend from './components/pages/NotificationSend.js';
import Updates from './components/pages/Updates.js';
import UpdateView from './components/UpdateView.js';
import Myupdates from './components/pages/Myupdates.js';
import Tasks from './components/pages/Tasks.js'; 
import TaskView from './components/TaskView.js';
import Mytasks from './components/pages/Mytasks.js';
import TaskImpact from './components/pages/TaskImpact.js';
import StudentProfile from './components/pages/StudentProfile';
import UserProfile from './components/pages/UserProfile.js';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import UserSignup from './components/Authentication/UserSignup.js';
import UserVerification from './components/Authentication/UserVerification.js'
import Navbar from './components/Navbar';
import { SubdomainProvider } from './components/SubdomainContext';
import { TechProvider } from './components/TechContext';

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <SubdomainProvider>
      <TechProvider>
        <BrowserRouter>
          <LocationWrapper>
            <Routes>
            
              <Route path="/" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/userSignup" exact element={<UserSignup />} />
              <Route path="/userVerification" exact element={<UserVerification />} />

              {user && <Route path="/home" exact element={<Home />} />}
              <Route path="/account" exact element={<Account />} />
              <Route path="/domains" exact element={<Domains />} />
              <Route path="/notificationrecived" exact element={<NotificationRecived/>} />
              <Route path="/notificationsend" exact element={<NotificationSend/>} />

              <Route path="/updates" exact element={<Updates />} />
              <Route path="/updateview/:id" exact element={<UpdateView />} />
              <Route path="/myupdates" exact element={<Myupdates />} />

              <Route path="/tasks" exact element={<Tasks/>} />
              <Route path="/taskview/:id" exact element={<TaskView />} />
              <Route path="/mytasks" exact element={<Mytasks />} />
              <Route path="/taskimpact" exact element={<TaskImpact />} />

              <Route path="/studentprofile" exact element={<StudentProfile />} />
              <Route path="/userprofile" exact element={<UserProfile />} />

              <Route path="/profileform" exact element={<ProfileForm />} />
              <Route path="/profileview/:id" exact element={<ProfileView />} />

            </Routes>
          </LocationWrapper>
        </BrowserRouter>
        </TechProvider>
      </SubdomainProvider>
    </div>
  );
}

function LocationWrapper({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/userSignup' && location.pathname !== '/userVerification' && <Navbar />}
      {children}
    </>
  );
}

export default App;
