import React, {useState} from 'react';
import { Text, Image, Button } from 'react-native';

function TV(props) {

  const [isOff, setIsOff] = useState(true);
  return(
  <View>
    {"\n\n\n\n\n"}
    <Text>
      This is {props.name} TV, is and it is {isOff ? "OFF": "Turned Me On"}
    </Text>
    <Button
      onPress= {() =>{
        setIsOff(false);
      }}
      disabled={!isOff}
      title= {isOff ? "Turn me ON, Please": "Thank You!"}
    />
  </View>
  );
}


export default function MultiComp(){
  return(
    <View >
     
      <TV name = "LG"/>
      <TV name = "Sony"/>
     </View>
  );
}

