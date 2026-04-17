'use client';

import { useLanguage } from '../lib/i18n';
import GlitchText from "../components/GlitchText";
import TerminalWindow from "../components/TerminalWindow";
import CircuitBackground from "../components/CircuitBackground";
import { GitBranch as GithubIcon, MessageCircle as TwitterIcon, Mail, Terminal, Cpu, Globe, Shield } from "lucide-react";

const skills = [
  { name: "Rust", level: 90, color: "#ff8040" },
  { name: "Kubernetes", level: 85, color: "#00f0ff" },
  { name: "AI/ML", level: 75, color: "#ff00ff" },
  { name: "TypeScript", level: 95, color: "#00ff9d" },
  { name: "Cloud Native", level: 80, color: "#9d00ff" },
  { name: "Security", level: 70, color: "#f0ff00" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub", color: "#00f0ff" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter", color: "#ff00ff" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "#00ff9d" },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-12 relative">
      <CircuitBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <GlitchText text={t('about.title')} size="lg" color="purple" />
          <p className="mt-4 text-[#888] max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <TerminalWindow title="profile.dat" className="h-full">
            <div className="space-y-6">
              {/* Avatar placeholder */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#ff00ff] p-1">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                    <Terminal className="w-12 h-12 text-[#00f0ff]" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#e0e0e0] mb-2">{t('about.name')}</h2>
                <p className="text-[#00f0ff] terminal-text text-sm">{t('about.role')}</p>
              </div>

              <p className="text-[#888] text-center leading-relaxed">
                {t('about.bio')}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-[#333] flex items-center justify-center transition-all duration-300 hover:border-[#00f0ff] hover:shadow-[0_0_15px_#00f0ff]"
                      style={{ color: link.color }}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </TerminalWindow>

          {/* Skills Terminal */}
          <TerminalWindow title="skills.json" className="h-full">
            <div className="space-y-4">
              <p className="text-[#666] terminal-text text-xs mb-4">{t('about.skillsComment')}</p>

              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#e0e0e0] terminal-text">{skill.name}</span>
                    <span className="text-[#888]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>

        {/* Interests Section */}
        <div className="mt-8">
          <TerminalWindow title="interests.md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Cpu className="w-10 h-10 text-[#00f0ff] mx-auto mb-3" />
                <h3 className="text-[#e0e0e0] font-medium mb-2">{t('about.systemsProgramming')}</h3>
                <p className="text-sm text-[#888]">
                  {t('about.systemsProgrammingDesc')}
                </p>
              </div>
              <div className="text-center p-4">
                <Globe className="w-10 h-10 text-[#ff00ff] mx-auto mb-3" />
                <h3 className="text-[#e0e0e0] font-medium mb-2">{t('about.distributedSystems')}</h3>
                <p className="text-sm text-[#888]">
                  {t('about.distributedSystemsDesc')}
                </p>
              </div>
              <div className="text-center p-4">
                <Shield className="w-10 h-10 text-[#00ff9d] mx-auto mb-3" />
                <h3 className="text-[#e0e0e0] font-medium mb-2">{t('about.aiSecurity')}</h3>
                <p className="text-sm text-[#888]">
                  {t('about.aiSecurityDesc')}
                </p>
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Terminal Quote */}
        <div className="mt-8 text-center">
          <p className="terminal-text text-[#666] text-sm">
            <span className="text-[#00f0ff]">&gt;</span> {t('about.quote')}
          </p>
          <p className="text-[#444] text-xs mt-1">{t('about.quoteAuthor')}</p>
        </div>
      </div>
    </div>
  );
}
