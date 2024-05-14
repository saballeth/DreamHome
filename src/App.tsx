import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from './Context/AuthContext'
import RouterProv from './routes/routerProv'
import Provider from '../src/Context/Context'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Provider>
          <RouterProv />
        </Provider>
      </AuthProvider>
    </Router>
  )
}

export default App
 