import { Text, StyleSheet, View, Button } from 'react-native'
import { useBatteryLevel, usePowerState } from 'expo-battery';
import PagerView from 'react-native-pager-view';
import { FontAwesome } from '@expo/vector-icons';


export default function Danilo() {
    const { lowPowerMode, batteryLevel, batteryState } = usePowerState();

    
    let buttonColor = 'green';
    if(batteryLevel > 0.6) {
        buttonColor = 'green';
    } else {
        buttonColor = 'red';
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Pagina do Dan</Text>

            <View style={styles.pageView}>
                <PagerView style={styles.container} initialPage={0}>
                    <View style={styles.page} key="1">
                        <Text style={styles.subtitulo}>Nível atual de bateria</Text>
                        <View style={{...styles.batteryLevel, backgroundColor:`${buttonColor}`}}>
                            <Text style={styles.subtitulo}>{batteryLevel * 100}%</Text>
                        </View>
                        <Text>Araxta pro lado ➡️</Text>
                    </View>
                    <View style={styles.page} key="2">
                        <Text style={styles.subtitulo}>Modo pouca energia ligado?</Text>
                        {
                            lowPowerMode
                            ?
                           <FontAwesome name="toggle-on"  size={50} color="black" />
                            :
                             <FontAwesome name="toggle-on"  size={50} color="black" />
                        }
                    </View>
                    <View style={styles.page} key="3">
                        <Text style={styles.subtitulo}>Esse celular ta carregando?</Text>
                       
                        <FontAwesome name="battery-half" size={50} color="orange" />
                    </View>
                </PagerView>
            </View>




        </View>





    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        gap: 20
    },

    containerBattery: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },

    batteryLevel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        width: '20%',
        height: 50,
        borderColor: 'white',
        
    },

    pageView: {
        width: '90%',

    },

    titulo: {
        fontSize: 30
    },

    subtitulo: {
        fontSize: 20,
        
    },

    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        gap: 10,
        height: "20%",
        padding: 10
    },
})