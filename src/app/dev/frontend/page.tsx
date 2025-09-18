import Link from "next/link";

export default function FrontendPage() {
  const navItems = [
    { 
      title: "Screens", 
      href: "/dev/frontend/screens", 
      description: "UI layouts and screen designs for mobile and web applications"
    },
    { 
      title: "PRD", 
      href: "/dev/frontend/prd", 
      description: "Product requirements and specifications for frontend development"
    },
    { 
      title: "Components", 
      href: "/dev/frontend/components", 
      description: "Reusable UI components library with documentation and examples"
    },
    { 
      title: "State Management", 
      href: "/dev/frontend/state_management", 
      description: "Data flow patterns, state management solutions and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Frontend</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            React Native, Next.js, UI components, state management, and frontend architecture.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="border-2 border-primary rounded-lg p-6 h-full cursor-pointer transition-all hover:shadow-md hover:border-primary/80 flex flex-col">
                <div className="text-center flex-grow">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h2>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

   

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/dev" className="text-primary hover:underline">
            ← Back to Dev
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-4 text-center text-sm text-muted-foreground">
          <p>Aparte Documentation Portal • Built with care by Anjira Terry </p>
        </footer>
      </div>
    </div>
  );
}