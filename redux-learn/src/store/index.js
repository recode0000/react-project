import { configureStore } from "redux";

//データ保管場所のStoreの作成
// storeの中に共有を行うデータstateが保存される。

const initialState =  {
  count: 1,
};

const reducer = (state = initialState) => {
  return state;
};

const store = configureStore(reducer);


export default store;
