import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    marginTop: 200,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  modalSubmit: {
    color: '#ddd',
    width: 100,
    height: 40,
    backgroundColor: '#0A3770',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 30,
  },
  submitText: {
    color: '#fefefe',
    fontWeight: 'bold',
  },
  modalOption: {
    width: 70,
    height: 40,
    backgroundColor: '#dedede',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 30,
    borderWidth: 1,
    borderColor: '#0A3770',
  },
  optionSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
