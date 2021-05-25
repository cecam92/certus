import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  transactionContainer: {
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#fefefe',
    borderRadius: 5,
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 3,
  },

  colStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  amount: {
    fontSize: 18,
    alignSelf: 'center',
  },
  amountContainer: {
    width: '100%',
    marginVertical: 10,
  },
});
