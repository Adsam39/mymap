import { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Button, Text } from "react-native";
import axios from "axios";

export default function Inscription() {

    const [text, onChangeText] = useState();
    const [mail, onChangeMail] = useState();
    const [mdp, onChangeMdp] = useState();
    const apiUrl='https://digitalcampus.nerdy-bear.com/api/auth/local/register';

    axios.post(apiUrl, {
        username: text,
        email: mail,
        password: mdp,
    }).then(function (response) {
        console.log("Ajout d'un nouvel utilisateur");
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

    return(
        <SafeAreaView>
            <Text>username : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Text>mail : </Text>
            <TextInput
                style={styles.input}
                onChangeMail={onChangeMail}
                value={mail}
            />
            <Text>password : </Text>
            <TextInput
                style={styles.input}
                onChangeMdp={onChangeMdp}
                value={mdp}
            />
            <Button title="Valider"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});