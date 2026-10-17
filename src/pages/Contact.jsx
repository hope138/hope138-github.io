import { useState } from 'react'
import Icon from '../components/Icon'

const topics = ['项目合作', 'AI技术交流', '咨询探讨']
const emptyForm = { name: '', email: '', topic: '项目合作', message: '' }
const inputClass =
  'w-full rounded-lg bg-surface-container-low py-2.5 pr-4 pl-10 text-body-md text-foreground transition-all placeholder:text-foreground-muted focus:bg-surface-container focus:ring-1 focus:ring-primary-container focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [toast, setToast] = useState('')

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function showToast(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  async function copyText(value, message) {
    try {
      await navigator.clipboard.writeText(value)
      showToast(message)
    } catch {
      showToast('复制失败，请手动选择文本')
    }
  }

  function submit(event) {
    event.preventDefault()
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary-container/20 blur-[128px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-80 w-80 bg-accent-glow blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-4 pb-6 md:flex-row md:items-end">
          <div className="flex flex-col">
            <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 font-label-sm text-label-sm text-foreground shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>Open for high-impact AI Product roles & Advisory</span>
            </div>
            <h1 className="text-headline-xl tracking-tight text-foreground">发起联络 / Get in Touch</h1>
            <p className="mt-1 max-w-xl text-body-lg text-foreground-muted">
              专注生成式 AI 与智能产品架构落地。无论项目合作、技术研讨或战略咨询，随时欢迎交流。
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-surface-container-lowest p-1.5">
            <div className="px-3 py-1 text-center">
              <span className="block font-label-sm text-label-sm text-foreground-muted uppercase">时区</span>
              <span className="font-label-md text-label-md text-foreground">UTC+8 (SGT/CST)</span>
            </div>
            <div className="h-6 w-px bg-surface-variant" />
            <div className="px-3 py-1 text-center">
              <span className="block font-label-sm text-label-sm text-foreground-muted uppercase">平均回复</span>
              <span className="font-label-md text-label-md text-primary">&lt; 12 Hours</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-surface-container-lowest p-4 shadow-md">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-container-high shadow-lg">
                <img
                  alt="Hope"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={`${import.meta.env.BASE_URL}images/avatar.svg`}
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-headline-md font-semibold text-foreground">Hope</span>
                  <span className="rounded bg-primary-container/20 px-2 py-0.5 font-label-sm text-label-sm text-primary">
                    AI PM
                  </span>
                </div>
                <p className="mt-0.5 truncate text-body-sm text-foreground-muted">
                  LLM Agent Architecture · Product Strategy
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <Icon name="verified" className="text-[16px] text-primary" />
                  <span className="font-label-sm text-label-sm text-foreground-subtle">
                    全栈产品化经验 · 5+ 年体验架构
                  </span>
                </div>
              </div>
            </div>

            <ContactRow
              icon="chat"
              label="微信 / WeChat"
              value="Hope_AIPM_Studio"
              onCopy={() => copyText('Hope_AIPM_Studio', '微信 ID 已复制到剪贴板')}
            >
              <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-surface-container p-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-surface-bright">
                    <Icon name="qr_code_2" className="text-[28px] text-foreground-muted" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body-sm font-medium text-foreground">扫码快速直连</span>
                    <span className="font-label-sm text-label-sm text-foreground-muted">
                      添加时请备注「姓名+合作意向」
                    </span>
                  </div>
                </div>
                <span className="rounded bg-primary-container/10 px-2 py-1 font-label-sm text-label-sm text-primary">
                  即时响应
                </span>
              </div>
            </ContactRow>

            <ContactRow
              icon="mail"
              label="电子邮箱 / Email"
              value="hope.aipm@example.com"
              onCopy={() => copyText('hope.aipm@example.com', '邮箱地址已复制')}
            />

            <div className="grid grid-cols-2 gap-2">
              <a
                className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-all duration-200 hover:bg-surface-container-low"
                href="https://github.com/hope-aipm"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high text-foreground transition-colors group-hover:text-primary">
                    <Icon name="code" className="text-[18px]" />
                  </div>
                  <Icon name="north_east" className="text-[16px] text-foreground-muted" />
                </div>
                <div className="mt-4">
                  <span className="block font-label-sm text-label-sm text-foreground-muted uppercase">开源仓库</span>
                  <span className="font-semibold text-foreground transition-colors group-hover:text-primary">GitHub</span>
                  <span className="mt-0.5 block truncate font-label-sm text-label-sm text-foreground-subtle">
                    github.com/hope-aipm
                  </span>
                </div>
              </a>
              <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high text-rose-400">
                    <Icon name="menu_book" className="text-[18px]" />
                  </div>
                  <span className="rounded bg-rose-500/10 px-1.5 py-0.5 font-label-sm text-[10px] text-rose-400">
                    专栏作者
                  </span>
                </div>
                <div className="mt-4">
                  <span className="block font-label-sm text-label-sm text-foreground-muted uppercase">AI 产品手记</span>
                  <span className="font-semibold text-foreground">小红书 / RED</span>
                  <span className="mt-0.5 block truncate font-label-sm text-label-sm text-foreground-subtle">
                    @Hope_AI产品志
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-border-default pb-6">
                <div>
                  <h2 className="text-headline-lg font-semibold text-foreground">在线留言 & 项目邀约</h2>
                  <p className="mt-1 text-body-sm text-foreground-muted">
                    请填写详细信息，系统将通过加密通道投递并推送即时告警。
                  </p>
                </div>
                <div className="hidden items-center gap-1.5 rounded bg-surface-container px-3 py-1 font-label-sm text-label-sm text-foreground-muted sm:flex">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Direct Route</span>
                </div>
              </div>

              <form className="flex flex-col gap-4" onSubmit={submit}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <label className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                      您的姓名 / 称呼 *
                    </span>
                    <span className="relative">
                      <Icon name="person" className="absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-foreground-muted" />
                      <input
                        required
                        type="text"
                        value={form.name}
                        placeholder="例如：Alex Chen"
                        onChange={(event) => update('name', event.target.value)}
                        className={inputClass}
                      />
                    </span>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                      电子邮箱 / 回访邮箱 *
                    </span>
                    <span className="relative">
                      <Icon name="alternate_email" className="absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-foreground-muted" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        placeholder="alex@company.com"
                        onChange={(event) => update('email', event.target.value)}
                        className={inputClass}
                      />
                    </span>
                  </label>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                    交流主题 / Topic Category
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => update('topic', topic)}
                        className={`rounded-lg px-3 py-2 text-center text-body-sm transition-all ${
                          form.topic === topic
                            ? 'bg-primary-container font-medium text-on-primary-container shadow-sm'
                            : 'bg-surface-container-low text-foreground-muted hover:bg-surface-container hover:text-foreground'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                      详细说明 / Project Scope or Thoughts *
                    </span>
                    <span className="font-label-sm text-label-sm text-foreground-muted">{form.message.length} / 800</span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    maxLength={800}
                    value={form.message}
                    placeholder="请简要介绍项目背景、当前面临的 AI 产品架构挑战或需要讨论的议题..."
                    onChange={(event) => update('message', event.target.value)}
                    className="w-full resize-none rounded-lg bg-surface-container-low p-3 text-body-md text-foreground transition-all placeholder:text-foreground-muted focus:bg-surface-container focus:ring-1 focus:ring-primary-container focus:outline-none"
                  />
                </div>

                <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
                  <div className="flex items-center gap-1 text-foreground-muted">
                    <Icon name="lock" className="text-[16px] text-primary" />
                    <span className="font-label-sm text-label-sm">End-to-end encrypted notification</span>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-2.5 font-medium text-on-primary-container shadow-[0_0_20px_rgba(94,106,210,0.35)] transition-all hover:bg-[#6872D9] disabled:cursor-wait sm:w-auto"
                  >
                    {sending ? <span>发送中...</span> : <span>发送消息</span>}
                    <Icon name="send" className="text-[18px]" />
                  </button>
                </div>
              </form>

              {sent && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-lowest/95 p-8 text-center backdrop-blur-md">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                    <Icon name="check_circle" className="text-[32px]" />
                  </div>
                  <h3 className="text-headline-lg font-semibold text-foreground">消息已发送至 Hope</h3>
                  <p className="mt-1 max-w-sm text-body-md text-foreground-muted">
                    感谢您的关注与留言，已同步触发即时通知，我将在 12 小时内查阅并回复。
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(emptyForm)
                      setSent(false)
                    }}
                    className="mt-4 rounded-lg bg-surface-container-high px-4 py-2 font-label-sm text-label-sm text-foreground hover:bg-surface-container"
                  >
                    发送另一条
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none fixed right-8 bottom-8 z-50 flex items-center gap-2 rounded-lg bg-surface-container-highest px-4 py-2 text-body-sm text-foreground shadow-xl transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <Icon name="info" className="text-[18px] text-primary" />
        <span>{toast || '通知'}</span>
      </div>
    </div>
  )
}

function ContactRow({ icon, label, value, onCopy, children }) {
  return (
    <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-colors duration-200 hover:bg-surface-container-low">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-primary">
            <Icon name={icon} className="text-[20px]" />
          </div>
          <div className="min-w-0">
            <span className="block font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">{label}</span>
            <span className="block truncate text-sm font-semibold text-foreground">{value}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-surface-container-high px-3 py-1.5 font-label-sm text-label-sm text-foreground-subtle hover:bg-primary-container hover:text-on-primary-container"
        >
          <Icon name="content_copy" className="text-[14px]" />
          <span>复制</span>
        </button>
      </div>
      {children}
    </div>
  )
}
