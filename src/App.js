import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Component/Home';
import { Switch,Route,Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ParentRegistration from './Component/ParentRegistration';
import Login from './Component/Login'
import Navbar from './Component/Navbar';
import AdminDashboard from './Component/AdminDashboard';
import TutorRegistration from './Component/TeacherRegistration';
import UserByType from './Component/UserByType';
import UserByEmail from './Component/UserByEmail';
import UpdateTutor from './Component/UpdateTutor';
import ParentDashboard from './Component/ParentDashboard';
import TeacherDashboard from './Component/TutorDashboard';
import GetAllUsers from './Component/GetAllUsers';
import About from './Component/About';
import GetAllDemos from "./Component/GetAllDemos";
import GetDemoById from "./Component/GetDemoById";
import UpdateDemoStatus from "./Component/UpdateDemoStatus";
import UpdateDemoStatusForm from "./Component/UpdateDemoStatusForm";
import GetDemoByTutorId from "./Component/GetDemoByTutorId";
import RequestDemoForm from "./Component/RequestDemoForm";
import GetDemoByParentId from "./Component/GetDemoByParentId.jsx";



const App =()=>
{
  return(
        <>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/registration" component={ParentRegistration}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/admin" component={AdminDashboard}/>
         <Route exact path="/admin/tutorregistration" component={TutorRegistration}/>
         <Route exact path="/admin/userbytype" component={UserByType}/>
         <Route exact path="/admin/userbyemail" component={UserByEmail}/>
         <Route exact path="/admin/updatetutor" component={UpdateTutor}/>
         <Route exact path="/parent" component={ParentDashboard}/>
         <Route exact path="/teacher" component={TeacherDashboard}/>
         <Route exact path="/admin/getAllUsers" component={GetAllUsers}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/admin/getalldemos" component={GetAllDemos}/>
         <Route exact path="/admin/getdemobyid" component={GetDemoById}/>
         <Route exact path="/admin/updatedemostatus" component={UpdateDemoStatus}/>
         <Route exact path="/admin/updatedemostatusform" component={UpdateDemoStatusForm}/>
         <Route exact path="/admin/getdemobytutorid" component={GetDemoByTutorId}/>
         <Route exact path="/admin/requestdemoform" component={RequestDemoForm}/>
         <Route exact path="/admin/getdemobyparentid" component={GetDemoByParentId}/>
         <Redirect to="/"/> 
         </Switch> 
        </>
  );

}

export default App;
