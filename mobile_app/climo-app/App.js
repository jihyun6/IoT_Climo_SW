import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [faceImage, setFaceImage] = useState('');

  const registerUser = async () => {
    if (!username || !faceImage) {
      Alert.alert('입력 누락', '이름과 이미지 URL을 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.45.171:5000/api/user/register', {
        username,
        face_image: faceImage,
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

      <Text style={styles.label}>이미지 URL</Text>
      <TextInput
        style={styles.input}
        placeholder="https://example.com/image.jpg"
        value={faceImage}
        onChangeText={setFaceImage}
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
  },
});
