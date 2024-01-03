import { ThemeProvider } from '@emotion/react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'
import { persistor, store } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {typeof window !== 'undefined' ? (
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <NextNProgress
                color='#D90506'
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{
                  showSpinner: false
                }}
                showOnShallow={true}
                z-index={4000000}
                position='absolute'
              />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      ) : (
          <ThemeProvider theme={theme}>
            <Layout>
              <NextNProgress
                color='#D90506'
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{
                  showSpinner: false
                }}
                showOnShallow={true}
                z-index={4000000}
                position='absolute'
              />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
      )}
    </Provider>
  )
}

export default MyApp
