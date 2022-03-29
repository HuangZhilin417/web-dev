
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HomeScreen from "./components/Tuiter/home-screen";
import HelloWorld from "./components/helloWorld/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="tuiter"
                         element={<Tuiter/>}>
                      <Route index
                             element={<HomeScreen/>}/>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}


export default App;
