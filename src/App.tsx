import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from './AuthContext/AuthContext'
import RouterProv from './routes/routerProv'

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouterProv />
      </AuthProvider>
    </Router>
  )
}

export default App
 