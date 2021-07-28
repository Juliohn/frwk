import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {TodoDTO} from '../../dtos/TodoDTO';

import {
  Container,
  ContainerCode,
  Code,
  Title,
  ContainerBody,
  ContainerIcon,
  Completed,
} from './styles';

interface Props extends RectButtonProps {
  data: TodoDTO;
  status: boolean;
}

export function TodoCard({data, status}: Props) {
  return (
    <Container>
      <ContainerCode>
        <Code>{'#' + data.id}</Code>
      </ContainerCode>
      <ContainerBody>
        <Title>{data.title}</Title>
      </ContainerBody>
      <ContainerIcon>
        <Completed
          name={status ? 'check-box-outline' : 'close-box-outline'}
          color={'#000'}
          status={status}
        />
      </ContainerIcon>
    </Container>
  );
}
