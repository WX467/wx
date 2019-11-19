import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Welcome from './Welcome/welcome';
import LoginPage from './LoginPage/login';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Retireve from './Retireve/retireve';
import Register from './Register/register';
import HomePage from './HomePage/homepage';
import FirstPage from './FirstPage/firstpage';
import Recoverable from './Recoverable/recoverable';
import Harmful from './Harmful/harmful';
import Dry from './Dry/dry';
import Wet from './Wet/wet';
import InquirePage from './InquirePage/inquire';
import Message from './Message/message';
import AboutUs from './AboutUs/aboutus';
import Introduction from './Introduction/introduction1';
import Suggestion from './Suggestion/suggestion1';
import Know from './Know/know1';
import Contact from './Contact/contact1';
import Personal from './Personal/personal';
import My from './My/my';
import Note from './Note/note1';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/welcome" component={Welcome}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/retireve" component={Retireve}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/firstpage" component={FirstPage}></Route>
                        <Route path="/recoverable" component={Recoverable}></Route>
                        <Route path="/harmful" component={Harmful}></Route>
                        <Route path="/dry" component={Dry}></Route>
                        <Route path="/wet" component={Wet}></Route>
                        <Route path="/inquire" component={InquirePage}></Route>
                        <Route path="/message" component={Message}></Route>
                        <Route path="/aboutus" component={AboutUs}></Route>
                        <Route path="/introduction1" component={Introduction}></Route>
                        <Route path="/suggestion1" component={Suggestion}></Route>
                        <Route path="/know1" component={Know}></Route>
                        <Route path="/contact1" component={Contact}></Route>
                        <Route path="/personal" component={Personal}></Route>
                        <Route path="/my" component={My}></Route>
                        <Route path="/note1" component={Note}></Route>
                        

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
