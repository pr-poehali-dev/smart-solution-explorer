import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const UNIVERSITIES = [
  {
    id: "mgu",
    name: "МГУ им. Ломоносова",
    city: "Москва",
    faculties: ["Биологический ф-т", "Факультет биоинженерии"],
    score: 96,
    budget: true,
    x: 47.5,
    y: 44,
  },
  {
    id: "spbu",
    name: "СПбГУ",
    city: "Санкт-Петербург",
    faculties: ["Институт наук о Земле", "Кафедра генетики"],
    score: 93,
    budget: true,
    x: 39,
    y: 30,
  },
  {
    id: "nsu",
    name: "НГУ (Новосибирск)",
    city: "Новосибирск",
    faculties: ["Факультет естественных наук", "Биология и экология"],
    score: 89,
    budget: true,
    x: 68,
    y: 42,
  },
  {
    id: "kfu",
    name: "КФУ (Казань)",
    city: "Казань",
    faculties: ["Институт фундаментальной медицины", "Биологический ф-т"],
    score: 85,
    budget: true,
    x: 54,
    y: 42,
  },
  {
    id: "urfu",
    name: "УрФУ (Екатеринбург)",
    city: "Екатеринбург",
    faculties: ["Химико-технологический институт", "Экология"],
    score: 82,
    budget: true,
    x: 60,
    y: 39,
  },
  {
    id: "sfu",
    name: "СФУ (Красноярск)",
    city: "Красноярск",
    faculties: ["Институт экологии и географии", "Биология"],
    score: 78,
    budget: true,
    x: 73,
    y: 37,
  },
  {
    id: "dfu",
    name: "ДВФУ (Владивосток)",
    city: "Владивосток",
    faculties: ["Школа биомедицины", "Морская биология"],
    score: 76,
    budget: true,
    x: 92,
    y: 53,
  },
  {
    id: "rnd",
    name: "ЮФУ (Ростов-на-Дону)",
    city: "Ростов-на-Дону",
    faculties: ["Академия биологии и биотехнологии", "Экология"],
    score: 80,
    budget: true,
    x: 48,
    y: 54,
  },
]

// Упрощённый контур России как SVG path (схематичный, читаемый)
const RUSSIA_PATH = `
  M 105,28 L 115,22 L 128,18 L 140,15 L 155,12 L 168,10 L 180,8 L 192,7 L 205,8
  L 218,10 L 228,12 L 238,14 L 248,18 L 258,22 L 265,28 L 270,35 L 272,42
  L 268,50 L 260,56 L 252,58 L 248,65 L 250,72 L 255,78 L 258,85 L 255,92
  L 248,96 L 240,98 L 232,96 L 225,92 L 218,95 L 212,100 L 205,104 L 198,106
  L 190,104 L 182,100 L 175,98 L 168,100 L 162,106 L 156,110 L 148,112
  L 140,110 L 132,108 L 124,112 L 118,118 L 112,120 L 106,118 L 100,114
  L 95,108 L 92,100 L 90,92 L 88,84 L 86,76 L 84,68 L 82,60 L 80,52
  L 78,44 L 80,36 L 86,30 L 95,28 Z
`

