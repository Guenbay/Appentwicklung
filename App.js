import React, { useState } from 'react'; 
import { Button, Text, View, StyleSheet, Image} from 'react-native'; 

 
const App = () => { 
  const [pressedCount, setPressedCount] = useState(0); 

  return ( 
    <View style={styles.container}> 
      <Text style={styles.text}> 
        {pressedCount > 0 ? `The button was pressed ${pressedCount} times! ` : 'The button isn\'t pressed yet'} 
        {pressedCount >= 10 ? <Button title=" New Game " onPress={() => setPressedCount(0)} /> : " " }
      </Text> 
      
      <Button 
        style={styles.button}
        title='Press me' 
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >=10 }
      /> 

      <Button 
        style={styles.button}
        title='Reset'
        onPress={() => setPressedCount(0)}
        disabled={pressedCount >=10 }
      />
      
    </View> 

)}; 

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6d4c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    margin: 16,
  },
  button: {
    width: 100,
    color: "#841584",
  },
});

export default App; 