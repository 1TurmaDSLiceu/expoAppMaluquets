
import { Text, StyleSheet, View } from 'react-native'
import { router } from 'expo-router';

export default function App() {



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>App Maluquets</Text>

            <Text style={styles.subtitulo} onPress={() => {
					router.push('/danilo')
				}}>
                Ir para pagian danilo
            </Text>
            
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
        gap: 40
    },

    titulo: {
        fontSize: 30
    },

    subtitulo: {
        fontSize: 20
    }
})