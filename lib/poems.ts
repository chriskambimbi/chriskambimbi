import type { Poem } from "./poem"

export const poems: Poem[] = [
  {
    id: "deepseek-v32",
    title: "DeepSeek V3.2: Reasoning-First Models Built for Agents",
    author: "Chris Kambimbi",
    year: 2025,
    date: "Dec 4",
    coverImage: "/images/deepseek/deepseek_cover.png",
    tags: ["AI", "LLM", "Agents", "Research"],
    content: `Introduction

The last year has witnessed a divergence in the capabilities of large language models. Closed-source proprietary systems (GPT-5, Gemini 3.0 Pro, Claude Opus 4) have steadily pushed the boundaries of reasoning and agentic performance (1), while open-source alternatives have struggled to keep pace. Even more concerning, a widening gap has emerged between industry and academia, threatening to concentrate resources and frontier AI capabilities within a handful of well-capitalized organizations (2).

DeepSeek V3.2 models challenge this trajectory.

On December 1st, 2025, DeepSeek released two models that fundamentally reshape the open-source landscape: DeepSeek V3.2, a balanced 685-billion parameter model achieving GPT-5-level performance, and DeepSeek V3.2-Speciale, an extended-reasoning variant that rivals Gemini 3.0 Pro. Both models are released under an MIT license with complete technical documentation and open weights on Hugging Face—no restrictions, no API-only access, no commercial limitations.

The performance claims are backed by unprecedented competitive results. V3.2-Speciale achieves gold-medal performance across multiple 2025 international competitions: 35 out of 42 points on the International Mathematical Olympiad (IMO), 492 out of 600 on the International Olympiad in Informatics (IOI), and successfully solves 10 out of 12 problems at the ICPC World Finals. These aren't incremental improvements; they represent the first open-source model to reach gold-medal thresholds in these elite competitions—domains previously dominated by proprietary systems with orders of magnitude more resources.

Perhaps most striking is the cost efficiency. At $0.42 per million output tokens, DeepSeek V3.2 operates at approximately 24× lower cost than GPT-5 (3) ($10.00/M tokens), 29× lower cost than Gemini 3 Pro (4) ($12.00/M tokens), and significantly lower than many other frontier models.

Table 1: Output Token Cost Comparison (per 1M tokens)

[IMAGE: /images/deepseek/deepseek table 1.png]

*For contexts ≤ 200K tokens; higher for longer contexts

The release raises a critical question: How did an open-source effort close what many believed was an insurmountable gap? The answer lies in three key innovations: a novel sparse attention mechanism that reduces computational complexity from quadratic to near-linear, a massive investment in reinforcement learning post-training exceeding 10% of pre-training compute, and an automated pipeline for synthesizing 1,827 distinct agentic task environments. This represents fundamental advances in how we approach reasoning-first model design.

This post examines the technical foundations of DeepSeek V3.2, analyzes its performance across benchmarks and competitions, and explores what this release means for the trajectory of open-source AI. The implications extend beyond a single model release: DeepSeek V3.2 demonstrates that with principled architectural choices and strategic resource allocation, open-source models can achieve—and in some cases exceed—the capabilities of proprietary frontier systems.

References:

(1) The ability of an AI to autonomously plan, execute multi-step workflows, and use tools to achieve a goal

(2) [State of AI Report, 2025]

(3) GPT-5: $10.00 ÷ $0.42 ≈ 23.8x (rounded to ~24x cheaper)

(4) Gemini 3 Pro: $12.00 ÷ $0.42 ≈ 28.6x (rounded to ~29x cheaper)`,
  },
  {
    id: "rejection",
    title: "Rejection",
    author: "imai",
    year: 2024,
    date: "Oct 29",
    coverImage: "/images/reflection.png",
    tags: ["Poetry", "Personal Growth"],
    content: `Rejection

A letter falls, silent and cold,
Its words like whispers, harsh and bold.
The dream I cradled in tender hands,
Slipped like grains of desert sands.

I gave my heart, my soul, my will,
Each sleepless night, each silent hill.
The prayers I wove in threads of light,
Now rest in shadows, veiled by night.

A hollow ache, a silent sting,
For dreams deferred, and hopes that cling,
To what might have been, a different way,
A path untraveled, lost to yesterday.

Oh cruel verdict, sharp and swift,
You steal the joy, the hopeful lift.
Yet in the sorrow, grace I find,
A peace that mends the fractured mind.

To those who stand where I once dreamed,
Hold tight the gift, though undeserved it seemed.
For many long to wear your crown,
To rise where others have fallen down.

And to myself, this heart of mine,
Let gratitude and effort intertwine.
The world turns on, the story grows,
Through jagged thorns, a new path shows.

So count it all, the joy, the pain,
Each loss, a lesson; each tear, a gain.
Rejection may sting, but still I rise,
Chasing tomorrow, beneath endless skies.`,
  },
]
