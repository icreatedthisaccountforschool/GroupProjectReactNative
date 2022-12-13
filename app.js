import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const styles = StyleSheet.create({Screen:{ flex: 1, alignItems: 'center', justifyContent: 'center' }});
const AboutButton = (navigation) => (<Button title="Go to About" onPress={() => navigation.navigate('About')} />)
const InTheatresButton = (navigation) => (<Button title="Go to In Theatres" onPress={() => navigation.navigate('In Theatres')} />)
const ReviewButton = (navigation) => (<Button title="Go to Review" onPress={() => navigation.navigate('Review')}/>)
const GoBackButton = (navigation) => ( <Button title="Go Back" onPress={() => navigation.goBack()} />)

function HomeScreen({ navigation }) {
  return (<View style={styles.Screen}>{AboutButton(navigation)} {InTheatresButton(navigation)} {ReviewButton(navigation)} {GoBackButton(navigation)}</View>);
}
function ReviewScreen({ navigation }) {
  return (<View style={styles.Screen}>{GoBackButton(navigation)}</View>);
}
function AboutScreen({ navigation }) {
  return (<View style={styles.Screen}>{GoBackButton(navigation)}</View>);}
function InTheatresScreen({ navigation }){
  return(<View style={styles.Screen}>{GoBackButton(navigation)}</View>);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Group>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="In Theatres" component={InTheatresScreen}/>
        <Stack.Screen name="Review" component={ReviewScreen}/>
      </Stack.Navigator>
      </Stack.Group>
    </NavigationContainer>
  );
}

