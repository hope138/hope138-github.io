import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

const tags = ['Context Caching', 'Spec-Driven Dev', 'Synthetic Eval Data', 'Multi-Agent Swarms']

const milestones = [
  {
    color: 'bg-primary',
    title: 'AI Copilot Product Director • Tech Unicorn',
    time: '2022 - PRESENT',
    timeClass: 'text-primary',
    body: '主导研发企业级智能助手平台，覆盖代码辅助、多维分析与知识图谱协同。支撑日均 450万+ 次 Token 生成，企业留存率提升 34%。',
  },
  {
    color: 'bg-secondary',
    title: 'Senior AI PM • Global Cloud Provider',
    time: '2020 - 2022',
    timeClass: 'text-foreground-muted',
    body: '负责垂直领域 NLP 平台与多轮对话系统演进，主导落地 12 家金融与医疗头部客户的私有化模型服务底座。',
  },
  {
    color: 'bg-surface-container-highest',
    title: 'Product Specialist • AI Research Lab',
    time: '2018 - 2020',
    timeClass: 'text-foreground-muted',
    body: '协助研究员将 Transformer 初期前沿研究转化为早期的端侧推理 SDK 工具链。',
  },
]

export default function About() {
  return (
    <div className="flex w-full flex-col">
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-container/20 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="flex max-w-3xl flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm tracking-wide text-primary">
                  <Icon name="psychology" className="text-[14px]" />
                  PROFILE & METHODOLOGY
                </span>
                <span className="font-label-sm text-label-sm text-foreground-muted">/ 01_ABOUT_HOPE.MD</span>
              </div>
              <h1 className="text-headline-xl font-semibold tracking-tight text-foreground">
                Bridging Cutting-Edge AI Models &{' '}
                <span className="bg-gradient-to-r from-primary via-secondary-fixed to-foreground bg-clip-text text-transparent">
                  Exceptional Experiences
                </span>
              </h1>
              <p className="mt-1 text-body-lg leading-relaxed text-foreground-subtle">
                专注将复杂的神经架构与前沿多模态大模型转化为直观、高吞吐、可靠的企业级落地产品。以系统性工程思维驱动从 0 到 1 的 Agent 与 Copilot 体验构建。
              </p>
            </div>
            <div className="flex items-center gap-4 self-start rounded-xl bg-surface-container-low/70 p-4 backdrop-blur-md md:self-auto">
              <div className="flex flex-col pr-4">
                <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                  Production Models
                </span>
                <span className="text-headline-lg font-semibold text-foreground">18+</span>
              </div>
              <div className="h-8 w-px bg-surface-container-highest" />
              <div className="flex flex-col pl-2">
                <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                  Avg Latency Drop
                </span>
                <span className="text-headline-lg font-semibold text-primary">-42%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-12">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest/80 p-8 backdrop-blur-xl lg:col-span-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm tracking-widest text-foreground-muted uppercase">
                    Philosophy & Mission
                  </span>
                  <Icon name="terminal" className="text-[18px] text-foreground-muted" />
                </div>
                <div className="space-y-4 text-body-md leading-relaxed text-foreground-subtle">
                  <p>
                    我的 AI 产品设计始于对底层物理边界的敬畏。在大模型时代，优秀的产品经理不仅是需求文档的编撰者，更是
                    <strong className="font-semibold text-foreground">模型认知边界与人类交互认知</strong>
                    的架构师。
                  </p>
                  <p>
                    在过去的 6 年中，我主导了跨语言检索增强系统（RAG）、自动化代码审查 Copilot 以及千万级用户智能会话引擎的研发落地。面对非确定性输出、幻觉与推理延迟，我的工作法是以严密的人机协同回路（HITL）、动态置信度标定和细粒度遥测埋点，将实验室中脆弱的模型能力锻造成稳定、高可用且带给用户心流感受的生产力利器。
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg bg-surface-container-high/60 p-4 font-label-sm text-label-sm text-foreground-muted">
                  <div className="flex items-center justify-between text-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
                      core_loop_manifest.py
                    </span>
                    <span className="text-foreground-muted">Python 3.11</span>
                  </div>
                  <pre className="overflow-x-auto font-label-sm text-label-sm whitespace-pre text-foreground/80">{`def ship_ai_product(model_capabilities, user_intent):
    calibrated_flow = optimize_context_window(model_capabilities)
    hitl_guardrails = establish_telemetry(safety_threshold=0.98)
    return synthesize_delightful_ux(calibrated_flow, hitl_guardrails, latency_target_ms=180)`}</pre>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-6">
                {tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm ${
                      index === 0 ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-xl bg-surface-container-low/70 lg:col-span-4">
              <div className="relative h-80 min-h-[300px] w-full lg:h-full">
                <img
                  className="h-full w-full object-cover"
                  alt="Hope，AI 产品经理，在靛蓝色灯光的工作室中"
                  src={`${import.meta.env.BASE_URL}images/portrait.svg`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-surface-container-lowest/80 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-headline-md font-semibold text-foreground">Hope</h4>
                      <p className="font-label-sm text-label-sm text-foreground-muted">Lead AI Product Manager</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                      <Icon name="verified" className="text-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
          <div className="flex flex-col gap-3 pb-8">
            <div className="flex items-center gap-2">
              <Icon name="grid_view" className="text-[16px] text-primary" />
              <span className="font-label-sm text-label-sm tracking-wider text-foreground-muted uppercase">
                Competency Matrix
              </span>
            </div>
            <h2 className="text-headline-lg font-semibold text-foreground">专业纵深与核心方法论</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-b from-surface-container-high/60 to-surface-container-low/80 p-8 backdrop-blur-xl md:col-span-2">
              <div className="pointer-events-none absolute -mt-20 -mr-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-label-sm text-label-sm text-primary">
                    <Icon name="token" className="text-[14px]" />
                    PHILOSOPHY_01
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">METHODOLOGY</span>
                </div>
                <h3 className="mb-3 text-headline-lg font-semibold text-foreground">AI Product Philosophy</h3>
                <p className="mb-6 text-body-md leading-relaxed text-foreground-subtle">
                  不追求噱头式功能堆砌，专注在用户无感知的交互层消除摩擦。构建兼具弹性与韧性的系统认知范式：
                </p>
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    ['group_work', 'text-primary', 'Human-in-Loop', '设计多层次渐进式确认机制，在高风险业务节点赋予用户无缝介入与修正的权利。'],
                    ['account_tree', 'text-secondary', 'Agentic Autonomy', '针对确定性流程拆解为 ReAct / Planning 机制，自主调度外部工具并维持动态长记忆。'],
                    ['bolt', 'text-tertiary', 'Latency UX', '流式输出渐进渲染、分块推测解码，以微动效与预加载填补模型 TTFT（首字延迟）。'],
                  ].map(([icon, color, title, body]) => (
                    <div key={title} className="rounded-lg bg-surface-container-lowest/60 p-4">
                      <div className={`mb-2 flex items-center gap-2 ${color}`}>
                        <Icon name={icon} className="text-[18px]" />
                        <span className="text-base font-medium text-foreground">{title}</span>
                      </div>
                      <p className="text-body-sm text-foreground-muted">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full border-t border-border-default/40 pt-4">
                <div className="mb-2 flex items-center justify-between font-label-sm text-label-sm text-foreground-muted">
                  <span>SYSTEM ARCHITECTURE DYNAMICS</span>
                  <span className="text-primary">E2E FLOW</span>
                </div>
                <div className="flex h-auto flex-wrap items-center justify-between gap-2 rounded-md bg-surface-container-lowest px-4 py-3 font-label-sm text-label-sm text-foreground">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Intent Classify
                  </span>
                  <span className="text-foreground-muted">→</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Context Injection (RAG)
                  </span>
                  <span className="text-foreground-muted">→</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" /> Multi-Agent Router
                  </span>
                  <span className="text-foreground-muted">→</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-container" /> Streaming Client
                  </span>
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-xl bg-gradient-to-b from-surface-container-high/60 to-surface-container-low/80 p-8 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-foreground">
                    <Icon name="memory" className="text-[14px]" />
                    STACK_02
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">DEEP TECH</span>
                </div>
                <h3 className="mb-3 text-headline-lg font-semibold text-foreground">Tech & Model Stack</h3>
                <p className="mb-6 text-body-md leading-relaxed text-foreground-subtle">
                  深入底层算力约束，熟练驾驭从参数微调到评测体系的完整模型生命周期：
                </p>
                <div className="space-y-3">
                  {[
                    ['neurology', 'text-primary', 'Prompting & DPS', 'Few-shot, Chain-of-Thought, ReAct 范式构建与动态结构化输出解析。'],
                    ['dataset', 'text-secondary', 'Advanced RAG Architectures', 'HyDE 假设性问答、分层语义分块、向量图混合重排与上下文路由。'],
                    ['rule', 'text-tertiary', 'Evaluation Frameworks', '自建 Evalbench 自动化测试集，结合 BLEU/ROUGE、LLM-as-a-Judge 与 Elo 盲测排行榜。'],
                  ].map(([icon, color, title, body]) => (
                    <div key={title} className="flex items-start gap-3 rounded-lg bg-surface-container-lowest/70 p-3">
                      <Icon name={icon} className={`${color} mt-0.5 shrink-0 text-[18px]`} />
                      <div>
                        <div className="font-semibold text-foreground">{title}</div>
                        <div className="text-body-sm text-foreground-muted">{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 flex-1 rounded-full bg-primary" />
                  <span className="h-1.5 flex-1 rounded-full bg-secondary" />
                  <span className="h-1.5 flex-1 rounded-full bg-primary-container" />
                  <span className="h-1.5 flex-1 rounded-full bg-surface-container-highest" />
                </div>
                <div className="flex justify-between pt-2 font-label-sm text-label-sm text-foreground-muted">
                  <span>Retrieval 99.4%</span>
                  <span>Hallucination &lt; 1.2%</span>
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-xl bg-gradient-to-b from-surface-container-high/60 to-surface-container-low/80 p-8 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-foreground">
                    <Icon name="dashboard_customize" className="text-[14px]" />
                    OPS_03
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">EXECUTION</span>
                </div>
                <h3 className="mb-3 text-headline-lg font-semibold text-foreground">Product Execution</h3>
                <p className="mb-6 text-body-md leading-relaxed text-foreground-subtle">
                  兼具严谨规格书撰写能力与极速冷启动验证速度，敏捷打通技术与商业闭环：
                </p>
                <ul className="space-y-3 text-body-md text-foreground-subtle">
                  {[
                    ['PRD & Token Budgeting：', '在需求规格中明确 Token 消耗上限、降级策略与边缘案例边界。'],
                    ['Zero-to-One Prototyping：', '擅长结合 Python 与 Next.js 独立完成首周端到端可交互原型验证。'],
                    ['User Telemetry & Flywheel：', '构建点击反馈、采纳率、重试率等模型专属数据飞轮。'],
                  ].map(([title, body]) => (
                    <li key={title} className="flex items-start gap-2.5">
                      <Icon name="check_circle" className="mt-0.5 shrink-0 text-[18px] text-primary" />
                      <span>
                        <strong>{title}</strong>
                        {body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-lg bg-surface-container-lowest/80 p-4">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-foreground-muted uppercase">PRD Iteration Velocity</span>
                  <span className="text-headline-md font-semibold text-foreground">2.4 Sprints / Ship</span>
                </div>
                <Icon name="speed" className="text-[28px] text-primary" />
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-xl bg-gradient-to-b from-surface-container-high/60 to-surface-container-low/80 p-8 backdrop-blur-xl md:col-span-2">
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-foreground">
                    <Icon name="history_edu" className="text-[14px]" />
                    HISTORY_04
                  </span>
                  <span className="font-label-sm text-label-sm text-foreground-muted">TIMELINE</span>
                </div>
                <h3 className="mb-3 text-headline-lg font-semibold text-foreground">Career Milestones</h3>
                <p className="mb-6 text-body-md leading-relaxed text-foreground-subtle">
                  带领算法与产研团队，主导千万级用户体量核心 AI 产品的规划与商业化历程：
                </p>
                <div className="relative space-y-6 pl-6 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5 before:bg-surface-container-highest before:content-['']">
                  {milestones.map((item) => (
                    <div key={item.title} className="relative">
                      <div className={`absolute top-1 -left-[27px] h-3 w-3 rounded-full ring-4 ring-background-base ${item.color}`} />
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                        <h4 className="text-headline-md font-semibold text-foreground">{item.title}</h4>
                        <span className={`font-label-sm text-label-sm ${item.timeClass}`}>{item.time}</span>
                      </div>
                      <p className="mt-1 text-body-sm text-foreground-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
                <span className="font-label-sm text-label-sm text-foreground-muted">
                  CURRENT STATUS: OPEN FOR EXCITING COLLABORATIONS
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 font-medium text-on-primary-container transition-colors hover:bg-[#6872D9]"
                >
                  <span>与我探讨合作</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
