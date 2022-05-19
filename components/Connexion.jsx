import { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Text, Button } from "react-native";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";

export default function Connexion() {

    const [text, onChangeText] = useState();
    const [mdp, onChangeMdp] = useState();
    const apiUrl = 'https://digitalcampus.nerdy-bear.com/api/auth/local'
    const {login, setLogin} = useContext(LoginContext);
    const {user, setUser} = useContext(UserContext);

    function Log() {
        //console.log(mdp, 'text', text)
            axios.post(apiUrl, {
                identifier: text,
                password: mdp,
            }).then(function (response) {
                const {data} = response;
                setUser({ data: {
                    id : data.user.id,
    
                    username: data.user.username,
    
                    email: data.user.email,
    
                    password: data.user.password,
    
                    jwt: data.jwt
                }
                })
                setLogin(true);
                console.log("Authentification réussi")
                console.log(response)
            })
            .catch(function(error) {
                onChangeText('');
                onChangeMdp('');
                console.log(error)
            })
    }

    return(
        <SafeAreaView>
            <Text>email : </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeText}
                value={text}
            />
            <Text>password : </Text>
            <TextInput
                style={styles.container}
                onChangeText={onChangeMdp}
                secureTextEntry={true}
                value={mdp}
            />
            <Button title="Valider" onPress={Log}/>
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

    text: {
        color: 'red',
    },
});