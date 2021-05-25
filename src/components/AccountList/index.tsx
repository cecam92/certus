import React from 'react';
import {View, FlatList} from 'react-native';
import Account from '../Account';

import {data} from '../../api/data';

const AccountList = ({navigation}: any) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Account data={item} navigation={navigation} />}
        keyExtractor={({account}) => account}
      />
    </View>
  );
};

export default AccountList;
