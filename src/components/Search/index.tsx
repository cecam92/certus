import React, {FunctionComponent, useState} from 'react';
import {View, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {CustomText} from '../CustomText';
import Match from '../Match';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface SearchProps {
  onSearch: any;
  ascend: any;
  descend: any;
  reset: any;
}
const Search: FunctionComponent<SearchProps> = ({
  onSearch,
  ascend,
  descend,
  reset,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleAscend = () => {
    ascend();
  };
  const handleDescend = () => {
    descend();
  };
  const handleReset = () => {
    reset();
  };
  return (
    <>
      <View style={styles.filterContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearch}
            onChangeText={onSearch}
            placeholder={'Search'}
          />
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            <Icon name="filter-variant" size={30} style={styles.filterButton} />
          </Pressable>
        </View>
        <View style={styles.orderSection}>
          <Pressable onPress={handleAscend}>
            <CustomText>Ascending</CustomText>
          </Pressable>
          <Pressable onPress={handleDescend}>
            <CustomText>Descending</CustomText>
          </Pressable>
          <Pressable onPress={handleReset}>
            <CustomText>Reset</CustomText>
          </Pressable>
        </View>
      </View>
      <Match
        isModalVisible={isVisible}
        backdrop={() => {
          setIsVisible(!isVisible);
        }}
      />
    </>
  );
};

export default Search;
