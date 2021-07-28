import React, {useEffect, useState, useCallback} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ButtonSync from '../../components/ButtonSync';

import {Container, List} from './styles';

import {TodoDTO} from '../../dtos/TodoDTO';
import {TodoCard} from '../../components/TodoCard';

import {api} from '../../services/api';

export default function Posts() {
  const dataKey = '@frwk:todos';
  const [todos, setTodos] = useState<TodoDTO[]>([]);
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
        setTodos(JSON.parse(data!));
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
      const response = await api.get('/todos');
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
      <Header title="To-Do's" sync={sync} callBack={handleLoadDataWeb} />

      {sync === true ? (
        <ButtonSync
          title="Sync To-Do's from web"
          callBack={handleLoadDataWeb}
        />
      ) : loading === true ? (
        <Loading />
      ) : (
        <List
          data={todos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <TodoCard data={item} status={item.completed} />
          )}
        />
      )}
    </Container>
  );
}
