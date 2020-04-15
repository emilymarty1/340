import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My Name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Text> Welcome to CIS 340</Text>
      <Student name = "Emily Marty"/>
      <Student name = "Alice ####"/>
      <Student name = "Bob ####"/>
      <Student name = "John ####"/>
    </View>
  );
}
