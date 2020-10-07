export const ITEM_COMPLETION = 'ITEM_COMPLETION';

export const ItemCompletion = modifiedItem => ({
  type: ITEM_COMPLETION,
  payload: { modifiedItem },
});
