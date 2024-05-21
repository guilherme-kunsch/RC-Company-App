import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-elements';
import Logo from '../assets/favicon.png';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Card } from '../components/Card';
import { firestore } from '../services/configFirebase';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, 'dadosPlantacao')
        );
        const newDataPoints = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDataPoints(newDataPoints);
      } catch (error) {
        console.error('Erro ao buscar no firestore', error);
      }
    }
    fetchData();
  }, []);

  const dataPoint = dataPoints.length > 0 ? dataPoints[0] : {};

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <View style={styles.title}>
          <Image width={20} height={20} source={Logo} />
          <Text h3 style={{ color: 'black' }}>
            RC Company
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Card title="Bomba D'água" label={dataPoint.ledStatus} />
          <Card title="Temperatura" label={dataPoint.temperatura} />
          <Card title="Temperatura Ar" label={dataPoint.temperaturaAr} />
          <Card title="Umidade Ar" label={dataPoint.umidadeAr} />
          <Card title="Umidade" label={dataPoint.umidade} />
          <Card title="Evapotranspiração" label="3.75" />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.footer}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C4A6E',
    flex: 1,
  },
  header: {
    backgroundColor: '#4682B4',
    padding: 32,
  },
  title: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 32,
  },
  content: {
    justifyContent: 'space-between',
    marginTop: 60,
    gap: 10,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
