import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import Button from '../button';
import Modal from 'react-native-modal';
import styles from './ContentInputModal.style';
const ContentInputModal = ({isVisible, onClose, onSend}) => {
  /* states */
  const [text, setText] = useState(null);
  function handleSend() {
    if (!text) {
      return Alert.alert('Hata!', 'Lütfen ilgili alanı doldurunuz!');
    }
    onSend(text);
    setText(null);
  }
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="hadi ne duruyorsun, yaz bir şeyler!"
            onChangeText={setText}
            multiline={true}
          />
        </View>
        <Button text="Paylaş" handlePress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
