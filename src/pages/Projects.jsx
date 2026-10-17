import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import Icon from '../components/Icon'

const filters = [
  { id: 'all', label: '全部 (All)' },
  { id: 'agentic', label: 'Agentic Systems' },
  { id: 'enterprise', label: 'Enterprise AI' },
  { id: 'multimodal', label: 'Multimodal' },
  { id: 'devtools', label: 'Developer Tools' },
]

const cards = [
  { id: 'omni', categories: ['agentic', 'enterprise'] },
  { id: 'neural', categories: ['enterprise', 'agentic'] },
  { id: 'voice', categories: ['multimodal'] },
  { id: 'eval', categories: ['devtools', 'enterprise'] },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [activeTitle, setActiveTitle] = useState(null)
  const [toast, setToast] = useState('')
  const study = activeTitle ? caseStudies[activeTitle] : null
  const visible = Object.fromEntries(
    cards.map((card) => [card.id, filter === 'all' || card.categories.includes(filter)]),
  )

  useEffect(() => {
    if (!activeTitle) return undefined
    function onKey(event) {
      if (event.key === 'Escape') setActiveTitle(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeTitle])

  function showToast(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  return (
    <div className="flex w-full flex-col">
      <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-12">
        <div className="relative mb-12">
          <div className="pointer-events-none absolute -top-12 -left-12 -z-10 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  AIPM PROD SPEC • v2.4
                </span>
                <span className="font-label-sm text-label-sm tracking-widest text-foreground-muted uppercase">
                  / Selected Works
                </span>
              </div>
              <h1 className="text-headline-xl tracking-tight text-foreground">精选项目与作品</h1>
              <p className="mt-3 text-body-lg leading-relaxed text-foreground-muted">
                From zero to production: Intelligent workflows, Generative AI suites, and Copilot
                platforms designed for scale, precision, and low-latency interaction.
              </p>
            </div>
            <div className="flex items-center gap-6 rounded-xl bg-surface-container-lowest/80 p-4 shadow-xl">
              <Metric label="Shipped Models" value="14+" note="In Prod" noteClass="text-primary" />
              <div className="h-8 w-px bg-surface-bright" />
              <Metric label="Avg Latency Drop" value="-62%" note="P99" noteClass="text-tertiary" />
              <div className="hidden h-8 w-px bg-surface-bright sm:block" />
              <div className="hidden sm:block">
                <Metric label="Enterprise ARR" value="$3.8M+" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 rounded-xl bg-surface-container-lowest/90 p-1 shadow-sm">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`rounded-lg px-4 py-2 font-label-md text-label-md whitespace-nowrap transition-all duration-200 ${
                    filter === item.id
                      ? 'bg-primary-container text-on-primary-container shadow-md'
                      : 'text-foreground-muted hover:bg-surface-hover hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="hidden items-center gap-3 font-label-sm text-label-sm text-foreground-muted lg:flex">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" /> Live Pipeline
              </span>
              <span className="text-surface-bright">•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-tertiary" /> Evaluated via RAGAS
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {visible.omni && (
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest/95 p-6 transition-all duration-300 hover:shadow-2xl sm:p-8 lg:col-span-8">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary-container/15 blur-3xl transition-all duration-500 group-hover:bg-primary-container/25" />
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-primary-container/20 px-2.5 py-1 font-label-sm text-label-sm tracking-wide text-primary">
                      FLAGSHIP SYSTEM
                    </span>
                    <span className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-foreground-muted">
                      PROD 2024.Q3
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-label-sm text-label-sm text-foreground-muted">
                    <Icon name="hub" className="text-base text-primary" />
                    <span>12 Multi-Agent Nodes</span>
                  </div>
                </div>
                <h2 className="text-headline-lg text-foreground transition-colors duration-200 group-hover:text-primary">
                  OmniAgent AI Workflow Platform
                </h2>
                <p className="mt-2 max-w-2xl text-body-md leading-relaxed text-foreground-muted">
                  End-to-end autonomous multi-agent orchestration architecture for enterprise revenue
                  teams. Integrates asynchronous tool calling, automated human-in-the-loop triage,
                  stateful session memory, and deterministic latency reduction pipelines.
                </p>
                <AgentGraph />
              </div>
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {['GPT-4o • Claude 3.5 Sonnet', 'LangGraph', 'Qdrant Vector Cluster', 'OpenTelemetry', 'Next.js Edge'].map((tag) => (
                    <span key={tag} className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col justify-between gap-4 rounded-xl bg-surface-container-low/50 p-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-6">
                    <Stat label="Net ARR Added" value="$1.42M" />
                    <Stat label="Resolution Rate" value="91.4%" valueClass="text-primary" />
                    <Stat label="TTFT" value="280ms" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTitle('OmniAgent AI Workflow Platform')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-2.5 font-medium text-on-primary-container transition-all duration-200 hover:shadow-[0_0_24px_rgba(94,106,210,0.5)]"
                  >
                    <span>查看详情</span>
                    <Icon name="arrow_outward" className="text-sm" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {visible.neural && (
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest/95 p-6 transition-all duration-300 hover:shadow-2xl sm:p-7 lg:col-span-4">
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-secondary">
                    ENTERPRISE RAG
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">Q2 2024</span>
                </div>
                <div className="relative mb-5 h-36 w-full overflow-hidden rounded-lg bg-surface-container-high">
                  <img
                    className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    alt="文档向量化与表格解析的深色界面"
                    src="/images/neuraldoc.svg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1.5 rounded bg-background-deep/80 px-2 py-0.5 font-label-sm text-label-sm text-foreground">
                    <Icon name="verified" className="text-xs text-primary" />
                    <span>Chunk-Level Citation Engine</span>
                  </div>
                </div>
                <h3 className="text-headline-md text-foreground transition-colors duration-200 group-hover:text-primary">
                  NeuralDoc Copilot
                </h3>
                <p className="mt-2 text-body-md leading-relaxed text-foreground-muted">
                  Enterprise document intelligence assistant designed for compliance and financial
                  reports. Employs dynamic hybrid retrieval (Dense + Sparse BM25) and active
                  hallucination guardrails.
                </p>
              </div>
              <div className="mt-6">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {['Hybrid RAG', 'Pinecone', 'Reranker BGE-v2'].map((tag) => (
                    <span key={tag} className="rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-lg bg-surface-container-low/40 p-3.5">
                  <div>
                    <p className="font-label-sm text-label-sm text-foreground-muted">Hallucination Drop</p>
                    <p className="text-headline-md font-semibold text-foreground">-84.2%</p>
                  </div>
                  <button
                    type="button"
                    aria-label="查看 NeuralDoc Copilot 详情"
                    onClick={() => setActiveTitle('NeuralDoc Copilot')}
                    className="rounded-lg bg-surface p-2.5 text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
                  >
                    <Icon name="arrow_forward" className="text-lg" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {visible.voice && (
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest/95 p-6 transition-all duration-300 hover:shadow-2xl sm:p-7 lg:col-span-5">
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-tertiary">
                    SPEECH & VISION
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">LIVE PILOT</span>
                </div>
                <h3 className="text-headline-md text-foreground transition-colors duration-200 group-hover:text-primary">
                  VoiceGenius Realtime Assistant
                </h3>
                <p className="mt-2 text-body-md leading-relaxed text-foreground-muted">
                  Ultra-low latency full-duplex conversational voice/vision intelligence. Built using
                  WebRTC streaming, bi-directional token interruption, and sentiment-adaptive prosody
                  tuning.
                </p>
                <div className="my-5 rounded-xl bg-background-elevated p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-foreground-muted">Streaming Audio Buffer</span>
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-primary">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" /> Live 128kbps
                    </span>
                  </div>
                  <div className="flex h-10 items-end justify-between gap-1 px-1">
                    {[3, 5, 8, 10, 6, 4, 9, 7, 4, 2, 6, 10, 5, 2].map((height, index) => (
                      <div
                        key={index}
                        className={`w-1 rounded-full ${index === 7 ? 'bg-tertiary' : index % 4 === 0 ? 'bg-surface-bright' : 'bg-primary'}`}
                        style={{ height: `${height * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {['GPT-4o Realtime API', 'WebRTC', 'Whisper-v3 Turbo'].map((tag) => (
                    <span key={tag} className="rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface-container-low/40 p-3.5">
                  <div className="flex items-center gap-6">
                    <Stat label="Voice Latency" value="410ms" />
                    <Stat label="CSAT Score" value="4.88 / 5" valueClass="text-tertiary" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTitle('VoiceGenius Realtime Assistant')}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 font-label-sm text-label-sm text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
                  >
                    <span>View Specs</span>
                    <Icon name="arrow_forward" className="text-sm" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {visible.eval && (
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest/95 p-6 transition-all duration-300 hover:shadow-2xl sm:p-7 lg:col-span-7">
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-primary">
                      DEV PLATFORM
                    </span>
                    <span className="rounded bg-error-container/20 px-2.5 py-1 font-label-sm text-label-sm text-error">
                      RED TEAM HARNESS
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-foreground-muted">INTERNAL • OPEN-CORE</span>
                </div>
                <h3 className="text-headline-lg text-foreground transition-colors duration-200 group-hover:text-primary">
                  LLM Eval & Safety Guardrail Suite
                </h3>
                <p className="mt-2 text-body-md leading-relaxed text-foreground-muted">
                  Automated LLM continuous integration harness measuring output toxicity, adversarial
                  jailbreaks, schema drift, and factual grounding with customizable synthetic
                  red-teaming vectors.
                </p>
                <div className="my-5 overflow-hidden rounded-lg bg-background-elevated">
                  <div className="grid grid-cols-[1.4fr_1fr_auto] gap-3 bg-surface-container-high px-4 py-2.5 font-label-sm text-label-sm font-semibold text-foreground">
                    <span>Guardrail Rule / Metric</span>
                    <span>Test Matrix Status</span>
                    <span>Pass Baseline</span>
                  </div>
                  {[
                    ['check_circle', 'text-primary', 'Prompt Injection Guard', '0.02% Bypass', 'PASS (99.8%)', 'text-primary'],
                    ['check_circle', 'text-primary', 'PII Sanitization', 'Zero Leaks (10k tests)', 'PASS (100%)', 'text-primary'],
                    ['warning', 'text-tertiary', 'JSON Schema Adherence', '99.4% Valid', 'WARN (< 99.5%)', 'text-tertiary'],
                  ].map(([icon, iconColor, name, status, result, resultColor]) => (
                    <div
                      key={name}
                      className="grid grid-cols-[1.4fr_1fr_auto] items-center gap-3 border-t border-border-default px-4 py-2 font-label-sm text-label-sm text-foreground-muted"
                    >
                      <span className="flex items-center gap-2 text-foreground">
                        <Icon name={icon} className={`text-xs ${iconColor}`} />
                        {name}
                      </span>
                      <span className="text-foreground">{status}</span>
                      <span className={`font-medium ${resultColor}`}>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {['Python / FastAPI', 'DeepEval', 'Llama-Guard-3', 'GitHub Actions CI/CD'].map((tag) => (
                    <span key={tag} className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-surface-container-low/40 p-4">
                  <div className="flex items-center gap-6">
                    <Stat label="Adversarial Defense" value="99.8%" />
                    <Stat label="Regression Speed" value="4.2 min/run" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTitle('LLM Eval & Safety Guardrail Suite')}
                    className="inline-flex items-center gap-2 rounded-lg bg-surface px-4 py-2 text-foreground transition-all hover:bg-surface-hover hover:text-primary"
                  >
                    <span>查看详情</span>
                    <Icon name="arrow_outward" className="text-sm" />
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-surface-container-lowest/80 p-8 shadow-xl sm:p-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <div className="mb-2 flex items-center gap-2">
                <Icon name="psychology" className="text-xl text-primary" />
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase">
                  AIPM Philosophy
                </span>
              </div>
              <h3 className="text-headline-lg text-foreground">How I Ship AI Products That People Actually Use</h3>
              <p className="mt-2 text-body-md text-foreground-muted">
                Moving beyond simple wrappers. My product framework bridges the gap between
                state-of-the-art model research, low-latency infrastructure, and intuitive human
                mental models.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:w-auto">
              {[
                ['text-primary', '01 / DISCOVERY', 'Ground Truth First', 'Mapping real user workflows before deciding if an LLM is even required.'],
                ['text-secondary', '02 / BENCHMARK', 'Eval-Driven Specs', 'Every PRD ships with deterministic test sets, acceptable error bars, and latency budgets.'],
                ['text-tertiary', '03 / ITERATE', 'Flywheel Telemetry', 'Capturing implicit user feedback to continuously fine-tune small specialized models.'],
              ].map(([color, step, title, body]) => (
                <div key={step} className="rounded-xl bg-background-elevated p-4">
                  <span className={`font-label-sm text-label-sm font-bold ${color}`}>{step}</span>
                  <h4 className="mt-1 text-sm font-semibold text-foreground">{title}</h4>
                  <p className="mt-1 text-body-sm text-foreground-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center py-10 text-center">
          <span className="mb-2 font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
            Interested in collaboration or consulting?
          </span>
          <h3 className="text-headline-md text-foreground">
            Let's build the next generation of AI software together.
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-6 py-2.5 font-medium text-on-primary-container transition-all hover:shadow-[0_0_24px_rgba(94,106,210,0.5)]"
            >
              <Icon name="mail" className="text-sm" />
              <span>预约产品交流 (Book a Call)</span>
            </Link>
            <button
              type="button"
              onClick={() => showToast('案例白皮书即将开放下载')}
              className="inline-flex items-center gap-2 rounded-lg bg-surface px-6 py-2.5 text-foreground transition-all hover:bg-surface-hover"
            >
              <Icon name="download" className="text-sm" />
              <span>下载 AIPM 案例白皮书 (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {study && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-deep/80 p-4 backdrop-blur-md sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveTitle(null)
          }}
        >
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface-container-lowest p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              aria-label="关闭"
              onClick={() => setActiveTitle(null)}
              className="absolute top-5 right-5 rounded-lg bg-surface p-2 text-foreground-muted hover:bg-surface-hover hover:text-foreground"
            >
              <Icon name="close" className="text-lg" />
            </button>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded bg-primary-container/20 px-2.5 py-0.5 font-label-sm text-label-sm text-primary uppercase">
                Full Case Study Spec
              </span>
              <span className="font-label-sm text-label-sm text-foreground-muted">{study.tag}</span>
            </div>
            <h3 className="pr-10 text-headline-lg text-foreground">{activeTitle}</h3>
            <div className="my-6 grid grid-cols-1 gap-4 rounded-xl bg-background-elevated p-4 sm:grid-cols-3">
              <Field label="Product Role" value={study.role} />
              <Field label="Timeline" value={study.timeline} />
              <Field label="Core Impact" value={study.impact} valueClass="text-primary" />
            </div>
            <div className="space-y-4 text-body-md text-foreground-muted">
              {study.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
                  <p className="mt-1">{section.body}</p>
                </div>
              ))}
              <div>
                <h4 className="text-sm font-semibold text-foreground">3. Measurable Product Outcomes</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground">
                  {study.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTitle(null)}
                className="rounded-lg bg-surface px-5 py-2 text-foreground hover:bg-surface-hover"
              >
                关闭 (Close)
              </button>
            </div>
          </div>
        </div>
      )}

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

function Metric({ label, value, note, noteClass = '' }) {
  return (
    <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-foreground-muted uppercase">{label}</span>
      <span className="text-headline-md font-semibold text-foreground">
        {value} {note && <span className={`font-label-sm text-label-sm ${noteClass}`}>{note}</span>}
      </span>
    </div>
  )
}

function Stat({ label, value, valueClass = 'text-foreground' }) {
  return (
    <div>
      <p className="font-label-sm text-label-sm text-foreground-muted">{label}</p>
      <p className={`text-headline-md font-semibold ${valueClass}`}>{value}</p>
    </div>
  )
}

function Field({ label, value, valueClass = 'text-foreground' }) {
  return (
    <div>
      <span className="block font-label-sm text-label-sm text-foreground-muted">{label}</span>
      <span className={`font-medium ${valueClass}`}>{value}</span>
    </div>
  )
}

function AgentGraph() {
  return (
    <div className="my-6 rounded-xl bg-background-elevated p-4 shadow-inner">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-border-default pb-3">
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span>Agent Graph Topology & Execution Flow</span>
        </div>
        <span className="font-label-sm text-label-sm text-tertiary">Real-time Fallback Mode Active</span>
      </div>
      <div className="w-full overflow-x-auto py-2">
        <svg className="h-24 w-full min-w-[700px]" fill="none" viewBox="0 0 700 90">
          <rect fill="#1C1B1D" height="40" rx="8" stroke="#353436" strokeWidth="1.5" width="110" x="10" y="25" />
          <text fill="#EDEDEF" fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle" x="65" y="49">User Intent</text>
          <path d="M120 45 L170 45" stroke="#5E6AD2" strokeDasharray="4 2" strokeWidth="2" />
          <polygon fill="#5E6AD2" points="172,45 166,41 166,49" />
          <rect fill="#201F21" height="60" rx="8" stroke="#5E6AD2" strokeWidth="1.5" width="130" x="175" y="15" />
          <text fill="#BDC2FF" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" textAnchor="middle" x="240" y="42">Dynamic Router</text>
          <text fill="#8A8F98" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" x="240" y="58">GPT-4o mini (eval)</text>
          <path d="M305 35 C 330 35, 340 18, 370 18" stroke="#5E6AD2" strokeWidth="1.5" />
          <path d="M305 55 C 330 55, 340 72, 370 72" stroke="#454652" strokeWidth="1.5" />
          <rect fill="#1C1B1D" height="30" rx="6" stroke="#353436" width="140" x="375" y="3" />
          <text fill="#EDEDEF" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle" x="445" y="22">Vector Tool Agent</text>
          <rect fill="#1C1B1D" height="30" rx="6" stroke="#353436" width="140" x="375" y="57" />
          <text fill="#EDEDEF" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle" x="445" y="76">CRM Action Exec</text>
          <path d="M515 18 C 540 18, 550 45, 575 45" stroke="#5E6AD2" strokeWidth="1.5" />
          <path d="M515 72 C 540 72, 550 45, 575 45" stroke="#454652" strokeWidth="1.5" />
          <rect fill="#2A2A2B" height="40" rx="8" stroke="#5E6AD2" strokeWidth="1.5" width="110" x="580" y="25" />
          <text fill="#BDC2FF" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" textAnchor="middle" x="635" y="49">Safe Synthesis</text>
        </svg>
      </div>
    </div>
  )
}
