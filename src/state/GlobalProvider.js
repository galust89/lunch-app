import React, { useContext, createContext, useEffect } from 'react';
import { reducer, initialState } from './reducer';
import useCustomReducer from './useCustomReducer';
import api from '../utils/api';
import {
  LOAD_ORDERS_AND_ACTIVITIES,
  LOAD_ORDERS_AND_ACTIVITIES_FAIL,
  LOAD_ORDERS_AND_ACTIVITIES_SUCCESS,
} from './types';

const GlobalStateProvider = createContext();
const GlobalDispatchProvider = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useCustomReducer(reducer, initialState, true);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: LOAD_ORDERS_AND_ACTIVITIES });
      try {
        const [orders, activities] = await Promise.all(
          api.orderLists.getAll(),
          api.outdoorActivities.getAll()
        );
        console.log(orders);
        console.log(activities);
        dispatch({ type: LOAD_ORDERS_AND_ACTIVITIES_SUCCESS }, activities, orders);
      } catch (err) {
        dispatch({ type: LOAD_ORDERS_AND_ACTIVITIES_FAIL }, err);
      }
    };
    load();
  }, []);

  return (
    <GlobalStateProvider.Provider value={state}>
      <GlobalDispatchProvider.Provider value={dispatch}>{children}</GlobalDispatchProvider.Provider>
    </GlobalStateProvider.Provider>
  );
};

const useGlobalStateContext = () => {
  const context = useContext(GlobalStateProvider);
  if (!context) {
    throw new Error('useTodoStateContext must be used within a TodoProvider');
  }
  return context;
};

const useGlobalDispatchContext = () => {
  const context = useContext(GlobalDispatchProvider);
  if (!context) {
    throw new Error('useTodoDispatchContext must be used within a TodoProvider');
  }
  return context;
};

export { useGlobalStateContext, useGlobalDispatchContext };

export default GlobalProvider;
