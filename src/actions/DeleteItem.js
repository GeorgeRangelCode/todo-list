export const DELETE_ITEM = 'DELETE_ITEM';

export const DeleteItem = selectedItemId => ({
  type: DELETE_ITEM,
  payload: { id: selectedItemId },
});
