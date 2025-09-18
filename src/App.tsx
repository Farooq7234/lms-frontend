import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoutes from './components/PrivateRoutes'
import LeadsList from './pages/LeadList'
import LeadCreate from './pages/LeadCreate'
import LeadEdit from './pages/LeadEdit'
import Landing from './pages/Landing'

function App() {
  return (
    <div className="p-6">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/leads" element={<LeadsList />} />
          <Route path="/leads/new" element={<LeadCreate />} />
          <Route path="/leads/edit/:id" element={<LeadEdit />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
