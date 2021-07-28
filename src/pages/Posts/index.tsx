import React, {useEffect, useState, useCallback} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ButtonSync from '../../components/ButtonSync';

import {Container, List} from './styles';

import {PostDTO} from '../../dtos/PostDTO';
import {PostCard} from '../../components/PostCard';

import {api} from '../../services/api';

export default function Posts() {
  const dataKey = '@frwk:posts';
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    resetData();
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  async function loadData() {
    try {
      const data = await AsyncStorage.getItem(dataKey);
      if (data == null) {
        setSync(true);
      } else {
        setPosts(JSON.parse(data!));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLoadDataWeb() {
    try {
      setSync(false);
      setLoading(true);
      const response = await api.get('/posts');
      const {data} = response;
      resetData();
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      loadData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function resetData() {
    try {
      await AsyncStorage.removeItem(dataKey);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Posts" sync={sync} callBack={handleLoadDataWeb} />

      {sync === true ? (
        <ButtonSync title="Sync posts from web" callBack={handleLoadDataWeb} />
      ) : loading === true ? (
        <Loading />
      ) : (
        <List
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <PostCard data={item} />}
        />
      )}
    </Container>
  );
}
