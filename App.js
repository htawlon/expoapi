import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import NewPatient from './screen/NewPatient'
import Patients from './screen/Patients'


export default class App extends Component{
  render(){
    const MyStack=createStackNavigator({
      Patients:{
        screen: Patients
      },
      NewPatient:{
        screen: NewPatient
      }
    },{
      initialRouteName: "Patients",
      defaultNavigationOptions: {
        header: null
      }
    })
    const AppContainer=createAppContainer(MyStack)
    return(<AppContainer></AppContainer>)
  }
  
}
