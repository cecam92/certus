import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './style';
import Modal from 'react-native-modal';
import CustomText from '../CustomText';

interface FilterProps {
  isModalVisible: any;
  backdrop: () => void;
}

const Match: FunctionComponent<FilterProps> = ({isModalVisible, backdrop}) => {
  const handleSubmit = () => {
    backdrop();
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => {
        backdrop();
      }}>
      <View style={styles.modalContainer}>
        <View>
          <CustomText style={styles.modalTitle}>Match Settings</CustomText>
        </View>

        <Pressable style={styles.modalSubmit} onPress={handleSubmit}>
          <CustomText style={styles.submitText}>Match Data</CustomText>
        </Pressable>
      </View>
    </Modal>
  );
};

export default Match;
