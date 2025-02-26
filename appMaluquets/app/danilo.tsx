import { Text, StyleSheet, View, Button } from 'react-native'
import { useBatteryLevel, usePowerState } from 'expo-battery';
import PagerView from 'react-native-pager-view';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';

export default function Danilo() {
    const { lowPowerMode, batteryLevel, batteryState } = usePowerState();

    let buttonColor = 'green';
    if (batteryLevel > 0.6) {
        buttonColor = 'green';
    } else if( batteryLevel <= 0.60 && batteryLevel > 0.25) {
        buttonColor = 'yellow';
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
                        <View style={{ ...styles.batteryLevel, backgroundColor: `${buttonColor}` }}>
                            <Text style={styles.subtitulo}>{batteryLevel * 100}%</Text>
                        </View>
                    </View>
                    <View style={styles.page} key="2">
                        <Text >Modo pouca energia ligado?</Text>
                        {
                            lowPowerMode
                                ?
                                <FontAwesome name="toggle-on" size={50} color="white" />
                                :
                                <FontAwesome name="toggle-on" size={50} color="white" />
                        }
                    </View>
                    <View style={styles.page} key="3">
                        <Text style={styles.subtitulo}>Como esta o estado da bateria?</Text>
                        {batteryState === 0 ?
                            <View style={styles.batteryState}>
                                <MaterialIcons name="battery-unknown" size={50} color="white" />
                                <Text style={styles.subtitulo}>Desconhecido</Text>
                            </View>
                            :
                            null
                        }
                        {batteryState === 1 ?
                            <View style={styles.batteryState}>
                                <MaterialIcons name="battery-4-bar" size={50} color="white" />
                                <Text style={styles.subtitulo}>Desplugado</Text>
                            </View>
                            :
                            null
                        }
                        {batteryState === 2 ?
                            <View style={styles.batteryState}>
                                <MaterialIcons name="battery-charging-full" size={50} color="white" />
                                <Text style={styles.subtitulo}>Carregando</Text>
                            </View>
                            :
                            null
                        }
                        {batteryState === 3 ?
                            <View style={styles.batteryState}>
                                <MaterialIcons name="battery-full" size={50} color="white" />
                                <Text style={styles.subtitulo}>Completa</Text>
                            </View>
                            :
                            null
                        }
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
        backgroundColor: '#01001f',
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
    },

    batteryLevel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: '20%',
        height: 100,
        borderColor: 'white',

    },

    pageView: {
        width: '90%',

    },

    titulo: {
        fontSize: 30,
        color:'white'
    },

    subtitulo: {
        fontSize: 20,
        color:'white'

    },
    
    batteryState: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010133',
        gap: 10,
        height: "40%",
        padding: 10
    },
})