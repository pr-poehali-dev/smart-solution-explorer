import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const PROFESSIONS = [
  {
    title: "Генетик",
    icon: "Dna",
    tag: "Медицина",
    salary: "от 120 000 ₽",
    description:
      "Изучает наследственность и изменчивость организмов. Помогает в диагностике редких болезней, создании персонализированных лекарств и генной терапии.",
    skills: ["Молекулярная биология", "Биохимия", "Биоинформатика"],
    direction: "top",
  },
  {
    title: "Биоинженер",
    icon: "FlaskConical",
    tag: "Биотех",
    salary: "от 150 000 ₽",
    description:
      "Разрабатывает искусственные органы, биопротезы и медицинское оборудование. Работает на стыке биологии, химии и инженерии.",
    skills: ["Биоматериалы", "3D-биопечать", "Клеточные технологии"],
    direction: "right",
  },
  {
    title: "Эколог",
    icon: "Leaf",
    tag: "Экология",
    salary: "от 70 000 ₽",
    description:
      "Оценивает влияние промышленности на природу, разрабатывает стратегии сохранения биоразнообразия и устойчивого развития территорий.",
    skills: ["Мониторинг экосистем", "ГИС-системы", "Экологический аудит"],
    direction: "left",
  },
  {
    title: "Биоинформатик",
    icon: "BrainCircuit",
    tag: "IT + Наука",
    salary: "от 180 000 ₽",
    description:
      "Анализирует большие данные о ДНК, белках и клетках с помощью алгоритмов и ИИ. Одна из самых востребованных профессий будущего.",
    skills: ["Python / R", "Геномика", "Машинное обучение"],
    direction: "bottom",
  },
  {
    title: "Биотехнолог",
    icon: "Microscope",
    tag: "Производство",
    salary: "от 100 000 ₽",
    description:
      "Создаёт новые продукты с помощью живых организмов: антибиотики, вакцины, ферменты, биотопливо и экологичные материалы.",
    skills: ["Микробиология", "Ферментация", "Контроль качества"],
    direction: "top",
  },
  {
    title: "Нейробиолог",
    icon: "Brain",
    tag: "Нейронаука",
    salary: "от 130 000 ₽",
    description:
      "Исследует мозг и нервную систему. Результаты его работы используются в лечении болезни Альцгеймера, создании нейроинтерфейсов и ИИ.",
    skills: ["Нейрофизиология", "МРТ-анализ", "Нейрофармакология"],
    direction: "right",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Профессии
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Где нужна биология</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {PROFESSIONS.map((prof, i) => (
            <ProfessionCard key={i} prof={prof} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfessionCard({
  prof,
  index,
  isVisible,
}: {
  prof: (typeof PROFESSIONS)[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (prof.direction) {
        case "left": return "-translate-x-12 opacity-0"
        case "right": return "translate-x-12 opacity-0"
        case "top": return "-translate-y-12 opacity-0"
        case "bottom": return "translate-y-12 opacity-0"
        default: return "opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 md:gap-3 md:p-5 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary md:h-10 md:w-10">
          <Icon name={prof.icon as "Dna"} size={18} fallback="FlaskConical" />
        </div>
        <span className="rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-[10px] text-foreground/50">
          {prof.tag}
        </span>
      </div>

      <div>
        <h3 className="mb-1 font-sans text-lg font-light text-foreground md:text-xl">{prof.title}</h3>
        <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">{prof.description}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1 pt-1">
        {prof.skills.map((skill) => (
          <span key={skill} className="rounded bg-foreground/8 px-1.5 py-0.5 font-mono text-[10px] text-foreground/50">
            {skill}
          </span>
        ))}
      </div>

      <div className="border-t border-foreground/10 pt-2">
        <p className="font-mono text-xs text-primary/80">{prof.salary}</p>
      </div>
    </div>
  )
}
