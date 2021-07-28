import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 90%;
  height: ${RFValue(46)}px;
  background-color: ${({theme}) => theme.colors.sync};
  justify-content: center;
  align-items: center;
  margin: ${RFValue(16)}px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title_light};
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  text-align: center;
`;
