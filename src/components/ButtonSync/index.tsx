import React from 'react';
import {TextProps, Alert} from 'react-native';
import {Container, Title} from './styles';

import {useNetInfo} from '@react-native-community/netinfo';

interface Props extends TextProps {
  title: string;
  callBack: () => void;
}

export default function ButtonSync({title, callBack}: Props) {
  const netInfo = useNetInfo();

  async function validate() {
    if (!netInfo.isConnected) {
      Alert.alert(
        'Fail',
        'You do not have connection with internet. please verify',
        [
          {
            text: 'Ok',
            onPress: () => {},
            style: 'cancel',
          },
        ],
      );

      return;
    }

    callBack();
  }

  return (
    <Container onPress={validate}>
      <Title>{title}</Title>
    </Container>
  );
}
