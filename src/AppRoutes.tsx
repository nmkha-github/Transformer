import { Route, Routes } from 'react-router-dom'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import QuestionAnsweringPage from './pages/QuestionAnsweringPage/QuestionAnsweringPage'
import HomePage from './pages/HomePage/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='question-answering' element={<QuestionAnsweringPage />} />
    </Routes>
  )
}

export default AppRoutes
