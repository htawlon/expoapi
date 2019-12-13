import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Picker, TextInput} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class Newpatients extends Component{
    render(){
        return(
            <View>
                <Header
                leftComponent={
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Text>
                            <Icon name="arrow-left" size={14} color="#fff"></Icon>
                        </Text>
                    </TouchableOpacity>
                }
                centerComponent={{text:"Add Patients", style:{color: "#fff"}}}
                >
                </Header>
                 <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <TextInput
                        style={styles.formControl}
                        placeholder="Patient Name"
                        >

                        </TextInput>
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                        style={styles.formControl}
                        placeholder="Age"
                        >

                        </TextInput>
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                        style={styles.formControl}
                        placeholder="Address"
                        >

                        </TextInput>
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput
                        style={styles.formControl}
                        placeholder=" Table No"
                        >

                        </TextInput>
                    </View>
                 </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        padding: 40,
    },
    formGroup:{
       marginBottom: 20,
    },
    formControl:{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#000",
        padding: 5 
    }
})