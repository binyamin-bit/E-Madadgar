import './App.css';
import Registration from './Pages/Authentication/Registration/Registration';
import Signin from './Pages/Authentication/Registration/Signin';
import {Link,BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (  
        //  <Registration />
        //  <Signin />
         <Router>
          <Route exact path="/" component={Signin} />
          <Route exact path="/reg" component={Registration} />
         </Router>
  );
}

export default App;
