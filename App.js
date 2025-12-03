import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Atenção", "O botão foi pressionado com sucesso!", [
      { text: "OK" }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Text style={styles.title}>Meu Layout Simples</Text>
        
        <Text style={styles.paragraph}>
          Este é um parágrafo de exemplo criado usando React Native com Expo.
          Os estilos estão definidos no objeto StyleSheet abaixo.
        </Text>

        <Button 
          title="Clique aqui"
          color="#0D47A1"
          onPress={handlePress}
        />
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#0D47A1',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
});