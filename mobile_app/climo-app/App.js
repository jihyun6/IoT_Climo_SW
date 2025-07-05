import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userImg, setUserImg] = useState('');

  const registerUser = async () => {
    if (!username || !password || !email ||!userImg) {
      Alert.alert('입력 누락', '이름, 비밀번호, 이메일을 모두 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.45.56:5000/user/register', {
        username,
        password,
        email,
        userImg,
      });
      Alert.alert('결과', response.data.message);
    } catch (err) {
      console.error('등록 실패:', err);
      Alert.alert('에러', '등록에 실패했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>사용자 이름</Text>
      <TextInput
        style={styles.input}
        placeholder="홍길동"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>비밀번호</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>이메일</Text>
      <TextInput
        style={styles.input}
        placeholder="user@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>사진</Text>
      <TextInput
        style={styles.input}
        placeholder="파일첨부"
        value={userImg}
        onChangeText={setUserImg}
      />

      <Button title="사용자 등록" onPress={registerUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 60,
  },
  label: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
});
