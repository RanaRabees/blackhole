import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} >ASSALAMUALAIKUM THIS IS ADEEMA AAMIR SWEET CUTE BABY!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'pink',
alignItems: 'center',
justifyContent: 'center',
},
Text: {
color: 'red',
fontSize: 20,
textAlign : 'center',

},
});







// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
