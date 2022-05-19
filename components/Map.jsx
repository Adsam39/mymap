import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import axios from "axios";
import { useContext } from "react";
//import { MapContext } from "../context/MapContext";
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";

export default function Map() {

    const apiUrl="https://digitalcampus.nerdy-bear.com/api/places?pagination%5Blimit%5D=100000";
    const {login, setLogin} = useContext(LoginContext);
    const {user, setUser} = useContext(UserContext);
    const deja = "red";
    const pas = "#0362fc";

    axios.get(apiUrl, {
      headers: {
        'Authorization': 'Bearer ' + `{user.jwt}`
      }
    })
    .then(function (response) {
      setLogin(true);
      console.log(response)
    })

    return (
        <MapView style={styles.map} initialRegion={{
          latitude: 46.232193,
          longitude: 2.209667,
          latitudeDelta: 30.0,
          longitudeDelta: 1.0,
        }}>
          <Marker pinColor={pas} coordinate={{latitude: 46.319982, longitude: 4.831111}} title='Le S'/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});