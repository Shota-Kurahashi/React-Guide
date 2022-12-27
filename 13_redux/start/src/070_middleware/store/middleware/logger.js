// Redux Middleware
export const logger = (store) => {
  return (next) => {
    return (action) => {
      // 全てのdispatchで行われる処理
      // storeはaction前の状態
      // （store.getState()でステートを取得）
      console.log(store.getState(), action);
      next(action);
      // storeはaction後の状態
      console.log(store.getState());
    };
  };
};
