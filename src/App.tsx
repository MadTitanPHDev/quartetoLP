import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import EncontroSSTPage from './pages/EncontroSSTPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="encontro-sst" element={<EncontroSSTPage />} />
      </Route>
    </Routes>
  )
}
