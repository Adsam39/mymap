import { SafeAreaView, TextInput, Text, StyleSheet, Button, View } from "react-native";
import { useState } from 'react';
import axios from "axios";
import { useContext } from "react";
//import { DetailContext } from "../context/DetailContext";
import { LoginContext } from "../context/LoginContext";

export default function Details() {

    const [name, onChangeName] = useState();
    const [adresse, onChangeAdresse] = useState();
    const [latitude, onChangeLatitude] = useState();
    const [longitude, onChangeLongitude] = useState();
    const {login, setLogin} = useContext(LoginContext);
    const apiUrl = "https://digitalcampus.nerdy-bear.com/api/places/"

    function UpdateDetail(id) {
        axios.put(apiUrl + `${id}`, {
            data: {
                title: name,
                address: adresse,
                latitude: latitude,
                longitude: longitude,
            }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            onChangeName('');
            onChangeAdresse('');
            onChangeLatitude('');
            onChangeLongitude('');
            console.log(error)
        })
    }

    function DeleteDetail(id) {
        axios.delete(apiUrl + `${id}`)
    }

    return(
        <SafeAreaView>
            <Text>Nom: </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeName}
                value={name} />
            <Text>Adresse : </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeAdresse}
                value={adresse} />
            <Text>Latitude : </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeLatitude}
                value={latitude} />
            <Text>Longitude : </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeLongitude}
                value={longitude} />
            <Button title="Update restaurant" onPress={UpdateDetail} />
            <Button title="Delete restaurant" onPress={DeleteDetail} />
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