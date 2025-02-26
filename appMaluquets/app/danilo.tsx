import { Text, StyleSheet, View } from 'react-native';
import { useBatteryLevel, usePowerState } from 'expo-battery';
import PagerView from 'react-native-pager-view';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import LinearGradient from 'expo-linear-gradient';

export default function Danilo() {
    const { lowPowerMode, batteryLevel, batteryState } = usePowerState();

    let buttonColor = 'green';
    if (batteryLevel > 0.6) {
        buttonColor = 'green';
    } else if (batteryLevel <= 0.60 && batteryLevel > 0.25) {
        buttonColor = 'yellow';
    } else {
        buttonColor = 'red';
    }

    return (
        <LinearGradient colors={['#01001f', '#010133']} style={styles.container}>
            <Text style={styles.titulo}>Página do Dan</Text>

            <View style={styles.pageView}>
                <PagerView style={styles.container} initialPage={0}>
                    <View style={styles.page} key="1">
                        <Text style={styles.subtitulo}>Nível Atual de Bateria</Text>
                        <View style={{ ...styles.batteryLevel, backgroundColor: buttonColor }}>
                            <Text style={styles.batteryText}>{(batteryLevel * 100).toFixed(0)}%</Text>
                        </View>
                    </View>
                    <View style={styles.page} key="2">
                        <Text style={styles.subtitulo}>Modo Pouca Energia Ligado?</Text>
                        <FontAwesome name={lowPowerMode ? "toggle-on" : "toggle-off"} size={50} color="white" />
                    </View>
                    <View style={styles.page} key="3">
                        <Text style={styles.subtitulo}>Estado da Bateria</Text>
                        {batteryState !== null && (
                            <View style={styles.batteryState}>
                                {batteryState === 0 && (
                                    <>
                                        <MaterialIcons name="battery-unknown" size={50} color="white" />
                                        <Text style={styles.subtitulo}>Desconhecido</Text>
                                    </>
                                )}
                                {batteryState === 1 && (
                                    <>
                                        <MaterialIcons name="battery-4-bar" size={50} color="white" />
                                        <Text style={styles.subtitulo}>Desplugado</Text>
                                    </>
                                )}
                                {batteryState === 2 && (
                                    <>
                                        <MaterialIcons name="battery-charging-full" size={50} color="white" />
                                        <Text style={styles.subtitulo}>Carregando</Text>
                                    </>
                                )}
                                {batteryState === 3 && (
                                    <>
                                        <MaterialIcons name="battery-full" size={50} color="white" />
                                        <Text style={styles.subtitulo}>Completa</Text>
                                    </>
                                )}
                            </View>
                        )}
                    </View>
                </PagerView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        gap: 20,
    },
    pageView: {
        width: '90%',
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
    },
    batteryLevel: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: '20%',
        height: 100,
        borderColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    batteryText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    batteryState: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010133',
        gap: 10,
        height: "40%",
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
});
