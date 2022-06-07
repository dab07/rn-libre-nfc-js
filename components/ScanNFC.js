import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import NfcManager, {NfcEvents, NfcTech} from 'react-native-nfc-manager';

const ScanNFC = () => {
    async function scanTag() {
        NfcManager.setEventListener(NfcEvents.DiscoverTag,  tag => {
            console.warn('Tag Found', tag)
        })
        await NfcManager.registerTagEvent();
    }

    // async function scanTag() {
    //     try {
    //         await Nfcmanager.requestTechnology(NfcTech.Ndef);
    //         const tag = Nfcmanager.getTag();
    //         console.warn('Tag Found', tag);
    //         console.log('Scanning');
    //     }
    //     catch (e) {
    //         console.warn('Something went wrong!');
    //     }
    //     finally {
    //         Nfcmanager.cancelTechnologyRequest();
    //         console.log('Scanning end');
    //     }
    // }

    return (
        <View>
            <Text style={styles.txt}> Your device supports NFC </Text>
            <Text style={styles.infotxt}>Click on Scan to scan the device</Text>
            <TouchableOpacity  onPress={scanTag} style={styles.scanbtnpos}>
                <Text style={styles.scanbtn}>Scan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    scanbtnpos : {
        paddingTop: 450,
        paddingEnd: 45,
        paddingStart: 45,
    },
    txt : {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 42,
    },
    scanbtn: {
        fontSize: 72,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'white',
        color: 'black'
    },
    infotxt : {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        paddingTop: 100,
    }
});

export default ScanNFC;
