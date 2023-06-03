// reactDOM is help us to connecct index.js to our html file .
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
