import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // import image picker
import * as Sharing from 'expo-sharing'; //import image sharing

export default function App() {

  const{selectedImage, setSelectedImage } = React.useState(null);

  let openImagePickerAsync = synce () => {
   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

   if (permissionResult.granded  === false){
     alert("Permission is required");
     return;
   }

   let pickerResult = await ImagePicker.launchImageLibraryAsync();
   if (pickerResult.cancelled === true){
     return;
   }

   setSelectedImage({localUri: pickerResult.uri});
 };

 let openSharingDialogAsync= async () =>{
   if ((await Sharing.isAvailableAsync())){
     alert('Sharing is not available on my phone');
     return;
   }
   Sharing.shareAsync(selectedImage.localUri);
 }

 if (selectedImage!== null){
   return(
     <View style={styles.container}>
       <Image source = {{ uri: selectedImage.localUri}} style={styles.selImage}/>
       <TouchableOpacity onPress={openSharingDialogAsync} style = {styles.button}>
         <Text> style={styles.buttonText} Share my photo </Text>
       </TouchableOpacity>
       </View>
   )
 }

  return (
    <View style={styles.container}>
      <Image source={{uri: "imageurl"}}
          style ={styles.logo} />
      
      <Text style={styles.inst}>
        Press the button below to seleect an image on your phone
      </Text>

      <TouchableOpacity style = {styles.button} onPress={() => alert("You have not selected an image yet")}>
       
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
      },

      selImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
      }
});
