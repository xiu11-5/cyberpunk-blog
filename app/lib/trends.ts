export interface Trend {
  id: string;
  title: string;
  category: 'AI' | 'Cloud' | 'Security' | 'Web3' | 'DevOps';
  description: string;
  trendDirection: 'up' | 'down' | 'stable';
  percentage?: number;
}

export const trends: Trend[] = [
  {
    id: '1',
    title: 'LLM Agents',
    category: 'AI',
    description: 'Autonomous AI agents capable of complex task planning and execution are reshaping how we approach automation and productivity.',
    trendDirection: 'up',
    percentage: 245,
  },
  {
    id: '2',
    title: 'Edge Computing',
    category: 'Cloud',
    description: 'Moving computation closer to data sources reduces latency and bandwidth costs, enabling real-time applications at scale.',
    trendDirection: 'up',
    percentage: 128,
  },
  {
    id: '3',
    title: 'Zero Trust Security',
    category: 'Security',
    description: 'Never trust, always verify. Modern security architectures assume breach and verify every access request regardless of origin.',
    trendDirection: 'up',
    percentage: 89,
  },
  {
    id: '4',
    title: 'DeFi Protocols',
    category: 'Web3',
    description: 'Decentralized finance continues to evolve with new protocols offering innovative financial services without intermediaries.',
    trendDirection: 'stable',
    percentage: 12,
  },
  {
    id: '5',
    title: 'GitOps Workflows',
    category: 'DevOps',
    description: 'Using Git as the single source of truth for declarative infrastructure and applications, enabling version-controlled operations.',
    trendDirection: 'up',
    percentage: 67,
  },
  {
    id: '6',
    title: 'Multimodal AI',
    category: 'AI',
    description: 'Models that understand and generate across text, images, audio, and video are unlocking new possibilities in human-computer interaction.',
    trendDirection: 'up',
    percentage: 312,
  },
  {
    id: '7',
    title: 'WebAssembly',
    category: 'Cloud',
    description: 'Running high-performance code in the browser and beyond, enabling near-native execution speeds for web applications.',
    trendDirection: 'up',
    percentage: 56,
  },
  {
    id: '8',
    title: 'Supply Chain Security',
    category: 'Security',
    description: 'Protecting software supply chains from attacks with SBOMs, signed artifacts, and automated vulnerability scanning.',
    trendDirection: 'up',
    percentage: 178,
  },
];

export function getAllTrends(): Trend[] {
  return trends;
}

export function getTrendsByCategory(category: Trend['category']): Trend[] {
  return trends.filter((trend) => trend.category === category);
}

export function getLatestTrends(count: number = 4): Trend[] {
  return trends.slice(0, count);
}
