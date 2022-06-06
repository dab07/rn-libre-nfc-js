import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import Nfcmanager from 'react-native-nfc-manager';
import ScanNFC from "../components/ScanNFC";

const App = () => {
    const [hasNfc, setHasNfc] = useState();

    React.useEffect(() => {
        async function checkNFC() {
            const supportedNFC  = await Nfcmanager.isSupported();
            if (supportedNFC) {
                await Nfcmanager.start();
            }
            setHasNfc(supportedNFC);
        }
        checkNFC();
    }, [])
    if (hasNfc == null) {
        return null;
    }
    else if (!hasNfc){
        return (
        <View>
            <Text style={styles.txt}> Device doesn't support NFC </Text>
        </View>
        );
    }

    return (
        <ScanNFC/>
    );
}

const styles = StyleSheet.create({
    txt : {
        textAlign: 'center',
        paddingTop: 90,
    }
});
export default App;
