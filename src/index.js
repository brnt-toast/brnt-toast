import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"

import './styles/index.sass'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    )