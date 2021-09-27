import React, {useState} from 'react';
import {View} from 'react-native';
import FAB from '../../shared/components/fab';
import ContentInputModal from '../../shared/components/modal';
import styles from './Home.style';
const Home = () => {
  /* states */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleModalMessage = content => {
    handleToggleModal();
    console.log(content);
  };
  return (
    <View style={styles.container}>
      <View style={styles.fab_container}>
        <FAB icon="done" onPress={handleToggleModal} />
      </View>
      <ContentInputModal
        isVisible={isModalVisible}
        onClose={handleToggleModal}
        onSend={handleModalMessage}
      />
    </View>
  );
};

export default Home;
