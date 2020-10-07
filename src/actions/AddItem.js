export const ADD_ITEM = 'ADD_ITEM';

export const AddItem = itemValue => ({
  type: ADD_ITEM,
  payload: { value: itemValue },
});
