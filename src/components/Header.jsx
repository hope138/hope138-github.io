import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'

const links = [
  { to: '/', label: '首页', end: true },
  { to: '/about', label: '关于我' },
  { to: '/projects', label: '作品' },
  { to: '/contact', label: '联系我' },
]

function navClass(isActive) {
  return isActive
    ? 'px-3 py-1.5 bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(94,106,210,0.30)]'
    : 'px-3 py-1.5 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-all duration-200'
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-border-default bg-background-base/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8" />
          <span className="flex flex-col">
            <span className="text-base leading-none font-semibold tracking-tight text-foreground">
              Hope
            </span>
            <span className="mt-0.5 font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
              AI Product Manager
            </span>
          </span>
        </NavLink>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center rounded-xl border border-border-default bg-surface-container-lowest/60 p-1 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => navClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center border-l border-border-default pl-2">
            <div className="relative rounded-full p-0.5 ring-1 ring-border-default transition-all duration-200 hover:ring-border-accent">
              <img alt="Hope" className="h-8 w-8 rounded-full object-cover" src="/images/avatar.svg" />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background-base" />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-default text-foreground md:hidden"
            aria-expanded={open}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-default bg-background-base px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => navClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
