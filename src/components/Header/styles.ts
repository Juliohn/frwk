import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: center;
  padding-top: ${RFValue(46)}px;
  background-color: ${({theme}) => theme.colors.active};
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.title_light};
  font-weight: bold;
`;

export const ContainerResetButton = styled(BorderlessButton)`
  justify-content: flex-end;
  left: ${RFValue(100)}px;
`;
