import { DarkModeContextProvider } from './context/DarkModeContext/DarkModeContext'
import { FeedContextProvider } from './context/FeedContext/FeedContext'
import { Home } from './pages/Home'
import './styles/global.css'

function App() {
  return (
    <DarkModeContextProvider>
      <FeedContextProvider>
        <Home />
      </FeedContextProvider>
    </DarkModeContextProvider>
  )
}

export { App }
