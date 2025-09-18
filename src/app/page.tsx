import Link from "next/link";

export default function Home() {
  const homeCards = [
    {
      title: "DEV",
      href: "/dev",
      description: "Technical documentation, API references, and development guidelines for engineers.",
      tags: ["Frontend", "Backend", "API", "Database"],
      active: true,
      borderColor: "border-primary",
      textColor: "text-foreground",
      tagColor: "bg-primary/10 text-primary"
    },
    {
      title: "DESIGN",
      href: "#",
      description: "Design system, UI components, and interaction patterns for designers.",
      tags: ["Components", "System", "Prototyping", "Assets"],
      active: false,
      borderColor: "border-muted",
      textColor: "text-muted-foreground",
      tagColor: "bg-muted text-muted-foreground",
      opacity: "opacity-70"
    },
    {
      title: "BRAND",
      href: "#",
      description: "Brand guidelines, logos, and marketing resources for consistent branding.",
      tags: ["Logo", "Colors", "Typography", "Tone"],
      active: false,
      borderColor: "border-muted",
      textColor: "text-muted-foreground",
      tagColor: "bg-muted text-muted-foreground",
      opacity: "opacity-70"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">APARTE DOCS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to Aparte documentation hub. Explore our development guidelines, 
            design system, and brand resources to build consistent and beautiful experiences.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeCards.map((card, index) => {
            const CardContent = (
              <div className={`border-2 ${card.borderColor} rounded-lg p-6 h-full cursor-pointer transition-all hover:shadow-md ${card.active ? 'hover:border-primary/80' : ''} flex flex-col ${card.opacity || ''}`}>
                <div className="text-center flex-grow">
                  <h2 className={`text-2xl font-semibold ${card.textColor} mb-2`}>
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {card.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`${card.tagColor} px-3 py-1 rounded-full text-sm text-center`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return card.active ? (
              <Link key={index} href={card.href}>
                {CardContent}
              </Link>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Aparte Docs • Crafted with Care by Anjira Terry</p>
        </footer>
      </div>
    </div>
  );
}