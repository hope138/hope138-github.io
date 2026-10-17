import { Link } from 'react-router-dom'
import GhostFibers from '../components/Ghost_Fibers'
import Icon from '../components/Icon'

const stats = [
  {
    icon: 'deployed_code',
    label: 'Production Grade',
    value: '3+',
    caption: 'Enterprise AI Products Launched',
    note: '0 to 1 full lifecycle delivery',
  },
  {
    icon: 'groups',
    label: 'Global Footprint',
    value: '1.2M+',
    caption: 'Active Users Across Platforms',
    note: '89% 30-day retention index',
  },
  {
    icon: 'trending_up',
    label: 'Business Impact',
    value: '40%',
    caption: 'Efficiency Gains Delivered',
    note: 'Automated multi-agent pipelines',
  },
]

export default function Home() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-12%] left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-primary-container/20 blur-[140px]" />
        <div className="absolute top-[28%] left-[18%] h-[360px] w-[420px] rounded-full bg-primary-container/10 blur-[110px]" />
        <div className="absolute top-[35%] right-[15%] h-[400px] w-[480px] rounded-full bg-secondary-container/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px] opacity-70" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0">
        <div style={{ width: '100%', height: '600px', position: 'relative' }} className="pointer-events-auto">
          <GhostFibers
            glowColor="#8b5cf6"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="focus"
            intro
            mouseInteraction
            lineColor="#dfd1fc"
            secondaryColor="#6f4ac5"
            gradient="depth"
            waves={1}
            volume={0.7}
            spread={1}
            scale={1}
            rotation={18}
            perspective={0.65}
            density={1}
            thickness={1}
            tips={0}
            foldGlow={1}
            speed={0.5}
            flow={0.4}
            rollSpeed={0.15}
            focusDepth={0}
            particles={0.5}
            sparkle={0.5}
            glow={0.8}
            brightness={1}
            vignette={0.3}
            grain={0.06}
            mouseStrength={1}
            pulseOnClick
            lightMode={false}
          />
        </div>
      </div>

      <section className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-12 pb-16 text-center lg:px-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-container-lowest/80 px-3 py-1 shadow-sm backdrop-blur-md">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
            AI Product Lead & LLM Systems Architect
          </span>
          <span className="text-foreground-muted/40">/</span>
          <span className="font-label-sm text-label-sm text-primary">Open to Leadership Roles</span>
        </div>

        <h1 className="mb-4 max-w-5xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-[44px] leading-[1.04] font-semibold tracking-[-0.035em] text-transparent select-none sm:text-[64px] lg:text-[84px]">
          HI HERE IS HOPE
        </h1>
        <p className="mb-6 max-w-2xl text-xl font-normal tracking-[-0.01em] text-foreground-subtle sm:text-[22px] sm:leading-8">
          AI Product Manager
          <span className="mx-1.5 text-foreground-muted/40">•</span>
          Architecting Intelligent Products & Scalable AI Systems
        </p>

        <div className="pointer-events-auto mb-20 flex w-full flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary-container px-6 py-2.5 font-medium tracking-tight text-on-primary-container shadow-[0_0_28px_rgba(94,106,210,0.45)] transition-all duration-300 hover:bg-[#6872D9] hover:shadow-[0_0_36px_rgba(94,106,210,0.65)]"
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full -skew-x-12 bg-white/20 transition-transform duration-1000 ease-out group-hover:translate-x-[300%]" />
            <Icon name="send" className="text-[18px]" />
            <span>联系我</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border-default bg-surface-container-lowest/70 px-6 py-2.5 font-medium tracking-tight text-foreground backdrop-blur-md transition-all duration-200 hover:border-border-hover hover:bg-surface-hover"
          >
            <span>查看作品</span>
            <Icon name="arrow_forward" className="text-[18px] text-foreground-muted" />
          </Link>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border-default p-px shadow-2xl backdrop-blur-xl md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-background-elevated/90 p-6 text-center transition-colors duration-200 hover:bg-surface-hover/80"
            >
              <div className="mb-1 flex items-center gap-1.5 font-label-sm text-label-sm tracking-widest text-primary uppercase">
                <Icon name={item.icon} className="text-[14px]" />
                {item.label}
              </div>
              <div className="my-1 text-[38px] leading-tight font-semibold tracking-tight text-foreground">
                {item.value}
              </div>
              <div className="text-body-md text-foreground-muted">{item.caption}</div>
              <div className="mt-3 flex items-center gap-1 font-label-sm text-label-sm text-foreground-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border-default pb-4 md:flex-row md:items-end">
          <div>
            <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-primary uppercase">
              <span className="h-2 w-2 rounded-sm bg-primary-container" />
              Core Expertise
            </div>
            <h2 className="text-headline-lg text-foreground">AI 核心产品领域与系统架构</h2>
          </div>
          <p className="max-w-md text-body-md text-foreground-muted">
            兼顾模型底层机制与极致用户交互，专注于端到端生成式 AI 产品的工程化落地。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-default bg-background-elevated p-8 transition-all duration-300 hover:border-border-accent lg:col-span-7">
            <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-primary-container/10 blur-[80px] transition-all group-hover:bg-primary-container/20" />
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-border-default bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm font-medium tracking-wide text-primary">
                  AGENTIC ARCHITECTURE
                </span>
                <span className="font-label-sm text-label-sm text-foreground-muted">DOMAIN 01</span>
              </div>
              <h3 className="mb-3 text-[24px] leading-tight font-semibold text-foreground">
                LLM Agents & 复杂工作流协同
              </h3>
              <p className="mb-8 max-w-xl text-body-md leading-relaxed text-foreground-subtle">
                设计具备自我规划、反思、工具调用（Function Calling）与状态持久化能力的自主代理协同编排系统，将复杂行业业务流降解为确定性的执行网络。
              </p>
            </div>
            <div className="w-full rounded-xl border border-border-default bg-background-deep p-5 shadow-inner">
              <div className="mb-4 flex items-center justify-between border-b border-border-default pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-2 font-label-sm text-label-sm text-foreground-muted">
                    pipeline_graph.state_machine
                  </span>
                </div>
                <span className="rounded bg-primary-container/20 px-2 py-0.5 font-label-sm text-label-sm text-primary">
                  RUNNING (t=120ms)
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
                <div className="rounded-lg border border-border-default bg-surface-container-lowest p-3">
                  <div className="font-label-sm text-[10px] text-foreground-muted uppercase">Stage 01</div>
                  <div className="font-medium text-foreground">Intent Routing</div>
                  <div className="mt-2 flex items-center gap-1 font-label-sm text-[11px] text-primary">
                    <Icon name="check_circle" className="text-[12px]" />
                    99.4% Latency
                  </div>
                </div>
                <div className="rounded-lg border border-border-accent bg-surface-container-lowest p-3 shadow-[0_0_12px_rgba(94,106,210,0.15)]">
                  <div className="font-label-sm text-[10px] text-primary uppercase">Stage 02</div>
                  <div className="font-medium text-foreground">Multi-Tool Exec</div>
                  <div className="mt-2 flex items-center gap-1 font-label-sm text-[11px] text-primary">
                    <Icon name="sync" className="animate-spin text-[12px]" />
                    Parallel (4)
                  </div>
                </div>
                <div className="rounded-lg border border-border-default bg-surface-container-lowest p-3 opacity-60">
                  <div className="font-label-sm text-[10px] text-foreground-muted uppercase">Stage 03</div>
                  <div className="font-medium text-foreground">Reflection & Synthesize</div>
                  <div className="mt-2 font-label-sm text-[11px] text-foreground-muted">Queued</div>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative flex flex-col justify-between rounded-2xl border border-border-default bg-background-elevated p-8 transition-all duration-300 hover:border-border-accent lg:col-span-5">
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-60 w-60 rounded-full bg-secondary-container/10 blur-[80px]" />
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-border-default bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm font-medium tracking-wide text-primary">
                  MULTIMODAL UX
                </span>
                <span className="font-label-sm text-label-sm text-foreground-muted">DOMAIN 02</span>
              </div>
              <h3 className="mb-3 text-[24px] leading-tight font-semibold text-foreground">
                多模态交互体验与界面拟态
              </h3>
              <p className="mb-6 text-body-md leading-relaxed text-foreground-subtle">
                融合流式输出（Streaming Token）、实时音频流、视觉输入及空间交互，重构人与模型协同交互的下一代认知范式。
              </p>
            </div>
            <div className="relative h-44 w-full overflow-hidden rounded-xl border border-border-default">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="深色多模态生成界面，带有音频波形与节点图"
                src={`${import.meta.env.BASE_URL}images/multimodal.svg`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background-deep via-background-deep/40 to-transparent p-4">
                <div className="flex w-full items-center justify-between">
                  <span className="flex items-center gap-2 font-label-sm text-label-sm text-foreground">
                    <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
                    Real-time Audio & Vision Canvas
                  </span>
                  <span className="font-label-sm text-label-sm text-primary">v2.4 Active</span>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative flex flex-col items-center justify-between gap-8 rounded-2xl border border-border-default bg-background-elevated p-8 transition-all duration-300 hover:border-border-accent lg:col-span-12 lg:flex-row">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-border-default bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm font-medium tracking-wide text-primary">
                  EVALS & GUARDRAILS
                </span>
                <span className="font-label-sm text-label-sm text-foreground-muted">DOMAIN 03</span>
              </div>
              <h3 className="mb-3 text-[24px] leading-tight font-semibold text-foreground">
                企业级模型评估指标与安全护栏体系
              </h3>
              <p className="text-body-md leading-relaxed text-foreground-subtle">
                构建闭环自动化评估测试套件（RAG 幻觉监测、忠实度评测、红队对抗注入安全护栏），确保生产环境高置信度交付与成本/时延的最优帕累托前沿。
              </p>
            </div>
            <div className="flex w-full items-center gap-4 lg:w-auto">
              {[
                ['99.8%', 'Safety Guardrail Score', 'text-foreground'],
                ['-58%', 'Hallucination Index', 'text-primary'],
                ['<350ms', 'TTFT Optimization', 'text-tertiary'],
              ].map(([value, label, color]) => (
                <div
                  key={label}
                  className="flex-1 rounded-xl border border-border-default bg-surface-container-lowest p-4 text-center lg:w-44 lg:flex-none"
                >
                  <div className={`text-headline-md font-semibold ${color}`}>{value}</div>
                  <div className="mt-1 font-label-sm text-label-sm text-foreground-muted">{label}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-border-default bg-gradient-to-b from-surface-container-high/60 to-surface-container-lowest/80 p-8 backdrop-blur-xl sm:p-12 md:flex-row">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(94,106,210,0.18),transparent_60%)]" />
          <div className="relative z-10 max-w-xl text-left">
            <h3 className="mb-2 text-headline-lg font-semibold tracking-tight text-foreground">
              准备好打造下一代突破性 AI 产品了吗？
            </h3>
            <p className="text-body-md text-foreground-muted">
              无论是寻求全职 AI 产品领军者、设计咨询，还是技术架构方案探讨，欢迎随时建立连接。
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 w-full rounded-xl bg-primary-container px-8 py-3 text-center font-medium tracking-tight text-on-primary-container shadow-[0_0_24px_rgba(94,106,210,0.4)] transition-all hover:bg-[#6872D9] md:w-auto"
          >
            开启对话
          </Link>
        </div>
      </section>
    </div>
  )
}
