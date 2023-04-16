import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Image, View, Text, TextInput, Slider, Switch, Button, StyleSheet } from 'react-native';

const BankForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [creditLimit, setCreditLimit] = useState(1000);
  const [isStudent, setIsStudent] = useState(false);

  const handleSubmit = () => {
    const data = {
      name,
      age,
      gender,
      creditLimit,
      isStudent,
    };

    onSubmit(data);
  };

  return (
    <View>
      <Text style={styles.Text} >Nome:</Text>
      <TextInput style={styles.TextInput} value={name} onChangeText={setName} />

      <Text style={styles.Text}>Idade:</Text>
      <TextInput style={styles.TextInput} value={age} onChangeText={setAge} keyboardType="numeric" />

      <Text style={styles.Text} >Sexo:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={value => setGender(value)}
      >
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Feminino" value="female" />
        <Picker.Item label="Outro" value="other" />
      </Picker>

      <Text style={styles.Text} >Limite de crédito:</Text>
      <Slider
        style={styles.slider}
        value={creditLimit}
        minimumValue={1000}
        maximumValue={10000}
        step={100}
        onValueChange={value => setCreditLimit(value)}
      />
      <Text style={styles.value} >R${creditLimit.toFixed(2)}</Text>

      <Text style={styles.Text} >Estudante:</Text>
      <Switch value={isStudent} onValueChange={value => setIsStudent(value)} />

      <Button title="ABRIR CONTA" onPress={handleSubmit} />
    </View>
  );
};

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = data => {
    setFormData(data);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.Text} >PROJETO DE INTERFACE DE BANCO</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 20 }}>
        <Image 
          style={{ width: 50, height: 50, marginRight: 15 }} 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/21/21012.png'}} 
        />
        <Text style={{ fontSize: 30}} >PÉRICLES</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        {formData ? (
          <View>
            <Text style={styles.Text} >Nome: {formData.name}</Text>
            <Text style={styles.Text} >Idade: {formData.age}</Text>
            <Text style={styles.Text} >Sexo: {formData.gender}</Text>
            <Text style={styles.Text} >Limite de crédito: R${formData.creditLimit.toFixed(2)}</Text>
            <Text style={styles.Text} >Estudante: {formData.isStudent ? 'Sim' : 'Não'}</Text>
          </View>
        ) : (
          <BankForm onSubmit={handleFormSubmit} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  Text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
  slider: {
    height: 40,
    marginVertical: 16,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default App;