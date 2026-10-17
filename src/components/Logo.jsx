export default function Logo({ className = 'h-8 w-8', id = 'hope-mark' }) {
  const plate = `${id}-plate`
  const shape = 'M9.5 1.5H23L30.5 9V22.5A8 8 0 0 1 22.5 30.5H9L1.5 23V9.5A8 8 0 0 1 9.5 1.5Z'

  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={plate} x1="3" y1="2" x2="29" y2="30">
          <stop offset="0%" stopColor="#23294a" />
          <stop offset="46%" stopColor="#121628" />
          <stop offset="100%" stopColor="#080a12" />
        </linearGradient>
      </defs>

      <path d={shape} fill={`url(#${plate})`} stroke="#a8b0ff" strokeOpacity="0.62" strokeWidth="0.9" />

      <rect x="7.7" y="7.35" width="3.2" height="17.3" rx="0.8" fill="#f7f5ff" />
      <rect x="21.1" y="7.35" width="3.2" height="17.3" rx="0.8" fill="#f7f5ff" />
      <rect x="7.7" y="14.4" width="6.35" height="3.2" rx="0.7" fill="#f7f5ff" />
      <rect x="17.95" y="14.4" width="6.35" height="3.2" rx="0.7" fill="#f7f5ff" />
      <path d="M16 13.05 18.35 16 16 18.95 13.65 16Z" fill="#ffb867" />
    </svg>
  )
}
