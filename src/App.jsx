import {Footer, NavBar, VeryFistBar} from "./common"
import Routes from "./RoutesList"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <VeryFistBar />
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
