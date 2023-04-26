
import { unstable_createRoot } from 'react-dom';
import App from './App';

const root = document.getElementById('root');
const createApp = unstable_createRoot(root);
createApp.render(<App />);

