import Link from "next/link";

export default function DevPage() {
  const devCards = [
    {
      title: "Frontend",
      href: "/dev/frontend",
      description: "React Native, Next.js, UI components, state management, and frontend architecture.",
      tags: ["Screens", "PRD", "Components", "State"],
      active: true
    },
    {
      title: "Backend",
      href: "#",
      description: "Server architecture, APIs, database management, and server-side logic.",
      tags: ["Server", "PRD", "Authentication", "Middleware"],
      active: false
    },
    {
      title: "APIs",
      href: "#",
      description: "RESTful APIs, GraphQL endpoints, webhooks, and integration documentation.",
      tags: ["Routes", "Controllers", "Webhooks", "Documentation"],
      active: false
    },
    {
      title: "Database",
      href: "#",
      description: "Database schemas, queries, migrations, and data management practices.",
      tags: ["Supabase", "Schemas", "Migrations", "Relations"],
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">DEV</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical documentation, API references, and development guidelines for engineers.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devCards.map((card, index) => {
            const CardContent = (
              <div className={`border-2 ${card.active ? 'border-primary' : 'border-muted'} rounded-lg p-6 h-full cursor-pointer transition-all hover:shadow-md ${card.active ? 'hover:border-primary/80' : ''} flex flex-col`}>
                <div className="text-center flex-grow">
                  <h2 className={`text-2xl font-semibold ${card.active ? 'text-foreground' : 'text-muted-foreground'} mb-2`}>
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {card.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm text-center">
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

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-4 text-center text-sm text-muted-foreground">
          <p>Aparte Documentation Portal • Built with care by Anjira Terry</p>
        </footer>
      </div>
    </div>
  );
}