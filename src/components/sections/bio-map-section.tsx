import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const INTERESTS = [
  { id: "all", label: "Все профессии", icon: "LayoutGrid" },
  { id: "people", label: "Люблю помогать людям", icon: "HeartHandshake" },
  { id: "research", label: "Люблю исследования", icon: "Microscope" },
  { id: "tech", label: "Люблю технологии", icon: "Cpu" },
  { id: "nature", label: "Люблю природу", icon: "TreePine" },
  { id: "creative", label: "Люблю творчество", icon: "Sparkles" },
]

const ALL_PROFESSIONS = [
  {
    title: "Врач-генетик",
    description: "Диагностирует наследственные болезни и подбирает терапию",
    salary: "120–250 000 ₽",
    demand: "Высокий",
    interests: ["people", "research"],
    emoji: "🧬",
  },
  {
    title: "Биоинформатик",
    description: "Анализирует геномные данные с помощью ИИ и алгоритмов",
    salary: "180–350 000 ₽",
    demand: "Очень высокий",
    interests: ["research", "tech"],
    emoji: "💻",
  },
  {
    title: "Эколог",
    description: "Защищает экосистемы и разрабатывает природоохранные программы",
    salary: "70–150 000 ₽",
    demand: "Высокий",
    interests: ["nature", "research"],
    emoji: "🌿",
  },
  {
    title: "Биоинженер",
    description: "Создаёт искусственные органы и биоматериалы для медицины",
    salary: "150–300 000 ₽",
    demand: "Высокий",
    interests: ["tech", "research", "people"],
    emoji: "🦾",
  },
  {
    title: "Нейробиолог",
    description: "Исследует мозг и нервную систему, разрабатывает нейроинтерфейсы",
    salary: "130–280 000 ₽",
    demand: "Высокий",
    interests: ["research", "tech"],
    emoji: "🧠",
  },
  {
    title: "Биотехнолог",
    description: "Создаёт лекарства, вакцины и экологичные материалы с помощью живых организмов",
    salary: "100–200 000 ₽",
    demand: "Высокий",
    interests: ["research", "tech", "nature"],
    emoji: "⚗️",
  },
  {
    title: "Зоолог",
    description: "Изучает животных, их поведение и охрану редких видов",
    salary: "60–120 000 ₽",
    demand: "Средний",
    interests: ["nature", "research"],
    emoji: "🦁",
  },
  {
    title: "Фармаколог",
    description: "Разрабатывает и тестирует новые лекарственные препараты",
    salary: "110–230 000 ₽",
    demand: "Высокий",
    interests: ["research", "people"],
    emoji: "💊",
  },
  {
    title: "Научный иллюстратор",
    description: "Создаёт визуализации клеток, организмов и биологических процессов",
    salary: "80–160 000 ₽",
    demand: "Средний",
    interests: ["creative", "research"],
    emoji: "🎨",
  },
  {
    title: "Агробиолог",
    description: "Улучшает сорта растений и разрабатывает технологии устойчивого сельского хозяйства",
    salary: "80–180 000 ₽",
    demand: "Высокий",
    interests: ["nature", "tech"],
    emoji: "🌾",
  },
  {
    title: "Биоэтик",
    description: "Оценивает этические вопросы в биомедицине: клонирование, ГМО, трансплантология",
    salary: "90–170 000 ₽",
    demand: "Растущий",
    interests: ["people", "creative"],
    emoji: "⚖️",
  },
  {
    title: "Маринбиолог",
    description: "Изучает морские экосистемы, охраняет океан и его обитателей",
    salary: "75–140 000 ₽",
    demand: "Средний",
    interests: ["nature", "research"],
    emoji: "🐠",
  },
]

const DEMAND_COLOR: Record<string, string> = {
  "Очень высокий": "text-emerald-400",
  "Высокий": "text-green-400",
  "Растущий": "text-lime-400",
  "Средний": "text-yellow-400",
}

export function BioMapSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeInterest, setActiveInterest] = useState("all")

  const filtered = ALL_PROFESSIONS.filter(
    (p) => activeInterest === "all" || p.interests.includes(activeInterest)
  )

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 pb-8 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        {/* Header */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Карта профессий
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Найди свою нишу</p>
        </div>

        {/* Filter chips */}
        <div
          className={`mb-6 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {INTERESTS.map((interest) => (
            <button
              key={interest.id}
              onClick={() => setActiveInterest(interest.id)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs transition-all duration-300 ${
                activeInterest === interest.id
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-foreground/15 bg-foreground/5 text-foreground/60 hover:border-foreground/30 hover:text-foreground/90"
              }`}
            >
              <Icon name={interest.icon as "LayoutGrid"} size={12} fallback="Circle" />
              {interest.label}
            </button>
          ))}
        </div>

        {/* Cards grid — scrollable */}
        <div
          className={`flex-1 overflow-y-auto transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms", scrollbarWidth: "none" }}
        >
          <div className="grid grid-cols-2 gap-3 pb-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((prof, i) => (
              <div
                key={prof.title}
                className="group flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{prof.emoji}</span>
                  <span className={`font-mono text-[10px] ${DEMAND_COLOR[prof.demand] ?? "text-foreground/40"}`}>
                    {prof.demand}
                  </span>
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-sm font-medium text-foreground md:text-base">{prof.title}</h3>
                  <p className="text-xs leading-relaxed text-foreground/60">{prof.description}</p>
                </div>
                <div className="mt-auto border-t border-foreground/10 pt-2">
                  <p className="font-mono text-xs text-primary/80">{prof.salary}</p>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-foreground/40">
                <Icon name="SearchX" size={40} fallback="Search" />
                <p className="mt-3 font-mono text-sm">Нет профессий по этому фильтру</p>
              </div>
            )}
          </div>
        </div>

        {/* Counter */}
        <div
          className={`mt-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-mono text-xs text-foreground/40">
            Показано: <span className="text-primary">{filtered.length}</span> из {ALL_PROFESSIONS.length} профессий
          </p>
        </div>
      </div>
    </section>
  )
}
