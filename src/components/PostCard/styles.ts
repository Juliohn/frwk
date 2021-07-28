import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(80)}px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  justify-content: flex-start;
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
  align-items: flex-start;
  margin-right: ${RFValue(10)}px;
  max-width: 80%;
  padding-right: ${RFValue(10)}px;
`;
