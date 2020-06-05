import {
  LOAD_ORDERS_AND_ACTIVITIES,
  LOAD_ORDERS_AND_ACTIVITIES_FAIL,
  LOAD_ORDERS_AND_ACTIVITIES_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  activities: [],
  orders: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_ORDERS_AND_ACTIVITIES:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ORDERS_AND_ACTIVITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: action.activities,
        orders: action.orders,
      };
    case LOAD_ORDERS_AND_ACTIVITIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
