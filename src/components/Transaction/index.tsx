import React, {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import CustomText from '../CustomText';
import {styles} from './styles';

interface TransactionProps {
  data: any;
}
const Transaction: FunctionComponent<TransactionProps> = ({data}) => {
  const {amount} = data;

  const amountColor = +amount > 0 ? '#389300' : '#BF1E2E';
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.transactionContainer}>
        <View style={styles.amountContainer}>
          <CustomText style={[styles.amount, {color: amountColor}]}>
            {amount}
          </CustomText>
        </View>
        <View style={styles.row}>
          <View>
            <CustomText>{`Date: ${data.date}`}</CustomText>
          </View>
          <View>
            <CustomText>{`Branch: ${data.branch}`}</CustomText>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <CustomText>{`Ref: ${data.reference}`}</CustomText>
          </View>
          <View>
            <CustomText>{`Code: ${data.analysisCode}`}</CustomText>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <CustomText>{`Serial: ${data.serialNumber}`}</CustomText>
          </View>
          <View style={styles.colStart}>
            <CustomText>{`Party: ${data.otherParty}`}</CustomText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;
