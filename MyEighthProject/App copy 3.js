import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  
  
  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);
  
  return (
    <View style={styles.container}>
      <Image source={{uri: "imageurl"}}
          style ={styles.logo} />
      
      <Text style={styles.inst}>
        Press the button below to seleect an image on your phone
      </Text>

      <TouchableOpacity style = {styles.button} onPress={() => alert("You have not selected an image yet")>
       
        <Text style = {styles.buttonText}>Pick Image</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#F0F8FF"
  },

    button: {
      borderRadius: 5,
      backgroundColor: "#778899",
      padding: 10

    },

    inst: {
      fontSize: 18,
      color: "#87CEFA",
      marginHorizontal: 15,
      marginBotton: 10
    },

      counterText:{
        alignItems: "center",
        padding: 10

      },

      logo: {
        width: 310,
        height: 300,
        marginBotton: 20
      },

      buttonText: {
        fontSize: 20,
        color: "#FFF"
      }
});
