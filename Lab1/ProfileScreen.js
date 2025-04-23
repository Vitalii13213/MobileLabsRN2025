import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
    repeat: '',
  });

  const handleChange = (field, val) => {
    setForm({ ...form, [field]: val });
  };

  const handleSubmit = () => {
    if (form.pass !== form.repeat) {
      alert('Паролі не збігаються!');
    } else {
      alert(`Вітаємо, ${form.fname} ${form.lname}`);
    }
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.heading}>Мій акаунт</Text>
      <TextInput style={styles.input} placeholder="Ім’я" onChangeText={v => handleChange('fname', v)} />
      <TextInput style={styles.input} placeholder="Прізвище" onChangeText={v => handleChange('lname', v)} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={v => handleChange('email', v)} />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry onChangeText={v => handleChange('pass', v)} />
      <TextInput style={styles.input} placeholder="Повторіть пароль" secureTextEntry onChangeText={v => handleChange('repeat', v)} />
      <Button title="Зберегти" onPress={handleSubmit} color="#ff6600" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingVertical: 10,
    marginBottom: 15,
  },
});
