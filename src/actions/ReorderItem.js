export const REORDER_ITEM = 'REORDER_ITEM';

export const ReorderItem = (initialPosition, newPosition) => ({
  type: REORDER_ITEM,
  payload: { initialPosition, newPosition },
});
