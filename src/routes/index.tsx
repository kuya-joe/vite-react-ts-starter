import { JSXElementConstructor, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import publicRoutes from './publicRoutes'

export default function Routes(): ReactElement<
  unknown,
  string | JSXElementConstructor<unknown>
> | null {
  return useRoutes(publicRoutes)
}
