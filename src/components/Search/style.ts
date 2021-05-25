import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: '#fefefe',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputSearch: {
    flex: 1,
    borderColor: '#888',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 13,
    height: 40,
    paddingHorizontal: 8,
    marginRight: 14,
  },
  filterButton: {
    marginVertical: 5,
    backgroundColor: '#dedede',
    borderRadius: 2,
  },
  orderSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
    height: 24,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
});
