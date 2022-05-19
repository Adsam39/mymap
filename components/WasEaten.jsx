import axios from "axios";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useContext } from "react";
import { EatenContext } from "../context/EatenContext";


export default function WasEaten() {

    const [name, onChangeName] = useState();
    const [adresse, onChangeAdresse] = useState();
    const [latitude, onChangeLatitude] = useState();
    const [longitude, onChangeLongitude] = useState();
    const apiUrl= 'https://digitalcampus.nerdy-bear.com/api/places';

    function AddResto() {
        axios.post(apiUrl, {
            title: name,
            address: adresse,
            latitude: latitude,
            longitude: longitude,
        }).then(function (response) {
            console.log("Ajout d'un nouveau restaurant");
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    return(
        <SafeAreaView>
            <Text>Nom restaurant : </Text>
            <TextInput 
            style={styles.container}
            onChangeName={onChangeName}
            value={name}
            />
            <Text>Adresse : </Text>
            <TextInput 
            style={styles.container}
            onChangeAdresse={onChangeAdresse}
            value={adresse}
            />
            <Text>Latitude : </Text>
            <TextInput 
            style={styles.container}
            onChangeLatitude={onChangeLatitude}
            value={latitude}
            />
            <Text>Longitude : </Text>
            <TextInput 
            style={styles.container}
            onChangeLongitude={onChangeLongitude}
            value={longitude}
            />
            <Button title="Add restaurant" onPress={AddResto}/>
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