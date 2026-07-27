/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useContext, useEffect, useState } from 'react'

const RouterContext = createContext(null)

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname || '/')
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(to) {
    if (!to || to === '#') return
    window.history.pushState({}, '', to)
    setPathname(window.location.pathname || '/')
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return <RouterContext.Provider value={{ pathname, navigate }}>{children}</RouterContext.Provider>
}

export function useLocation() {
  return useContext(RouterContext)
}

export function useNavigate() {
  return useContext(RouterContext).navigate
}

export function Link({ to, onClick, children, ...props }) {
  const navigate = useNavigate()

  function handleClick(event) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (!to || to === '#' || to.startsWith('#') || /^https?:\/\//i.test(to)) return
    event.preventDefault()
    navigate(to)
  }

  return <a href={to} onClick={handleClick} {...props}>{children}</a>
}

export function NavLink({ to, className, children, ...props }) {
  const { pathname } = useLocation()
  const isActive = pathname === to
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className
  return <Link to={to} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...props}>{children}</Link>
}

export function Route() {
  return null
}

export function Routes({ children }) {
  const { pathname } = useLocation()
  const routes = Children.toArray(children)
  const selected = routes.find((route) => route.props.path === pathname) || routes.find((route) => route.props.path === '*')
  return selected?.props.element || null
}


