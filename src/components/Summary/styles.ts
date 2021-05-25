import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  summaryContainer: {
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#fefefe',
    borderRadius: 5,
    padding: 15,
  },
  movementsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  movements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  values: {
    fontSize: 20,
  },
  valuesDiff: {
    fontSize: 20,
    color: '#FEA178',
    alignSelf: 'center',
    marginTop: 5,
  },
});
