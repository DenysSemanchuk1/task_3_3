import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "app/store";
export const withProviders = (component: () => React.ReactNode) => () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {component()}
      </BrowserRouter>
    </Provider>
  )
}