import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Footer from './components/Footer';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import WantEat from './components/WantEat';
import WasEaten from './components/WasEaten';
import Map from './components/Map';
import Details from './components/Details';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';
import axios from 'axios';

export default function App() {

  const [login, setLogin] = useState(false)

  function HomeScreen({navigation}) {
    return(
      <View style={styles.container}>
        <Header name='Sam'/>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title='Place you are eaten' onPress={() => navigation.navigate('Eaten')}/>
        <Button title='Place you want to eat' onPress={() => navigation.navigate('Want')}/>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
        <Button title='Map' onPress={() => navigation.navigate('Map')}/>
        <Footer/>
      </View>
    );
  }

  function LogScreen({navigation}) {
    return(
      <><Connexion /><View>
        <Button title='Register' onPress={() => navigation.navigate('Register')}/>
      </View></>
    );
  }
  
  function RegisterScreen({navigation}) {
    return(
      <><Inscription/><View>
        <Button title='Log' onPress={() => navigation.navigate('Log')}/>
      </View></>
    );
  }

  function EatScreen({navigation}) {
    return(
      <View>
        <WasEaten/>
        <Button title='Place you want to eat' onPress={() => navigation.navigate('Want')}/>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
        <Button title='Map' onPress={() => navigation.navigate('Map')}/>
      </View>
    );
  }

  function WantScreen({navigation}) {
    return(
      <View>
        <WantEat/>
        <Button title='Place you are eaten' onPress={() => navigation.navigate('Eaten')}/>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
        <Button title='Map' onPress={() => navigation.navigate('Map')}/>
      </View>
    );
  }

  function MapScreen({navigation}) {
    return(
      <View>
        <Map/>
        <Button title='Place you are eaten' onPress={() => navigation.navigate('Eaten')}/>
        <Button title='Place you want to eat' onPress={() => navigation.navigate('Want')}/>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
      </View>
    );
  }

  function DetailScreen({navigation}) {

    return(
      <View>
        <Details />
        <Button title='Place you are eaten' onPress={() => navigation.navigate('Eaten')} />
        <Button title='Place you want to eat' onPress={() => navigation.navigate('Want')} />
        <Button title='Map' onPress={() => navigation.navigate('Map')} />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{login, setLogin}}>
        <Stack.Navigator initialRouteName='Home'>
          {
            login ? (<>
              <Stack.Screen name='Home' component={HomeScreen}/>
              <Stack.Screen name='Eaten' component={EatScreen}/>
              <Stack.Screen name='Want' component={WantScreen}/>
              <Stack.Screen name='Map' component={MapScreen}/>
              <Stack.Screen name='Details' component={DetailScreen}/>
            </>) : (<>
              <Stack.Screen name='Log' component={LogScreen}/>
              <Stack.Screen name='Register' component={RegisterScreen}/>
            </>)
          }
        </Stack.Navigator>
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
