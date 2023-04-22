import './App.css';
import React from "react";
import HelloMessageFunction from "./HelloMessageFunction";

// コンポーネントの書き方は主に以下２つ


// // classコンポーネント（少し前までこの書き方）
// class HelloMessageClass extends React.Component {
//   render() {
//     return <div>Classコンポーネントの書き方！</div>
//   }
// }

// // 関数コンポーネント（現在推奨書き方）
// const HelloMessageFunction = () => {
//   return <div>関数コンポーネントでの書き方！</div>;
// };

export default function App() {
  return (
    <>
      {/* <HelloMessageClass /> */}
      <HelloMessageFunction />
    </>
  );
}

//JSX記法