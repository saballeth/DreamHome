import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from './Context/AuthContext'
import RouterProv from './routes/routerProv'
import Provider from '../src/Context/Context'

function App() {
  return (
    <Router>
      <Provider>
        <AuthProvider>
          <RouterProv />
        </AuthProvider>
      </Provider>
    </Router>
  )
}

export default App
