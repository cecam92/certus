import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {CustomText} from '../CustomText';
import Icon from 'react-native-vector-icons/Entypo';

interface SummaryProps {
  account: string;
  debit: number;
  credit: number;
}
const Summary = ({account, debit, credit}: SummaryProps) => {
  return (
    <View style={styles.summaryContainer}>
      <CustomText style={styles.account}>{account}</CustomText>
      <View style={styles.movementsContainer}>
        <View style={styles.movements}>
          <Icon name="circle-with-plus" size={20} color="#7DC36C" />
          <CustomText style={styles.values}>{`${credit.toFixed(
            2,
          )}`}</CustomText>
        </View>
        <View style={styles.movements}>
          <Icon name="circle-with-minus" size={20} color="#DB8B93" />
          <CustomText style={styles.values}>{`${debit.toFixed(2)}`}</CustomText>
        </View>
      </View>
      <CustomText style={styles.valuesDiff}>{`${credit - debit}`}</CustomText>
    </View>
  );
};

export default Summary;
