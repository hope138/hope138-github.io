export const caseStudies = {
  'OmniAgent AI Workflow Platform': {
    tag: 'CONFIDENTIAL ENTERPRISE DECK',
    role: 'Lead AI Product Manager',
    timeline: '6 Months to GA',
    impact: '+45% Team Efficiency',
    sections: [
      {
        title: '1. Problem Statement',
        body: 'Enterprise customer success reps were spending 3.2 hours daily manually synthesizing incoming omnichannel queries, querying three disparate knowledge stores, and executing repetitive CRM adjustments.',
      },
      {
        title: '2. Solution Architecture',
        body: 'Architected a modular agentic harness utilizing LangGraph for dynamic state transitions. Introduced a speculative routing node that resolves 70% of straightforward deterministic commands without calling expensive frontier reasoning models.',
      },
    ],
    outcomes: [
      'P99 inference latency shrunk from 1,840ms to 280ms using edge model speculative decoding.',
      'Enterprise customer NPS increased from +34 to +68 within 90 days of rollout.',
      'Zero prompt leak incidents across 1.2M production interactions.',
    ],
  },
  'NeuralDoc Copilot': {
    tag: 'ENTERPRISE RAG SPEC',
    role: 'Lead AI Product Manager',
    timeline: 'Q2 2024',
    impact: '-84.2% Hallucination',
    sections: [
      {
        title: '1. Problem Statement',
        body: '合规与财务团队需要在上百页报告里定位依据，但通用问答经常给出无法回溯到原文段落的答案，审计无法采信。',
      },
      {
        title: '2. Solution Architecture',
        body: '采用 Dense + Sparse BM25 混合检索，再用 BGE-v2 重排。每个回答绑定 chunk 级引用，并在置信度不足时退回人工复核，而不是继续生成。',
      },
    ],
    outcomes: [
      '幻觉率下降 84.2%，引用可回溯到具体段落。',
      '分析师定位关键条款的时间从十余分钟降到一次问答。',
      '护栏拦截未授权外发的敏感财务字段。',
    ],
  },
  'VoiceGenius Realtime Assistant': {
    tag: 'SPEECH & VISION PILOT',
    role: 'AI Product Lead',
    timeline: 'Live Pilot',
    impact: 'CSAT 4.88 / 5',
    sections: [
      {
        title: '1. Problem Statement',
        body: '语音客服的回合延迟超过一秒时，用户会重复说话或直接挂断。视觉与语音还分属两套系统，无法在同一轮对话里指着屏幕说明问题。',
      },
      {
        title: '2. Solution Architecture',
        body: '用 WebRTC 做全双工音频，接入 GPT-4o Realtime 与 Whisper-v3 Turbo。支持用户打断，并用情绪自适应的韵律调节回复节奏。',
      },
    ],
    outcomes: [
      '端到端语音延迟稳定在 410ms。',
      '试点 CSAT 达到 4.88 / 5。',
      '打断后的上下文保持完整，不再重复已回答的内容。',
    ],
  },
  'LLM Eval & Safety Guardrail Suite': {
    tag: 'INTERNAL OPEN-CORE',
    role: 'AI Product Manager',
    timeline: 'Continuous',
    impact: '99.8% Defense',
    sections: [
      {
        title: '1. Problem Statement',
        body: '模型每次升级都靠人工抽查，毒性、越狱、结构化输出漂移和事实性错误要到线上才被发现。',
      },
      {
        title: '2. Solution Architecture',
        body: '把评测做成 CI 套件：Llama-Guard-3 拦截注入，PII 脱敏作为门禁，JSON schema 作为回归项，并用合成红队样本覆盖已知攻击面。',
      },
    ],
    outcomes: [
      '对抗样本防御率 99.8%，1 万次测试零 PII 泄漏。',
      '单次回归从人工半天缩短到 4.2 分钟。',
      'JSON 严格遵循率 99.4%，低于 99.5% 基线时阻断发布。',
    ],
  },
}
