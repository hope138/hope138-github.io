import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-6 w-full border-t border-border-default bg-background-deep py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row lg:px-12">
        <div className="flex items-center gap-2">
          <Logo id="hope-mark-footer" className="h-5 w-5 opacity-70" />
          <span className="font-label-sm text-label-sm text-foreground-muted">
            Hope © 2024 AI Product Portfolio. All rights reserved.
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-foreground-muted">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Available for AI Product Opportunities
        </span>
      </div>
    </footer>
  )
}
