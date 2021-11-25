import React,{Fragment} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
/*
       Route : 화면 1개
       Switch : 화면 변경
       =================== 관리 Router
 */
import Header from "./component/main/Header";
import Footer from "./component/main/Footer";
import Home from "./component/main/Home";
import Music from "./component/music/MusicList";

// 조립기
function App() {
    return (
        <Router>
            <Fragment>
                <Header/>
                  <div style={{"height":"30px"}}></div>
                  <div className={"container"}>
                    <div className={"jumbotron"}>
                      <Switch>
                          <Route exact path={"/"} component={Home}/>
                          <Route path={"/music/list"} component={Music}/>
                      </Switch>
                    </div>
                  </div>
                <Footer/>
            </Fragment>
        </Router>
    )
}
export default App;
