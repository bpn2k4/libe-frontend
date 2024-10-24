
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import AppRouter from './AppRouter'
import i18n from '@libs/i18n'
import store from '@libs/redux-store'
import GlobalComponent from '@components/GlobalComponent'
import { API_URL } from '@configs'
import Splash from '@components/Splash'

function App() {

  console.log("API_URL", API_URL)

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppRouter
          children={<GlobalComponent />}
        />
        <Splash />
      </I18nextProvider>
    </Provider>
  )
}

export default App
