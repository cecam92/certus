import React, {FunctionComponent, useState, useMemo} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Transaction from '../../components/Transaction';
import Search from '../../components/Search';
import Summary from '../../components/Summary';
import {styles} from './style';
interface AccountScreenProps {
  route: {
    params: {
      item: any;
      cr: number;
      deb: number;
    };
  };
}
// movements: [
//   {
//     amount: '-1430.66',
//     date: '08/05/2013',
//     otherParty: '07-May-2012-',
//     particulars: 'RETAIL_DR_A',
//     analysisCode: 'ASM_TC42',
//     reference: '07/05/2012',
//     serialNumber: '0000000000',
//     branch: '06-0580',
//     notes: true,
//   },

const AccountScreen: FunctionComponent<AccountScreenProps> = props => {
  const {item, cr, deb} = props.route.params;
  const {account, movements} = item;
  const [searchvalue, setSearchValue] = useState('');
  const [ascend, setAscend] = useState(false);
  const [descend, setDescend] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const orderData = (filtered: any[]) => {
    const data = [...filtered];

    const renderData = descend
      ? data.sort((a, b) => +a.amount - +b.amount)
      : ascend
      ? data.sort((a, b) => +b.amount - +a.amount)
      : movements;
    return renderData;
  };

  const filteredData = useMemo(() => {
    const filterArray = [...movements];
    const orderedTransactions = orderData(filterArray);

    const filterAmount = orderedTransactions.filter(({amount}: any) =>
      amount.toUpperCase().includes(searchvalue.toUpperCase()),
    );

    const filtered = [...filterAmount];

    return filtered;
  }, [movements, orderData, searchvalue]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Summary account={account} credit={cr} debit={deb} />
        <Search
          onSearch={setSearchValue}
          ascend={() => {
            setDescend(false);
            setAscend(true);
          }}
          descend={() => {
            setDescend(true);
            setAscend(false);
          }}
          reset={() => {
            setDescend(false);
            setAscend(false);
          }}
        />

        <FlatList
          data={filteredData}
          renderItem={({item: transactionItem}) => (
            <Transaction data={transactionItem} />
          )}
          keyExtractor={({ammount: transactionItem}, index) =>
            `${transactionItem}-${index}`
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
