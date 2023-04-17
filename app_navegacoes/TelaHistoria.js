import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

class Historia extends React.Component {
    
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <ImageBackground
            style={styles.backgroundImage}
            resizeMode="cover"
            source={require('./assets/background.jpg')}
        >

        <TouchableOpacity style={styles.buttomContainer} onPress={() => navigation.navigate('FLAMENGO')}>
            <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        <Text style={styles.title}>O Clube de Regatas do Flamengo </Text>
        <Text style={styles.subtitle}>Origem</Text>
        <Text style={styles.description}>
          Em fins do século XIX o remo dominava o Rio de Janeiro. O futebol começava apenas a aparecer em alguns clubes, mas ainda era olhado com certo temor, pois não estava sendo recebido com entusiasmo pela sociedade carioca. A criação de um grupo organizado com o objetivo de disputar competições de remo com clubes de outros bairros surgiu entre jovens do bairro do Flamengo, no Café Lamas, no Largo do Machado.
        </Text>
        <Text style={styles.description}>  
          Nestor de Barros, José Agostinho Pereira da Cunha, Felisberto Laport, Augusto Lopes, Mário Spindola e José Félix da Cunha Meneses compraram um barco, chamaram-no de "Pherusa" e o reformaram.
        </Text>
        <Text style={styles.description}>  
          Em 6 de outubro de 1895 os antes citados, juntamente com Maurício Rodrigues Pereira e Joaquim Bahia, saíram da Ponta do Caju, e com o tempo desfavorável, foram rumo à Praia do Flamengo, mas o vento fez o barco virar. Bahia nadou até a praia para conseguir ajuda e chegou algumas horas depois, mas a chuva parou rapidamente e outro barco, o "Leal", resgatou os jovens e o que tinha restado da Pherusa. Então foi iniciada uma nova reforma da embarcação, mas ela foi roubada e desapareceu.
        </Text>
        <Text style={styles.subtitle}>Fundação</Text>
        <Text style={styles.description}>
        Um novo barco foi comprado e recebeu o nome de "Scyra". Na noite de 17 de novembro de 1895, muita gente estava em um dos corredores da casa número 22 da Praia do Flamengo, onde Nestor de Barros morava num dos quartos. Lá, há muito tempo, já haviam abrigado "Pherusa", e agora guardavam "Scyra". A reunião teve por objetivo a fundação do Grupo de Regatas do Flamengo. Naquela mesma noite foi eleita a primeira diretoria:
        </Text>
        <Text style={styles.description}>Domingos Marques de Azevedo; presidente</Text>
        <Text style={styles.description}>Francisco Lucci Colas; vice-presidente</Text>
        <Text style={styles.description}>Nestor de Barros; secretário</Text>
        <Text style={styles.description}>Felisberto Cardoso Laport; tesoureiro</Text>
        <Text style={styles.description}>
        As cores iniciais foram azul e ouro em listras horizontais bem largas, entretanto, em 1898, por proposta de Nestor de Barros, houve mudança para as atuais: vermelho e preto.
        </Text>
        <Text style={styles.description}>Novos barcos foram sendo comprados e o Mengo começou a destacar-se nas competições. Na I Regata do Campeonato Náutico do Brasil, no dia 5 de junho de 1898, conquistou a sua primeira vitória, com "Irerê", uma baleeira a dois remos. Anteriormente o Flamengo só havia obtido colocações secundárias e muitos segundos lugares, o que lhe valeu, inclusive, o apelido de "Clube de Bronze". Em 1902, diante de seu crescimento, houve a transformação para Clube de Regatas do Flamengo.
        </Text>
        <Text style={styles.subtitle}>O Início no Futebol</Text>
        <Text style={styles.description}>
        A partir de 1902 o remo passou a dividir com o futebol a preferência popular. Assim, os associados do Flamengo tornaram-se sócios também do Fluminense para acompanhar o futebol, e os do clube das Laranjeiras vieram para o rubro-negro a fim de acompanhar as regatas. Alberto Borgerth representava bem o exemplo, pois pela manhã remava pelo Flamengo e à tarde jogava pelo seu clube, o Fluminense.
        </Text>

        <Text style={styles.title}>TÍTULOS</Text>

        <Text style={styles.subtitle}>HONORÁRIOS</Text>
        <Text style={styles.description}>Tríplice Coroa	1981 e 2019</Text>
        <Text style={styles.description}>Quádrupla Coroa	2020</Text>
        <Text style={styles.description}>9º Maior Clube do Mundo pelo Século XX da FIFA	2000</Text>
        <Text style={styles.description}>1º Melhor Clube do Mundo	2022</Text>
        <Text style={styles.description}>Melhor Clube da América do Sul e 4º Melhor no Ranking Mundial Condecoração outorgada em 2020 pela IFFHS, abrange o período de 1° de janeiro de 2011 a 31 de janeiro de 2020.</Text>

        <Text style={styles.subtitle}>MUNDIAIS</Text>
        <Text style={styles.description}>Copa Intercontinental	1	1981</Text>

        <Text style={styles.subtitle}>CONTINENTAIS</Text>
        <Text style={styles.description}>Copa Libertadores da América	3	1981, 2019 e 2022</Text>
        <Text style={styles.description}>Recopa Sul-Americana	1	2020</Text>
        <Text style={styles.description}>Copa de Ouro Nicolás Leoz	1	1996</Text>
        <Text style={styles.description}>Copa Mercosul	1	1999</Text>

        <Text style={styles.subtitle}>NACIONAIS</Text>
        <Text style={styles.description}>Campeonato Brasileiro	7	1980, 1982, 1983, 1992, 2009, 2019 e 2020</Text>
        <Text style={styles.description}>Copa do Brasil	4	1990, 2006, 2013 e 2022</Text>
        <Text style={styles.description}>Supercopa do Brasil	2	2020 e 2021</Text>
        <Text style={styles.description}>Copa dos Campeões	1	2001</Text>

        <Text style={styles.subtitle}>INTERESTADUAIS</Text>
        <Text style={styles.description}>Torneio Rio-São Paulo	1	1961</Text>
        <Text style={styles.description}>Taça dos Campeões Rio-São Paulo	1	1955</Text>

        <Text style={styles.subtitle}>ESTADUAIS</Text>
        <Text style={styles.description}>Campeonato Carioca	37	1914, 1915, 1920, 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979, 1981, 1986, 1991, 1996, 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2020 e 2021</Text>
        <Text style={styles.description}>Taça Guanabara	23	1970, 1972, 1973, 1978, 1979, 1980, 1981, 1982, 1984, 1988, 1989, 1995, 1996, 1999, 2001, 2004, 2007, 2008, 2011, 2014, 2018, 2020 e 2021</Text>
        <Text style={styles.description}>Taça Rio	9	1983, 1985, 1986, 1991, 1996, 2000, 2009, 2011 e 2019</Text>
        <Text style={styles.description}>Copa Rio	1	1991</Text>
        <Text style={styles.description}>Torneio Início	6	1920, 1922, 1946, 1951, 1952 e 1959</Text>

        <Image
          style={styles.titulos0}
          resizeMode="cover"
          source={require('./assets/titulos0.jpg')}></Image>

        <TouchableOpacity style={styles.buttomContainer} onPress={() => navigation.navigate('FLAMENGO')}>
            <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        </ImageBackground>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
  },
  buttomContainer: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'black',
    height: 32,
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
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    color: '#FFF',
    textAlign: 'justify',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 16,
  },
  titulos0: {
    width: '100%',
    height: 60,
  },
});

export default Historia;