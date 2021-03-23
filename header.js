import React, { Component } from 'react' ;
import {StyleSheet, Text,View} from 'react-native';

export default class Header extends Component{



    render(){

        const {header,headerText}= style;
        return(
            <View style={header}>
        <Text style={headerText}>Calculator</Text>
        </View>
        )
    }
}

const style=StyleSheet.create(
    {
    header: {
        height: 100,
        
        shadowColor: '#000000',
        shadowOffset: { width:0 ,height: 2},
        shadowOpacity:0.5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F56C7F'
      },
      headerText:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        
      }

    }
);