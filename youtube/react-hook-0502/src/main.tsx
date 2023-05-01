import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createContext } from 'react';

const codeInfo = {
  name: "codeInfo",
  age: 25,
};

const codeInfoContext = createContext(codeInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <codeInfoContext.Provider value={codeInfo}>
    <App />
  </codeInfoContext.Provider>
)

export default codeInfoContext;