export function UniversitiesSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeId, setActiveId] = useState<string | null>(null)

  const active = UNIVERSITIES.find((u) => u.id === activeId)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 pb-6 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        {/* Header */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Вузы России
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Куда поступить с биологией</p>
        </div>

        <div className="flex flex-1 gap-6 overflow-hidden">
          {/* Map */}
          <div
            className={`relative flex-1 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <svg
              viewBox="0 0 380 145"
              className="h-full w-full"
              style={{ padding: "12px" }}
            >
              {/* Фон карты — схематичный контур России */}
              <ellipse cx="190" cy="72" rx="168" ry="62" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

              {/* Западная часть */}
              <path
                d="M 85,30 C 90,22 100,18 112,16 C 124,14 136,13 148,14 C 160,15 168,18 172,25 C 176,32 174,42 170,50 C 166,58 158,64 150,68 C 142,72 132,74 122,72 C 112,70 102,64 96,56 C 90,48 82,40 85,30 Z"
                fill="rgba(34,197,94,0.08)"
                stroke="rgba(34,197,94,0.2)"
                strokeWidth="0.5"
              />
              {/* Центральная часть */}
              <path
                d="M 170,20 C 185,14 205,12 220,14 C 235,16 248,22 255,32 C 262,42 260,55 252,64 C 244,73 230,78 216,78 C 202,78 188,72 180,62 C 172,52 168,34 170,20 Z"
                fill="rgba(34,197,94,0.06)"
                stroke="rgba(34,197,94,0.15)"
                strokeWidth="0.5"
              />
              {/* Уральский регион */}
              <path
                d="M 218,16 C 232,12 248,14 258,22 C 268,30 272,44 268,56 C 264,68 252,76 240,78 C 228,80 216,74 210,64 C 204,54 206,40 212,30 C 215,24 216,18 218,16 Z"
                fill="rgba(34,197,94,0.05)"
                stroke="rgba(34,197,94,0.12)"
                strokeWidth="0.5"
              />
              {/* Сибирь */}
              <path
                d="M 255,15 C 272,10 295,12 312,20 C 329,28 338,42 335,58 C 332,72 318,82 302,84 C 286,86 270,78 260,66 C 250,54 248,38 253,26 C 254,20 254,17 255,15 Z"
                fill="rgba(34,197,94,0.04)"
                stroke="rgba(34,197,94,0.1)"
                strokeWidth="0.5"
              />
              {/* Дальний Восток */}
              <path
                d="M 310,18 C 328,12 348,18 358,30 C 368,42 366,60 356,72 C 346,84 328,88 312,84 C 296,80 285,68 286,54 C 287,40 295,26 310,18 Z"
                fill="rgba(34,197,94,0.04)"
                stroke="rgba(34,197,94,0.1)"
                strokeWidth="0.5"
              />

              {/* Сетка координат — лёгкие линии */}
              {[0.25, 0.5, 0.75].map((t) => (
                <line
                  key={`h${t}`}
                  x1="20" y1={145 * t}
                  x2="360" y2={145 * t}
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.5"
                  strokeDasharray="4,6"
                />
              ))}
              {[0.2, 0.4, 0.6, 0.8].map((t) => (
                <line
                  key={`v${t}`}
                  x1={380 * t} y1="10"
                  x2={380 * t} y2="135"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.5"
                  strokeDasharray="4,6"
                />
              ))}

              {/* Точки вузов */}
              {UNIVERSITIES.map((u) => {
                const cx = (u.x / 100) * 360 + 10
                const cy = (u.y / 100) * 125 + 10
                const isActive = activeId === u.id

                return (
                  <g key={u.id} onClick={() => setActiveId(isActive ? null : u.id)} style={{ cursor: "pointer" }}>
                    {/* Пульс */}
                    {isActive && (
                      <circle cx={cx} cy={cy} r="12" fill="rgba(34,197,94,0.15)" className="animate-ping" style={{ animationDuration: "1.5s" }} />
                    )}
                    {/* Внешнее кольцо */}
                    <circle
                      cx={cx} cy={cy} r={isActive ? 8 : 6}
                      fill={isActive ? "rgba(34,197,94,0.3)" : "rgba(34,197,94,0.1)"}
                      stroke={isActive ? "rgba(34,197,94,0.9)" : "rgba(34,197,94,0.5)"}
                      strokeWidth="1"
                      className="transition-all duration-300"
                    />
                    {/* Центральная точка */}
                    <circle
                      cx={cx} cy={cy} r={isActive ? 3.5 : 2.5}
                      fill={isActive ? "#4ade80" : "#22c55e"}
                      className="transition-all duration-300"
                    />
                    {/* Подпись города */}
                    <text
                      x={cx} y={cy - 10}
                      textAnchor="middle"
                      fontSize="5"
                      fill={isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)"}
                      className="transition-all duration-300 select-none"
                      style={{ fontFamily: "monospace" }}
                    >
                      {u.city}
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="font-mono text-[10px] text-foreground/40">— нажмите на точку</span>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`flex w-64 flex-col gap-3 transition-all duration-700 lg:w-72 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            {active ? (
              /* Карточка выбранного вуза */
              <div className="flex flex-col gap-4 rounded-xl border border-primary/30 bg-primary/10 p-5 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-primary/70">{active.city}</p>
                    <h3 className="mt-1 font-sans text-lg font-light leading-tight text-foreground">
                      {active.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveId(null)}
                    className="text-foreground/30 transition-colors hover:text-foreground/60"
                  >
                    <Icon name="X" size={16} fallback="X" />
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs text-foreground/50">Направления:</p>
                  {active.faculties.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      <span className="text-sm leading-snug text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-foreground/10 pt-3">
                  <div>
                    <p className="font-mono text-xs text-foreground/40">Мин. балл ЕГЭ</p>
                    <p className="font-sans text-2xl font-light text-primary">{active.score}</p>
                  </div>
                  {active.budget && (
                    <span className="rounded-full border border-primary/30 px-3 py-1 font-mono text-xs text-primary/70">
                      Есть бюджет
                    </span>
                  )}
                </div>
              </div>
            ) : (
              /* Подсказка */
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-foreground/10 bg-foreground/5 p-6 text-center">
                <Icon name="MapPin" size={28} fallback="Map" />
                <p className="font-mono text-xs text-foreground/50">
                  Нажмите на любую точку на карте, чтобы узнать о вузе
                </p>
              </div>
            )}

            {/* Список всех вузов */}
            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
              <div className="space-y-1.5">
                {UNIVERSITIES.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setActiveId(activeId === u.id ? null : u.id)}
                    className={`w-full rounded-lg border px-3 py-2.5 text-left transition-all duration-200 ${
                      activeId === u.id
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-foreground/8 bg-foreground/3 text-foreground/70 hover:border-foreground/20 hover:bg-foreground/8"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium leading-tight">{u.name}</p>
                        <p className="font-mono text-[10px] text-foreground/40">{u.city}</p>
                      </div>
                      <span className={`font-mono text-xs ${activeId === u.id ? "text-primary" : "text-foreground/30"}`}>
                        {u.score}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
