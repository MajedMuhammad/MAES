import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const ENDPOINT = "http://159.89.13.198:4001";
const socket = socketIOClient(ENDPOINT);



const DiagnosisScreen = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        socket.on("FromAPI", res => {
            setResponse(res);
        });
    }, [response]);

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{response}</Text>
            <Spacer>
                <View style={styles.buttonContainer}>
                    {((response.indexOf("?") != -1) && response != "")
                        ?
                        <>
                            <Button title={"YES"} style={styles.buttonStyle} onPress={() => {
                                socket.emit("FromClient", 'yes');
                            }} />

                            <Button title={"NO"} style={styles.buttonStyle} onPress={() => {
                                socket.emit("FromClient", 'no');
                            }} />
                        </>
                        :
                        <Text style={styles.takeCareStyle}>Take Care!</Text>
                    }

                </View>
            </Spacer>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    buttonStyle: {
        width: 150,
    },
    textStyle: {
        alignSelf: 'center',
        textAlign: 'justify',
        fontSize: 32,
        marginBottom: 40,
        marginHorizontal: 20,
    },
    takeCareStyle: {
        flex: 1,
        fontSize: 24,
        color: 'rgb(0, 122, 255)',
        textAlign: 'center',
    }
});

export default DiagnosisScreen;
