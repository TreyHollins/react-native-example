import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

function Contact({navigation}) {
  const [formName, setFormName] = useState('Enter Name');
  const [formEmail, setFormEmail] = useState('Enter Email');
  const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
  const [formMessage, setFormMessage] = useState(
    'Let us know what you are thinking',
  );

  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Please enter info in all required fields');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={name => setFormName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={email => setFormEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Phone:</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={phone => setFormPhoneNumber(phone)}
        value={formPhoneNumber}
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitxtinput}
        onChangeText={message => setFormMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />

      <Button title="Contact Us" color="#708090" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
  },
  txtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '80%',
    paddingBottom: 15,
  },
  multitxtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '90%',
    height: 120,
    marginBottom: 50,
  },
  labels: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Contact;
