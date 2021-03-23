import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import Header from './header';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: ''  
    }
    this.sum= this.sum.bind(this);
    this.ded= this.ded.bind(this);
    this.mul= this.mul.bind(this);
    this.div= this.div.bind(this);
  }
  sum(){
    const result=parseInt(this.state.input1)+parseInt(this.state.input2);
    this.setState({
      result: result
    })
  }
  ded(){
    const result=parseInt(this.state.input1)-parseInt(this.state.input2);
    this.setState({
      result: result
    })
  }
  mul(){
    const result=parseInt(this.state.input1)*parseInt(this.state.input2);
    this.setState({
      result: result
    })
  }
  div(){
    const result=parseInt(this.state.input1)/parseInt(this.state.input2);
    this.setState({
      result: result
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
       <Header/>
        <View style={styles.contentWrapper}>
        <TextInput style={styles.input}
        placeholder='First value'
        onChangeText={ (text)=> {  
          this.setState({
            input1: text
          })
        }}
        value={this.state.input1}
        />
        <View style= {styles.buttonWrapper}>
          <Button 
          onPress={this.sum}
          color="#641584"
          title='+'
          
          />
          <Button onPress={ this.ded}
          color="#741584"
          title='-'
         
          />
          <Button onPress={this.mul }
          color="#841584"
          title='*'
          />
          <Button onPress={this.div}
          color="#941584"
          title='/'
          />
        </View>
        <TextInput style={styles.input}
        placeholder='Second value'
        onChangeText={ (text)=> {  
          this.setState({
            input2: text
          })
        }}
        value={this.state.input2}
        />
        
        <Text style={styles.sampleText}>Result:  {this.state.result}</Text>
        
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#9CF7E9'
  },

  contentWrapper:{
    padding: 10,
    flexDirection:'column',
    justifyContent:'center'

  },
  input:{
    height:40,
    backgroundColor:'#FCF079',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonWrapper:{
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    
  },
 
  sampleText:{
    height:30,
    fontSize:20,
  },
 
});