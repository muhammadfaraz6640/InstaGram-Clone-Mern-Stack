import React,{createContext,useReducer,useEffect,useContext} from 'react';

import './App.css';
import './Profile.css';
import NavBar from '../src/Components/NavBar';
import Profile from '../src/Components/Profile';
import Signin from '../src/Components/Signin';
import Home from '../src/Components/Home';
import Signup from '../src/Components/Signup';
import Create from '../src/Components/WritePost';
import {Reducer,initialState} from '../src/Reducers/UserReducer';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
export const UserContext = createContext()

const Routing = ()=>{
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))  //json.parse converts string to object
      if(user){
        dispatch({type:"USER",payload:user})
        // console.log(user)        
      }else{        
             history.push('/signin')
      }
    },[])
    return(
      <Switch>
        <Route exact path="/" >
        <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        
        
      </Switch>
    )
  }

function App() {
    const [state,dispatch] = useReducer(Reducer,initialState)
  return (
      <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar />
    <Routing />  
    </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
