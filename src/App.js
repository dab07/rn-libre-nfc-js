import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import ScanNFC from "../components/ScanNFC";
import NfcManager from "react-native-nfc-manager";

const App = () => {
    const [hasNfc, setHasNfc] = useState();
    const [enabled, setEnabled] = React.useState();

    React.useEffect(() => {
        async function checkNfc() {
            const supported = await NfcManager.isSupported();
            if (supported) {
                await NfcManager.start();
                // setEnabled(await NfcManager.isEnabled()); //remove for ios
            }
            setHasNfc(supported);
        }
        checkNfc();
    }, [])

    if (hasNfc == null) {
        return null;
    }
    else if (!hasNfc){
        return (
            <View style={styles.txt}>
                <Text>You device doesn't support NFC</Text>
            </View>
        );
    }
    // else if (!enabled) { //works for andriod
    //     return (
    //         <View style={styles.txt}>
    //             <Text>NFC is not enabled</Text>
    //             <TouchableOpacity onPress={() => {
    //                     NfcManager.goToNfcSetting();
    //                 }}>
    //                 <Text>Press here to go to NFC setting</Text>
    //             </TouchableOpacity>
    //
    //             <TouchableOpacity
    //                 onPress={async () => {
    //                     setEnabled(await NfcManager.isEnabled());
    //                 }}>
    //                 <Text>Check again</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }

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
