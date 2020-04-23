import React,{Component} from 'react';
import Register  from './Components/Register';
import JoinZikar from './Components/JoinZikar';
import Home  from './Components/Home';
import SelfCounter  from './Components/SelfCounter';
import GroupCounter from './Components/GroupCounter';
import CreateGroup from './Components/CreateGroup';
import SelfZikar from './Components/SelfZikar';
import Map from './Components/Map';
export default class App extends React.Component {
  render(){
 return(

   <SelfZikar/>
   //<Register/>
 //<CreateGroup/>
  // <JoinZikar/> 
  // <Home/>
  // <SelfCounter/>
   //<GroupCounter/>
 );
}
}