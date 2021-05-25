/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import CustomText from '../CustomText';
import Icon from 'react-native-vector-icons/Entypo';
interface AccountProps {
  data: {
    account: string;
    movements: {
      amount: string;
      date: string;
      otherParty: string;
      particulars: string;
      analysisCode: string;
      reference: string;
      serialNumber: string;
      branch: string;
      notes: boolean;
    }[];
  };
  navigation: any;
}
const Account: FunctionComponent<AccountProps> = ({data, navigation}) => {
  const {movements} = data;
  const creditsValues = movements.filter(item => +item.amount > 0);
  const debitsValues = movements.filter(item => +item.amount < 0);

  const credit = creditsValues
    .map(item => Math.abs(+item.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const debit = debitsValues
    .map(item => Math.abs(+item.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const handlePress = (item: any, cr: number, deb: number) => {
    navigation.navigate('Account', {item, cr, deb});
  };
  return (
    <Pressable
      style={styles.accountContainer}
      onPress={() => {
        handlePress(data, credit, debit);
      }}>
      <CustomText style={styles.accountNumber}>{data.account}</CustomText>
      <View style={styles.matchedContainer}>
        <CustomText>Balance</CustomText>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceDetails}>
            <Icon name="circle-with-plus" size={16} color="#7DC36C" />
            <CustomText> Credits</CustomText>
          </View>
          <View>
            <CustomText style={[styles.balanceText, {color: '#389300'}]}>
              {`+${credit.toFixed(2)}`}
            </CustomText>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceDetails}>
            <Icon name="circle-with-minus" size={16} color="#DB8B93" />
            <CustomText> Debits</CustomText>
          </View>
          <View>
            <CustomText style={[styles.balanceText, {color: '#BF1E2E'}]}>
              {`-${debit.toFixed(2)}`}
            </CustomText>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <CustomText> Net amount</CustomText>
          <CustomText style={[styles.balanceText, {color: '#FEA178'}]}>
            {(credit - debit).toFixed(2)}
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default Account;
