import { Provider } from 'react-redux'
import { AppRouter } from '~/routers'
import { GlobalComponent } from '~/components'
import { reduxStore } from '~/libs'

function App() {

  return (
    <Provider store={reduxStore}>
      <AppRouter
        children={<GlobalComponent />}
      />
    </Provider>
  )
}

export default App
