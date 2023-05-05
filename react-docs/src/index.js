// 厳格モードで行うためのReactライブラリ
import React, { StrictMode } from "react";

// ブラウザと対話するためのReactライブラリ
import { createRoot } from "react-dom/client";

// コンポーネントのスタイル
import "./index.css";

// 作成したコンポーネント
import App from "./App";

//仮想DOMを作成して
const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);
