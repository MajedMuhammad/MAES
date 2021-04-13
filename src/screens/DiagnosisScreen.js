import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SocketContext } from '../context/Socket';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const DiagnosisScreen = () => {
    const [response, setResponse] = useState("");
    const socket = useContext(SocketContext);

    const sendYes = useCallback(() => {
        socket.emit("FromClient", 'yes');
    }, []);

    const sendNo = useCallback(() => {
        socket.emit("FromClient", 'no');
    }, []);

    useEffect(() => {
        socket.emit("PyRun");
    }, []);

    useEffect(() => {
        socket.on("FromAPI", res => {
            console.log(res)
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
                            <Button title={"YES"} style={styles.buttonStyle} onPress={sendYes} />

                            <Button title={"NO"} style={styles.buttonStyle} onPress={sendNo} />
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
