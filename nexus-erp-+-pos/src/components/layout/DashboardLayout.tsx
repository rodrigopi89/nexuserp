import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useWhiteLabel } from '../../context/WhiteLabelContext';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  DollarSign, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
  Search,
  Utensils,
  Wrench,
  Code,
  Shield
} from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pos', label: 'PDV / Vendas', icon: ShoppingCart },
  { id: 'stock', label: 'Estoque', icon: Package },
  { id: 'financial', label: 'Financeiro', icon: DollarSign },
  { id: 'crm', label: 'CRM / Clientes', icon: Users },
  { id: 'delivery', label: 'Delivery', icon: Utensils },
  { id: 'os', label: 'Ordens de Serviço', icon: Wrench },
  { id: 'fiscal', label: 'Fiscal', icon: FileText },
  { id: 'api', label: 'API Pública', icon: Code },
  { id: 'partners', label: 'Parceiros', icon: Shield },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export default function DashboardLayout({ 
  children, 
  activeTab, 
  setActiveTab 
}: { 
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const { profile, logout } = useAuth();
  const { config } = useWhiteLabel();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-background overflow-hidden text-foreground">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="bg-black/40 backdrop-blur-md border-r border-white/5 flex flex-col z-20"
      >
        <div className="p-6 flex items-center gap-3 h-20">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <span className="text-white font-black text-xl">N</span>
          </div>
          {isSidebarOpen && (
            <span className="font-extrabold text-xl tracking-tighter text-white">
              NEXUS<span className="font-light text-primary">PRO</span>
            </span>
          )}
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === item.id 
                    ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors ${activeTab === item.id ? 'text-primary' : 'text-slate-500 group-hover:text-white'}`} />
                {isSidebarOpen && (
                  <span className="font-semibold text-sm flex-1 text-left tracking-tight">{item.label}</span>
                )}
              </button>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-white/5">
          <div className="mb-4 px-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
              {isSidebarOpen && <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Matriz São Paulo</span>}
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="font-semibold text-sm">Sair do Sistema</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-transparent border-b border-white/5 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-slate-400 hover:text-white hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="header-title">
              <h1 className="text-xl font-bold text-white tracking-tight">Painel Administrativo</h1>
              <p className="text-xs text-slate-500 font-medium">Monitoramento em tempo real de suas unidades</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                White Label: Ativo
              </div>
              <div className="px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                Plano Enterprise
              </div>
            </div>
            
            <div className="h-8 w-[1px] bg-white/5 mx-2"></div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none">{profile?.displayName || 'Usuário'}</p>
                <p className="text-[10px] text-primary mt-1 uppercase tracking-widest font-black">Senior Architect</p>
              </div>
              <div className="relative">
                <img 
                  src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.displayName || 'U'}`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-xl border border-white/10 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background"></span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

