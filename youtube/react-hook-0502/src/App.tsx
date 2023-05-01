import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallBack } from 'react'
import './App.css'
import codeInfoContext from './main';
import SomeChild from "./SomeChild";

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  // VDOM前とVDOM後の差分をリアルDOMに反映
  // 状態が変わったときに再レンダリングされ差分だけを描画する
  const [count, setCount] = useState(0)
  const codeInfo = useContext(codeInfoContext);
  const ref = useRef<HTMLInputElement | null>(null)
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //文字列を取りたい時などにUseRefを使用して参照しにいく
  const handleRef = () => {
    // console.log(ref.current.value);
  };

  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = () => {
    let i = 0;
    while (i < 2000000) {
      i++;
    }
    return count02 * count02;
  }

  //発火のタイミングを調整できる、副作用
  // 依存関係
  useEffect(() => {
    console.log("useEffect発火");
  }, [count]);


  const showCount = () => {
    alert('これは思い処理です');
  }

  return (
    <>
      <div className="App">
        <h1>UseState、UseEffect</h1>
        <button onClick={handleClick}>+</button>
        <p>{count}</p>

        <hr />
        {/* propsのバケツリレーを楽にする */}
        <h1>useContext</h1>
        <p>{codeInfo.name}</p>
        <p>{codeInfo.age}</p>

        <hr />
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>UseRef</button>

        <hr />
        {/* //Redux使用の際 */}
        <h1>UseReducer</h1>
        <p>カウント：{state}</p>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>

        <hr />
        {/* //パフォーマンス向上 */}
        <h1>UseMemo</h1>
        <div>カウント1: {count01}</div>
        <div>カウント2: {count02}</div>
        <div>結果: {square()}</div>
        <button onClick={() => setCount01(count01 + 1)}>+</button>
        <button onClick={() => setCount02(count02 + 1)}>+</button>


        <hr />
        <h1>UseCallBack</h1>
        <SomeChild showCount={showCount} />
    </div>
    </>
  )
}

export default App
