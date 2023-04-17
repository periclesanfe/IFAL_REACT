import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

class TelaInicial extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
    <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        
        <ImageBackground
            style={styles.backgroundImage}
            resizeMode="cover"
            source={require('./assets/background.jpg')}
        >
            <View style={styles.contentContainer}>
            <Image
                style={styles.icon}
                source={{ uri: 'https://imagepng.org/wp-content/uploads/2018/02/escudo-flamengo-1.png' }}
            />
            
            <Text style={styles.title}>Flamengo</Text>
            <Text style={styles.subtitle}>O clube de futebol mais popular do Brasil</Text>
            <Text style={styles.description}>
                O Flamengo é um clube de futebol brasileiro sediado no Rio de Janeiro. Fundado em 1895, é um dos clubes de futebol mais antigos e tradicionais do Brasil e um dos mais populares também. O Flamengo possui uma vasta história de conquistas, sendo considerado um dos clubes mais vitoriosos do país.
            </Text>
            <Text style={styles.description}>
                O Flamengo conquistou diversos títulos importantes ao longo de sua história, incluindo o Campeonato Brasileiro, a Copa Libertadores da América e a Copa do Mundo de Clubes da FIFA. O clube é conhecido por sua torcida apaixonada, que é uma das maiores e mais fervorosas do país.
            </Text>
            <Text style={styles.description}>
                As cores do Flamengo são o vermelho e o preto, e seu mascote é o Urubu. O clube manda seus jogos no Estádio do Maracanã, um dos estádios de futebol mais famosos do mundo.
            </Text>

            <Image 
                style={styles.iconWinner} 
                source={{uri: 'https://odia.ig.com.br/_midias/jpg/2021/08/11/1200x750/1_6d58fbe94ae9da92bef30fcfda71582458a5afebw-22699256.jpg'}}
            />

            <Text style={styles.subtitle}>Maior Vitorioso do Brasil</Text>
                <Text style={styles.description}>
                    Flamengo nos ultimos anos vem se destacando no cenário nacional e internacional, conquistando diversos títulos importantes, como o Campeonato Brasileiro, a Copa Libertadores da América e a Copa do Mundo de Clubes da FIFA.
                </Text>
            
            <TouchableOpacity style={styles.buttomContainer} onPress={() => navigation.navigate('HISTORIA')}>
                <Text style={styles.buttonText}>LEIA MAIS SOBRE O FLAMENGO</Text>
            </TouchableOpacity>

            <Image 
                style={styles.iconTitles} 
                source={{uri: 'https://pbs.twimg.com/media/EytN0R4WgBQm7Qo.jpg'}}
            />
            
            </View>

        </ImageBackground>
    </ScrollView>
    );
  };
};
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
        color: '#FFF',
    },
    description: {
        fontSize: 14,
        marginBottom: 16,
        color: '#FFF',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      height: 1000,
    },
    contentContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 100,
        marginBottom: 16,
    },
    iconWinner: {
        margin: 20,
        width: 400,
        height: 200,
        marginBottom: 16,
    },
    iconTitles: {
        margin: 20,
        width: 400,
        height: 400,
        marginBottom: 16,
    },
    buttomContainer: {
        margin: 10,
        backgroundColor: 'black',
        height: 35,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'red', 
        backgroundColor: '#0f0f0f', 
        borderRadius: 50,
        padding: 5,
        fontWeight: 'bold',
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1}
  });

export default TelaInicial;