import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SocketContext } from '../context/Socket';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const DiagnosisScreen = () => {
    const [response, setResponse] = useState("");
    const [flag, setFlag] = useState(0);
    const socket = useContext(SocketContext);

    const again = useCallback(() => {
        socket.disconnect();
        console.log("Disconnected Successfully.");
        setFlag(flag + 1);
    }, [flag]);

    const sendYes = useCallback(() => {
        socket.emit("FromClient", 'yes');
    }, []);

    const sendNo = useCallback(() => {
        socket.emit("FromClient", 'no');
    }, []);

    useEffect(() => {
        socket.connect();
        console.log("Connected Successfully.")
    }, [flag]);

    useEffect(() => {
        socket.on("FromAPI", res => {
            console.log(res)
            setResponse(res);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{response}</Text>
            <Spacer>
                <View style={styles.buttonContainer}>
                    {((response.indexOf("?") != -1) && response != "")
                        ?
                        <>
                            <Button title={"YES"} style={styles.buttonStyle} onPress={sendYes} />

                            <Button title={"NO"} style={styles.buttonStyle} onPress={sendNo} />
                        </>
                        :
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.takeCareStyle}>Take Care!</Text>
                            <Spacer />
                            <Button title={"Again"} style={styles.buttonStyle} onPress={again} />
                        </View>
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
        fontSize: 24,
        color: 'rgb(0, 122, 255)',
        textAlign: 'center',
    }
});

export default DiagnosisScreen;
