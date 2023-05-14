import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
)