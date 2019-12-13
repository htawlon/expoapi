import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Patient extends Component{
    render(){
        return(
            <View>
                <Header
                rightComponent={
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("NewPatient")}>
                      <Text>
                          <Icon name="user-plus" size={14} color="#fff"></Icon>
                      </Text>
                  </TouchableOpacity>
                }
                centerComponent={{text:"Patients", style:{color:"#fff"}}}
                >
                  
                </Header>
            </View>
        )
    }
}