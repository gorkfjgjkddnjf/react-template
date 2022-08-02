import { BrowserRouter } from 'react-router-dom'

import { Routes } from '@app/router'

export const Layout = (): JSX.Element => {
  return (
    <BrowserRouter>
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  )
}
