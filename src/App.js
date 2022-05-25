import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';
import SearchBar from './SearchBar';
import Apply from './Apply';
import Profile from './Profile';
import StudentDetails from './StudentDetails'
import AllStudents from './AllStudents';
import Login from './Login';
import Signup from './Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import Choose from './Choose';
import Navhome from './Navhome';
import PublicRoute from './PublicRoute';
import HomeStu from './HomeStu';
import JobDetails from './JobDetails';
import Register from './Register';
import Applied from './Applied';
import Placed from './Placed';
import Charts from './charts';

function App() {
  return (
    <UserAuthContextProvider>
    <Router>
      <div className="App">
        <PublicRoute>
          <Navhome />
        </PublicRoute>
        <ProtectedRoute>
          <Navbar />
        </ProtectedRoute>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Choose />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/home">
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </Route>
            <Route exact path="/charts">
              <ProtectedRoute>
                <Charts />
              </ProtectedRoute>
            </Route>
            <Route exact path="/studentshome">
              <ProtectedRoute>
                <AllStudents />
              </ProtectedRoute>
            </Route>
            <Route path="/create">
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            </Route>
            <Route path="/placed">
              <ProtectedRoute>
                <Placed />
              </ProtectedRoute>
            </Route>
            <Route path="/contact">
              {/* <ProtectedRoute> */}
                <Contact />
              {/* </ProtectedRoute> */}
            </Route>
            <Route path="/jobs/:id">
              <ProtectedRoute>
                <BlogDetails />
              </ProtectedRoute>
            </Route>
            <Route path="/applied/:id">
              <ProtectedRoute>
                <Applied />
              </ProtectedRoute>
            </Route>
            <Route path="/edit/:id">
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            </Route>
            <Route path='/apply'>
              {/* <ProtectedRoute> */}
                <Apply />
              {/* </ProtectedRoute> */}
            </Route>
            <Route path='/register/:id'>
              {/* <ProtectedRoute> */}
                <Register />
              {/* </ProtectedRoute> */}
            </Route>
            <Route path="/students/:id">
              <ProtectedRoute>
                <StudentDetails />
              </ProtectedRoute>
            </Route>
            <Route path="/homestudents">
              <HomeStu />
            </Route>
            <Route path="/job/:id">
              {/* <ProtectedRoute> */}
                <JobDetails />
              {/* </ProtectedRoute> */}
            </Route>
            <Route path='/search'>
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            </Route>
            <Route path='/profile'>
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            </Route>
            <Route path="*">
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </UserAuthContextProvider>
  );
}

export default App;
