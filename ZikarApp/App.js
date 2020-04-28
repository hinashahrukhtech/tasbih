import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register  from './Components/Register';
import JoinZikar from './Components/JoinZikar';
import Home  from './Components/Home';
import SelfCounter  from './Components/SelfCounter';
import GroupCounter from './Components/GroupCounter';
import CreateGroup from './Components/CreateGroup';
import SelfZikar from './Components/SelfZikar';
import SelectGroup from './Components/SelectGroup';
import ModifyGroup from './Components/ModifyGroup';
import ZikarHistory from './Components/ZikarHistory';
import AlreadyCreate from './Components/AlreadyCreatedGroup';
import NewSelfZikar from './Components/NewSelfZikar';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  NewSelfZikar: { screen: NewSelfZikar },
  AlreadyCreate: { screen:AlreadyCreate },
  SelectGroup: { screen: SelectGroup },
  SelfZikar: { screen: SelfZikar },
  Register: { screen: Register },
  CreateGroup: { screen:CreateGroup },
  JoinZikar: { screen: JoinZikar },
  SelfCounter: { screen:SelfCounter },
  ModifyGroup: { screen: ModifyGroup },
  ZikarHistory: { screen:ZikarHistory },
  GroupCounter: {screen:GroupCounter},


});
const App = createAppContainer(Navigator);

 
 
 
export default App;
// const express = require('express');
// const app = express();
// PORT = 3000;
// app.get('/', (req, res)=>{
//   res.send('hello');

// });
// app.listen(PORT, () => {
//   console.log('port is running at'+PORT);
// }
// );