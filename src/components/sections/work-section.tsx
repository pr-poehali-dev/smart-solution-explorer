import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const DIRECTIONS = [
  {
    number: "01",
    title: "Медицина и здравоохранение",
    category: "Врачи, хирурги, генетики, иммунологи",
    fact: "К 2030 году мировой рынок персонализированной медицины достигнет $3,2 трлн",
    icon: "HeartPulse",
    stat: "500 000+",
    statLabel: "вакансий ежегодно",
    direction: "left",
  },
  {
    number: "02",
    title: "Биотехнологии",
    category: "Биоинженеры, фармацевты, биохимики",
    fact: "Биотех — одна из самых быстрорастущих отраслей: рост 15% ежегодно с 2020 года",
    icon: "FlaskConical",
    stat: "15%",
    statLabel: "рост отрасли в год",
    direction: "right",
  },
  {
    number: "03",
    title: "Экология и природа",
    category: "Экологи, зоологи, природоохранные специалисты",
    fact: "Изменение климата сделало экологов одними из самых востребованных специалистов ООН",
    icon: "TreePine",
    stat: "8 млн",
    statLabel: "«зелёных» рабочих мест к 2030",
    direction: "left",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Направления
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Биология в основе</p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {DIRECTIONS.map((item, i) => (
            <DirectionCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DirectionCard({
  item,
  index,
  isVisible,
}: {
  item: (typeof DIRECTIONS)[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-foreground/10 pb-5 transition-all duration-700 hover:border-foreground/20 md:gap-8 md:pb-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "100%" : "92%",
      }}
    >
      <div className="flex items-center gap-3 md:gap-6">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50">
          {item.number}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/25 md:h-12 md:w-12">
          <Icon name={item.icon as "HeartPulse"} size={20} fallback="Leaf" />
        </div>
      </div>

      <div>
        <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl lg:text-3xl">
          {item.title}
        </h3>
        <p className="mb-1.5 font-mono text-xs text-foreground/50">{item.category}</p>
        <p className="max-w-lg text-xs leading-relaxed text-foreground/60 opacity-0 transition-all duration-500 group-hover:opacity-100 md:text-sm">
          {item.fact}
        </p>
      </div>

      <div className="hidden text-right md:block">
        <div className="font-sans text-2xl font-light text-primary lg:text-3xl">{item.stat}</div>
        <div className="font-mono text-xs text-foreground/40">{item.statLabel}</div>
      </div>
    </div>
  )
}
