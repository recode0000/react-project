import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


//Reduxはすべてのコンポーネントからアクセス可能なStore呼ばれる場所を作成します。
