import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import { AppRouter } from '~/routers'
import { GlobalComponent } from '~/components'
import { i18next, reduxStore } from '~/libs'

function App() {

  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={reduxStore}>
        <AppRouter
          children={<GlobalComponent />}
        />
      </Provider>
    </I18nextProvider>
  )
}

export default App
