import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'

import './index.css'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={supabase} type="supabase">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
