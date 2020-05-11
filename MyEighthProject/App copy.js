import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);
  
  return (
    <View style={styles.container}>
      <View style = {styles.counterText}>
        <Text>Tap Counter : {Count}</Text>
      </View>
      <TouchableOpacity style = {styles.button} onPress={onTap}  >
       
        <Text>Touch Me</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#F0F8FF"
  },

    button: {
      alignItems: "center",
      backgroundColor: "##778899",
      padding: 10

    },

      counterText:{
        alignItems: "center",
        padding: 10

      }

});
