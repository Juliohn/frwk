import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {PostDTO} from '../../dtos/PostDTO';

import {
  Container,
  ContainerCode,
  Code,
  Title,
  ContainerBody,
  Body,
} from './styles';

interface Props extends RectButtonProps {
  data: PostDTO;
}

export function PostCard({data}: Props) {
  return (
    <Container>
      <ContainerCode>
        <Code>{'#' + data.id}</Code>
      </ContainerCode>
      <ContainerBody>
        <Title>{data.title}</Title>
        <Body>{data.body}</Body>
      </ContainerBody>
    </Container>
  );
}
