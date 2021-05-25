import React, {FunctionComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import AccountList from '../../components/AccountList';
import {styles} from './style';
interface HomeScreenProps {
  navigation: any;
}
const HomeScreen: FunctionComponent<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <AccountList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
