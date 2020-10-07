export const EDIT_ITEM = 'EDIT_ITEM';

export const EditItem = modifiedItem => ({
  type: EDIT_ITEM,
  payload: { modifiedItem },
});
