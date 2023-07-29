import Routing from "pages"
import { withProviders } from "./providers/withProviders"
import { Navigation } from "widgets/navigation/Navigation"
import "./styles/index.scss"
const App = () => {
  return (
    <>
      <Navigation />
      <Routing />
    </>
  )
}

export default withProviders(App)