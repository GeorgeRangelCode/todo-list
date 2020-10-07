export const SAVE_STATE_LOCALSTORAGE = 'SAVE_STATE_LOCALSTORAGE';

export const SaveStateLocalStorage = state => ({
  type: SAVE_STATE_LOCALSTORAGE,
  payload: { state },
});
