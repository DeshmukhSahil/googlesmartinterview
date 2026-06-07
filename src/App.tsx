import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Terminal,
  Settings,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  FileText,
  AlertTriangle,
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [repoUrl, setRepoUrl] = useState("https://github.com/your-username/your-repo-name.git");
  const [activeTab, setActiveTab] = useState<"native" | "cli">("native");
  const [isCopiedReadme, setIsCopiedReadme] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommands = [
    { label: "Initialize Git Repository", cmd: "git init" },
    { label: "Stage Project Files", cmd: "git add ." },
    { label: "Create Your First Commit", cmd: 'git commit -m "feat: initial commit from google ai studio"' },
    { label: "Establish Main Branch", cmd: "git branch -M main" },
    { label: "Add GitHub Remote Origin", cmd: `git remote add origin ${repoUrl}` },
    { label: "Push to Main Branch", cmd: "git push -u origin main" }
  ];

  const readmeTemplate = `# GitHub Companion App

A modern, highly-polished web application designed in Google AI Studio.

## 🚀 Getting Started

1. **Clone the Repository:**
   \`\`\`bash
   git clone ${repoUrl || "[YOUR_REPOSITORY_URL]"}
   cd ${repoUrl ? repoUrl.split("/").pop()?.replace(".git", "") : "repository"}
   \`\`\`

2. **Install Dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🛠️ Tech Stack
- **Framework:** React / TypeScript / Vite
- **Styling:** Tailwind CSS
- **Animations:** Motion
- **Icons:** Lucide React
`;

  const copyReadme = () => {
    navigator.clipboard.writeText(readmeTemplate);
    setIsCopiedReadme(true);
    setTimeout(() => setIsCopiedReadme(false), 2000);
  };

  return (
    <div id="github-companion-app" className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Header Banner */}
      <header id="app-header" className="border-b border-neutral-200/60 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-neutral-900 text-white shadow-sm">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
                GitHub Companion
                <span className="text-[10px] uppercase font-mono tracking-widest bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200">
                  Ready
                </span>
              </h1>
              <p className="text-xs text-neutral-500">Google AI Studio Setup & Workspace Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/new"
              target="_blank"
              rel="prefetch"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-xs"
            >
              Open GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Left Section (Tabs & Interactive Guides) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Selector */}
            <div className="bg-white p-1 rounded-xl border border-neutral-200/70 flex gap-1">
              <button
                onClick={() => setActiveTab("native")}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === "native"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Native AI Studio Export (Recommended)
              </button>
              <button
                onClick={() => setActiveTab("cli")}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === "cli"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                <Terminal className="w-4 h-4" />
                Manual Terminal / Git Push
              </button>
            </div>

            {/* Native Tab Content */}
            {activeTab === "native" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-neutral-200/70 p-6 space-y-6 shadow-xs"
              >
                <div>
                  <h2 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Perfect Synchronous Sync in 1-Click
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Google AI Studio natively configures and exports your entire working codebase directly to your GitHub profile. All files, commits, and setups are fully automated.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-neutral-50/50 rounded-lg border border-neutral-200/40">
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center font-mono text-xs font-semibold text-neutral-600 shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-800">Identify the settings panel</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        In your AI Studio workspace top-right navigation or sidebar menu, click the **Settings** cogwheel or the **Export** button.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-neutral-50/50 rounded-lg border border-neutral-200/40">
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center font-mono text-xs font-semibold text-neutral-600 shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-800">Choose "Export to GitHub"</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Click the **Export to GitHub** action. AI Studio will securely prompt a popup asking for repository initialization parameters on your profile.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-neutral-50/50 rounded-lg border border-neutral-200/40">
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center font-mono text-xs font-semibold text-neutral-600 shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-800">Assign Details & Start Coding</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Select whether you want a **Public** or **Private** empty repository, finalize the repository name, and click export.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                    Once synced, any changes we commit here will automatically follow your preferred stream or can be downloaded manually.
                  </p>
                </div>
              </motion.div>
            )}

            {/* CLI Tab Content */}
            {activeTab === "cli" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-neutral-200/70 p-6 space-y-6 shadow-xs"
              >
                <div className="space-y-3">
                  <div>
                    <h2 className="text-lg font-medium tracking-tight text-neutral-900">
                      Step-by-Step Terminal Execution
                    </h2>
                    <p className="text-sm text-neutral-500">
                      If you've downloaded the workspace as a ZIP, use these commands on your local machine to link the project to an empty GitHub repository.
                    </p>
                  </div>

                  <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/80 space-y-1.5">
                    <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
                      Change Target GitHub URL
                    </label>
                    <input
                      type="text"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                      className="w-full text-xs font-mono px-3 py-2 bg-white rounded border border-neutral-200 focus:outline-hidden focus:ring-1 focus:ring-neutral-800"
                      placeholder="https://github.com/username/your-repo.git"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {cliCommands.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-neutral-700 block">
                          {index + 1}. {item.label}
                        </span>
                        <button
                          onClick={() => handleCopy(item.cmd, index)}
                          className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors px-1.5 py-0.5 rounded hover:bg-neutral-100"
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-neutral-900 p-3.5 rounded-lg font-mono text-[11px] tracking-wide text-neutral-300 border border-neutral-800 select-all overflow-x-auto">
                        {item.cmd}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Generated README Showcase */}
            <div className="bg-white rounded-xl border border-neutral-200/70 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium tracking-tight text-neutral-900">
                    Generated README.md Template
                  </h3>
                  <p className="text-xs text-neutral-500">Perfect boilerplate to commit alongside your codebase.</p>
                </div>
                <button
                  onClick={copyReadme}
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
                >
                  {isCopiedReadme ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied README
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5" /> Copy Boilerplate
                    </>
                  )}
                </button>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 font-mono text-[11px] text-neutral-600 max-h-48 overflow-y-auto whitespace-pre-wrap">
                {readmeTemplate}
              </div>
            </div>

          </div>

          {/* Right Sidebar Checklist */}
          <div className="space-y-8">
            {/* Checklist Card */}
            <div className="bg-white rounded-xl border border-neutral-200/70 p-6 space-y-6 shadow-xs">
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Project Readiness Audit
              </h3>

              <div className="space-y-4">
                {/* 1. Gitignore */}
                <div className="space-y-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-neutral-800">.gitignore matches standard guidelines</p>
                      <p className="text-[11px] text-neutral-500 leading-normal">
                        Excludes large built directories such as <code className="font-mono bg-neutral-100 p-0.5 rounded">node_modules/</code> and <code className="font-mono bg-neutral-100 p-0.5 rounded">dist/</code> correctly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Env secrets check */}
                <div className="space-y-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-neutral-800">.env.example is present</p>
                      <p className="text-[11px] text-neutral-500 leading-normal">
                        Guarantees users know which environment variables are needed while keeping actual keys hidden.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Security Warning */}
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 flex gap-2.5 items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-amber-800">API Key Precaution</h4>
                    <p className="text-[10px] text-amber-700 leading-normal mt-0.5">
                      Never hardcode secrets like your GEMINI_API_KEY directly into files or commits. Use process.env on servers or VITE_ prefix for public client config!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions and Help Card */}
            <div className="bg-white rounded-xl border border-neutral-200/70 p-6 space-y-4 shadow-xs">
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-neutral-500" />
                Frequently Asked
              </h3>
              
              <div className="space-y-3.5">
                <div>
                  <h4 className="text-xs font-medium text-neutral-800">Can GitHub sync back modifications here?</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-normal">
                    AI Studio connects seamlessly. Modifying the workspace locally or on GitHub can be easily synced back by uploading files directly or downloading the code ZIP package from the Settings menu.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-neutral-800">Where are my environment variables?</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-normal">
                    At runtime, Google AI Studio automatically handles injection. Local environments require creating a <code className="font-mono bg-neutral-100 px-0.5 rounded">.env</code> file containing your custom keys.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Elegant Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 mt-16">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Google AI Studio Applet. Ready for deployment.</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-600 transition-colors">GitHub Platform</a>
            <span>•</span>
            <a href="https://ai.studio/build" target="_blank" rel="noreferrer" className="hover:text-neutral-600 transition-colors">AI Studio Build</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
