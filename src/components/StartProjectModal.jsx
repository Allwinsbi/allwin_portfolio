import { useEffect, useState } from 'react'
import { EMAIL, EMAIL_URL, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from '../data/contact'

export default function StartProjectModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setCopied(false)
  }, [open])

  if (!open) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-project-title"
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-paper border border-line rounded-xl shadow-xl max-w-[420px] w-full p-7 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-ink-soft hover:bg-paper-dim hover:text-ink transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <h3 id="start-project-title" className="font-bold text-xl text-ink mb-2">
          Let's Start a Project
        </h3>
        <p className="text-ink-soft text-[0.94rem] mb-6">
          Choose how you'd like to reach out — I usually respond within a few hours.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg border border-line px-5 py-4 hover:border-red hover:bg-paper-dim transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-live/10 text-live flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.14L2 22l5.11-1.53a9.89 9.89 0 0 0 4.93 1.32h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.12-.42-.13-.96-.32-1.65-.62-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
              </svg>
            </span>
            <span>
              <span className="block text-ink font-semibold text-[0.96rem]">WhatsApp</span>
              <span className="block text-ink-soft text-[0.82rem]">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <a
            href={PHONE_URL}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg border border-line px-5 py-4 hover:border-red hover:bg-paper-dim transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-red/10 text-red flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <span>
              <span className="block text-ink font-semibold text-[0.96rem]">Call</span>
              <span className="block text-ink-soft text-[0.82rem]">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <a
            href={EMAIL_URL}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg border border-line px-5 py-4 hover:border-red hover:bg-paper-dim transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-red/10 text-red flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18v12H3z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span>
              <span className="block text-ink font-semibold text-[0.96rem]">Open in Mail App</span>
              <span className="block text-ink-soft text-[0.82rem]">{EMAIL}</span>
            </span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-3 rounded-lg border border-line px-5 py-4 hover:border-red hover:bg-paper-dim transition-colors text-left"
          >
            <span className="w-10 h-10 rounded-full bg-red/10 text-red flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="1.5" />
                <path d="M5 15V5a1.5 1.5 0 0 1 1.5-1.5H15" />
              </svg>
            </span>
            <span>
              <span className="block text-ink font-semibold text-[0.96rem]">
                {copied ? 'Copied!' : 'Copy Email Address'}
              </span>
              <span className="block text-ink-soft text-[0.82rem]">No mail app? Copy and send it yourself</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
