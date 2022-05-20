import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  Button,
  StyleSheet, 
  Text,
  TextInput, 
  View,
  FlatList,
  ScrollView,
 } from 'react-native'; 

import PrevisaoItem from './components/PrevisaoItem'

export default function App() {
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }

  const obterPrevisoes = () => {
    const url = encodeURI(`${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&appid=${APPID}&lat=${latitude}&lon=${longitude}&units=${MEDIDA}`)
    console.log(url)
    fetch(url)
    .then (response => response.json())
    .then((dados) => {
      let clima = {
          sunrise: new Date(json.current.sunrise * 1000),
          sunset: new Date(json.current.sunset * 1000),
          weatherIcon: json.current.weather[0].icon,
          feelsLike: json.current.feels_like
      }
      setPrevisoes(clima)
    })
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View>
        <TextInput 
          placeholder='cidade'
          style = {styles.cidadeTextInput}
          onChangeText={capturarCidade}
          value = {cidade}
        />
        <Button
          disabled={cidade.length === 0}
          title='Procurar'
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList 
        data={previsoes}
        renderItem={ p => (
            <PrevisaoItem previsao={p.item}/>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40,
    marginBottom: 80
  },
  cidadeTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  }
});