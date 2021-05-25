import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {styles} from './style';
interface CustomTextProps {
  style?: any;
  children: string;
}

export const CustomText: FunctionComponent<CustomTextProps> = props => {
  return <Text style={[styles.textColor, props.style]}>{props.children}</Text>;
};

export default CustomText;
