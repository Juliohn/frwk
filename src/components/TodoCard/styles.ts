import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  status: true | false;
}

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(70)}px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(2)}px;
  margin-top: ${RFValue(2)}px;
  border-radius: 10px;
`;

export const Code = styled.Text`
  color: ${({theme}) => theme.colors.text_datails};
  font-size: ${RFValue(22)}px;
  margin: ${RFValue(5)}px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(17)}px;
  margin-top: ${RFValue(5)}px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Body = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${({theme}) => theme.colors.text_datails};
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const ContainerCode = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${RFValue(2)}px;
`;

export const ContainerBody = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-right: ${RFValue(10)}px;
  width: 60%;
  padding: ${RFValue(20)}px;
`;

export const ContainerIcon = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const Completed = styled(Icon)<Props>`
  font-size: ${RFValue(36)}px;
  margin-right: ${RFValue(12)}px;
  color: ${({theme, status}) =>
    status ? theme.colors.success : theme.colors.error};
`;
