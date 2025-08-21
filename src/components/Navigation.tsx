import { Users, BarChart3, FileText, Users2, Settings } from "lucide-react";

export function Navigation() {
  const menuItems = [
    { icon: BarChart3, label: "Operações", active: false },
    { icon: BarChart3, label: "Análise", active: true },
    { icon: FileText, label: "Cadastros", active: false },
    { icon: Users2, label: "Terceiros", active: false },
    { icon: Settings, label: "Configurações", active: false },
    { icon: Users, label: "Admin", active: false },
  ];

  return (
    <div className="bg-card border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-foreground">GAM</div>
            <div className="text-sm text-muted-foreground">Crono 3.2.1</div>
          </div>
          
          <nav className="flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">Empresa:</div>
          <select className="bg-muted border border-border rounded px-3 py-1 text-sm">
            <option>Fartura</option>
          </select>
        </div>
      </div>
    </div>
  );
}