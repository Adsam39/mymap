import { TextInput, SafeAreaView, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { EatContext } from "../context/EatContext";
import { LoginContext } from "../context/LoginContext";
import { FlatList } from "react-native-web";

export default function WantEat() {

    const [name, onChangeName] = useState();
    const [adresse, onChangeAdresse] = useState();
    const [latitude, onChangeLatitude] = useState();
    const [longitude, onChangeLongitude] = useState();
    const login = useContext(LoginContext)
    const apiUrl= 'https://digitalcampus.nerdy-bear.com/api/places';


    function AddResto() {
        axios.post(apiUrl, {
            title: name,
            address: adresse,
            latitude: latitude,
            longitude: longitude,
            headers: {
                'Authorization': 'Bearer ' + login,
            }
        }).then(function (response) {
            console.log("Ajout d'un nouveau restaurant");
            console.log(response);
            response.data.title = setTitle;
            response.data.address = setAddress;
            response.data.latitude = setLatitude;
            response.data.longitude = setLongitude;
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    /*function GetResto() {
        axios.get(apiUrl, {
            headers: {
              'Authorization': 'Bearer ' + login
            }
          })
          .then(function (response) {
            setLogin(true);
            console.log(response)
          })
    }*/

    return(
        <SafeAreaView>
            <Text>Nom restaurant: </Text>
            <TextInput
                style={styles.container}
                onChangeName={onChangeName}
                value={name} />
            <Text>Adresse: </Text>
            <TextInput
                style={styles.container}
                onChangeAdresse={onChangeAdresse}
                value={adresse} />
            <Text>Latitude: </Text>
            <TextInput
                style={styles.container}
                onChangeLatitude={onChangeLatitude}
                value={latitude} />
            <Text>Longitude: </Text>
            <TextInput
                style={styles.container}
                onChangeLongitude={onChangeLongitude}
                value={longitude} />
            <Button title="Add restaurant" onPress={AddResto} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});