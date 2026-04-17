'use client';

import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

export type Language = 'en' | 'zh';

// 完整的翻译对象，包含所有项目中使用的键
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      blog: 'Blog',
      trends: 'Trends',
      about: 'About',
    },

    // Hero Section
    hero: {
      subtitle1: 'Exploring the digital frontier...',
      subtitle2: 'Rust • AI • Cloud Native',
      subtitle3: 'Building the future, one line at a time',
      subtitle4: 'Cyberpunk aesthetics meet modern tech',
      description: 'A cyberpunk journey through code, AI, and digital frontiers. Exploring the intersection of technology and creativity.',
      cta: {
        blog: 'Explore Blog',
        trends: 'View Trends',
      },
      stat: {
        articles: 'Articles',
        categories: 'Categories',
        possibilities: 'Possibilities',
        uptime: 'Uptime',
      },
    },

    // Home Page
    home: {
      latestPosts: 'LATEST_POSTS',
      latestPostsDesc: 'Exploring the latest in technology, from systems programming to AI advancements.',
      noPosts: '> No posts found. Check back soon!',
      viewAllPosts: 'view_all_posts()',
      techTrends: 'TECH_TRENDS',
      techTrendsDesc: "Tracking the pulse of the tech industry. What's rising, what's falling, and what's on the horizon.",
      exploreTrends: 'explore_trends()',
    },

    // Blog Page
    blog: {
      title: 'BLOG_ARCHIVE',
      description: 'Deep dives into systems programming, AI, cloud native technologies, and more.',
      noPosts: '> ERROR: No posts found',
      waiting: '> System.init() waiting for content...',
      totalPosts: 'Total Posts',
      topics: 'Topics',
      readMore: 'read_more()',
      backToBlog: 'cd ../blog',
      eof: '> EOF // End of file',
    },

    // Blog Post Page
    blogPost: {
      eof: '> EOF // End of file',
    },

    // Trends Page
    trends: {
      title: 'TECH_TRENDS',
      description: "Tracking the pulse of the tech industry. What's rising, what's falling, and what's on the horizon.",
      marketLive: 'MARKET_LIVE',
      aiMomentum: 'AI Momentum',
      cloudGrowth: 'Cloud Growth',
      securityDemand: 'Security Demand',
      devopsAdoption: 'DevOps Adoption',
    },

    // About Page
    about: {
      title: 'ABOUT_SYSTEM',
      description: 'Behind the code. The human element in a digital world.',
      name: 'Neon Architect',
      role: 'Full-Stack Developer • Systems Engineer • AI Enthusiast',
      bio: 'Building the future, one commit at a time. Passionate about systems programming, distributed systems, and the intersection of AI and human creativity.',
      skillsComment: '// Technical competencies',
      systemsProgramming: 'Systems Programming',
      systemsProgrammingDesc: 'Low-level optimization, memory management, and building efficient systems with Rust.',
      distributedSystems: 'Distributed Systems',
      distributedSystemsDesc: 'Kubernetes, microservices, and building resilient cloud-native applications.',
      aiSecurity: 'AI & Security',
      aiSecurityDesc: 'Exploring LLMs, autonomous agents, and the security implications of AI.',
      quote: "The future is already here — it's just not evenly distributed.",
      quoteAuthor: '— William Gibson',
    },

    // Footer
    footer: {
      description: 'Exploring the intersection of technology and creativity. A cyberpunk journey through code, AI, and digital frontiers.',
      navigation: 'Navigation',
      categories: 'Categories',
      connect: 'Connect',
      designedWith: 'Designed with neon lights by Brody',
      cat: {
        ai: 'AI & ML',
        cloud: 'Cloud Native',
        security: 'Security',
        devops: 'DevOps',
      },
    },

    // Trend data
    trend: {
      1: {
        title: 'LLM Agents',
        desc: 'Autonomous AI agents capable of complex task planning and execution are reshaping how we approach automation and productivity.',
      },
      2: {
        title: 'Edge Computing',
        desc: 'Moving computation closer to data sources reduces latency and bandwidth costs, enabling real-time applications at scale.',
      },
      3: {
        title: 'Zero Trust Security',
        desc: 'Never trust, always verify. Modern security architectures assume breach and verify every access request regardless of origin.',
      },
      4: {
        title: 'DeFi Protocols',
        desc: 'Decentralized finance continues to evolve with new protocols offering innovative financial services without intermediaries.',
      },
      5: {
        title: 'GitOps Workflows',
        desc: 'Using Git as the single source of truth for declarative infrastructure and applications, enabling version-controlled operations.',
      },
      6: {
        title: 'Multimodal AI',
        desc: 'Models that understand and generate across text, images, audio, and video are unlocking new possibilities in human-computer interaction.',
      },
      7: {
        title: 'WebAssembly',
        desc: 'Running high-performance code in the browser and beyond, enabling near-native execution speeds for web applications.',
      },
      8: {
        title: 'Supply Chain Security',
        desc: 'Protecting software supply chains from attacks with SBOMs, signed artifacts, and automated vulnerability scanning.',
      },
    },

    // CyberInput
    input: {
      placeholder: 'Enter command...',
    },

    // Blog posts
    post: {
      'rust-async-await': {
        title: 'Understanding Rust Async/Await - From Futures to Executors',
        excerpt: 'A deep dive into how Rust\'s async runtime works under the hood, exploring Futures, Pin, and the Tokio ecosystem.',
      },
      'kubernetes-patterns': {
        title: 'Essential Kubernetes Design Patterns for Production',
        excerpt: 'Learn the key patterns for building resilient, scalable microservices on Kubernetes - sidecar, ambassador, and more.',
      },
      'ai-agent-frameworks': {
        title: 'AI Agent Frameworks: LangChain vs AutoGPT vs Custom Solutions',
        excerpt: 'Comparing popular AI agent frameworks and when to build your own. A practical guide for developers entering the AI agent space.',
      },
    },

    // Language toggle
    lang: {
      switchTo: 'Switch to Chinese',
      label: 'EN',
    },
  },

  zh: {
    // Navigation
    nav: {
      home: '首页',
      blog: '博客',
      trends: '趋势',
      about: '关于',
    },

    // Hero Section
    hero: {
      subtitle1: '探索数字前沿...',
      subtitle2: 'Rust • AI • 云原生',
      subtitle3: '构建未来，逐行编码',
      subtitle4: '赛博朋克美学遇上现代科技',
      description: '一场穿越代码、AI与数字前沿的赛博朋克之旅。探索科技与创意的交汇点。',
      cta: {
        blog: '探索博客',
        trends: '查看趋势',
      },
      stat: {
        articles: '文章',
        categories: '分类',
        possibilities: '可能性',
        uptime: '在线时间',
      },
    },

    // Home Page
    home: {
      latestPosts: '最新文章',
      latestPostsDesc: '探索最新技术动态，从系统编程到AI前沿。',
      noPosts: '> 暂无文章，敬请期待！',
      viewAllPosts: '查看全部文章()',
      techTrends: '技术趋势',
      techTrendsDesc: '追踪科技行业脉搏。什么在崛起，什么在衰落，什么即将到来。',
      exploreTrends: '探索趋势()',
    },

    // Blog Page
    blog: {
      title: '博客档案馆',
      description: '深入探讨系统编程、AI、云原生技术等。',
      noPosts: '> 错误：未找到文章',
      waiting: '> 系统初始化() 等待内容加载...',
      totalPosts: '文章总数',
      topics: '主题',
      readMore: '阅读更多()',
      backToBlog: 'cd ../博客',
      eof: '> EOF // 文件结束',
    },

    // Blog Post Page
    blogPost: {
      eof: '> EOF // 文件结束',
    },

    // Trends Page
    trends: {
      title: '技术趋势',
      description: '追踪科技行业脉搏。什么在崛起，什么在衰落，什么即将到来。',
      marketLive: '市场实时',
      aiMomentum: 'AI 动能',
      cloudGrowth: '云端增长',
      securityDemand: '安全需求',
      devopsAdoption: 'DevOps 采用率',
    },

    // About Page
    about: {
      title: '关于系统',
      description: '代码背后。数字世界中的人性元素。',
      name: '霓虹架构师',
      role: '全栈开发者 • 系统工程师 • AI 爱好者',
      bio: '构建未来，一次提交一步。热衷于系统编程、分布式系统以及AI与人类创意的交汇。',
      skillsComment: '// 技术能力',
      systemsProgramming: '系统编程',
      systemsProgrammingDesc: '底层优化、内存管理以及使用 Rust 构建高效系统。',
      distributedSystems: '分布式系统',
      distributedSystemsDesc: 'Kubernetes、微服务以及构建弹性云原生应用。',
      aiSecurity: 'AI 与安全',
      aiSecurityDesc: '探索大语言模型、自主智能体以及AI的安全影响。',
      quote: '未来已来——只是尚未均匀分布。',
      quoteAuthor: '— 威廉·吉布森',
    },

    // Footer
    footer: {
      description: '探索科技与创意的交汇点。一场穿越代码、AI与数字前沿的赛博朋克之旅。',
      navigation: '导航',
      categories: '分类',
      connect: '联系',
      designedWith: '霓虹之光构建 by Brody',
      cat: {
        ai: 'AI 与机器学习',
        cloud: '云原生',
        security: '安全',
        devops: 'DevOps',
      },
    },

    // Trend data
    trend: {
      1: {
        title: 'LLM 智能体',
        desc: '能够进行复杂任务规划和执行的自主AI智能体正在重塑我们处理自动化和生产力提升的方式。',
      },
      2: {
        title: '边缘计算',
        desc: '将计算推向数据源附近，降低延迟和带宽成本，实现大规模实时应用。',
      },
      3: {
        title: '零信任安全',
        desc: '永不信任，始终验证。现代安全架构假设已被入侵，对每个访问请求无论来源都进行验证。',
      },
      4: {
        title: 'DeFi 协议',
        desc: '去中心化金融持续演进，新协议提供无需中介的创新金融服务。',
      },
      5: {
        title: 'GitOps 工作流',
        desc: '将 Git 作为声明式基础设施和应用的事实来源，实现版本控制的运维操作。',
      },
      6: {
        title: '多模态 AI',
        desc: '跨文本、图像、音频和视频理解与生成的模型正在开启人机交互的新可能。',
      },
      7: {
        title: 'WebAssembly',
        desc: '在浏览器及更广泛环境中运行高性能代码，实现接近原生的Web应用执行速度。',
      },
      8: {
        title: '供应链安全',
        desc: '通过SBOM、签名制品和自动漏洞扫描保护软件供应链免受攻击。',
      },
    },

    // CyberInput
    input: {
      placeholder: '输入命令...',
    },

    // Blog posts
    post: {
      'rust-async-await': {
        title: '深入理解 Rust Async/Await — 从 Future 到执行器',
        excerpt: '深入探讨 Rust 异步运行时的底层原理，探索 Future、Pin 和 Tokio 生态系统。',
      },
      'kubernetes-patterns': {
        title: '生产环境必备的 Kubernetes 设计模式',
        excerpt: '学习在 Kubernetes 上构建弹性可扩展微服务的关键模式——边车、大使等。',
      },
      'ai-agent-frameworks': {
        title: 'AI 智能体框架：LangChain vs AutoGPT vs 自建方案',
        excerpt: '对比主流 AI 智能体框架及何时自建。面向进入 AI 智能体领域的开发者实用指南。',
      },
    },

    // Language toggle
    lang: {
      switchTo: '切换英文',
      label: '中文',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // 初始化语言 - 只在客户端执行
  useEffect(() => {
    setIsClient(true);

    try {
      // 1. 从 URL 参数获取
      const urlParams = new URLSearchParams(window.location.search);
      const langFromUrl = urlParams.get('lang');

      if (langFromUrl === 'en' || langFromUrl === 'zh') {
        setLanguageState(langFromUrl);
        localStorage.setItem('neon-nexus-lang', langFromUrl);
        document.documentElement.lang = langFromUrl === 'zh' ? 'zh-CN' : 'en';
      } else {
        // 2. 从 localStorage 获取
        const saved = localStorage.getItem('neon-nexus-lang');
        if (saved === 'en' || saved === 'zh') {
          setLanguageState(saved);
          document.documentElement.lang = saved === 'zh' ? 'zh-CN' : 'en';
        } else {
          // 3. 检测浏览器语言
          const browserLang = navigator.language.toLowerCase();
          const defaultLang = browserLang.startsWith('zh') ? 'zh' : 'en';
          setLanguageState(defaultLang);
          document.documentElement.lang = defaultLang === 'zh' ? 'zh-CN' : 'en';
        }
      }
    } catch (error) {
      console.error('Error initializing language:', error);
    }
  }, []);

  // 切换语言 - 使用 useCallback 确保函数引用稳定
  const setLanguage = useCallback((lang: Language) => {
    console.log('[i18n] Language switching to:', lang);
    setLanguageState(lang);

    // 保存到 localStorage
    try {
      localStorage.setItem('neon-nexus-lang', lang);

      // 更新 HTML lang 属性
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

      // 更新 URL
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.pushState({}, '', url);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  }, []);

  // 翻译函数 - 使用 useCallback 确保函数引用稳定
  const t = useCallback((path: string, lang?: Language): string => {
    const keys = path.split('.');
    // 如果指定了语言则使用，否则使用当前语言
    const targetLang = lang || language;
    let value: any = translations[targetLang];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // 如果找不到路径，尝试在英文中查找
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return path; // 如果还是找不到，返回原始键
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : path;
  }, [language]);

  // 使用 useMemo 创建稳定的 context value，避免 hydration mismatch
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}