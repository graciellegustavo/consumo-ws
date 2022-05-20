import { 
    Image, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const PrevisaoItem = ({previsao}) => {
    return (
        <Cartao
            meusEstilos={styles.cartao}>
            <View style={styles.tela}>
                <Image 
                    style={styles.imagem}
                    source={{ uri: `https://openweathermap.org/img/wn/${previsao?.previsao.weatherIcon}.png`}}
                />
                <Text style={styles.primeiraLinha}>cidade: {previsao?.cidade}</Text>
                <Text style={styles.primeiraLinha}>nascer do sol: {previsao?.previsao.sunrise}</Text>
                <Text style={styles.primeiraLinha}>pôr do sol: {previsao?.previsao.sunset.toLocaleTimeString("pt-br")}</Text>
                <Text style={styles.primeiraLinha}>sensação: {previsao?.previsao.feelsLike}ºC</Text>   
            </View>
        </Cartao>
  )
}


export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
})