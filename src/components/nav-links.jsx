import React from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'Sobre mi', to: '/' },
  { name: 'Contactar', to: '/contacto' },
  { name: "Mis proyectos", to: '/proyectos' },
]
export function NavLinks({ className }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            className={({ isActive }) => (isActive ? 'border-b text-white' : 'text-white hover:border-b')}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
