import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { WhiteLabelProvider } from './context/WhiteLabelContext';
import DashboardLayout from './components/layout/DashboardLayout';
import { Button } from './components/ui/button';
import { LogIn } from 'lucide-react';

// Modules
import DashboardModule from './components/modules/DashboardModule';
import POSModule from './components/modules/POSModule';
import StockModule from './components/modules/StockModule';
import FinancialModule from './components/modules/FinancialModule';
import CRMModule from './components/modules/CRMModule';
import FiscalModule from './components/modules/FiscalModule';
import SettingsModule from './components/modules/SettingsModule';
import DeliveryModule from './components/modules/DeliveryModule';
import WorkOrderModule from './components/modules/WorkOrderModule';
import PublicAPIModule from './components/modules/PublicAPIModule';
import PartnerPanelModule from './components/modules/PartnerPanelModule';

function AppContent() {
  const { user, loading, login } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium animate-pulse">Carregando Nexus ERP...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="bg-card/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl w-full max-w-md z-10 text-center">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(59,130,246,0.4)] rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-white font-black text-4xl">N</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Nexus ERP</h1>
          <p className="text-slate-500 font-medium mb-10">A gestão do seu negócio, elevada ao próximo nível.</p>
          
          <Button 
            onClick={login} 
            className="w-full py-6 rounded-2xl text-lg font-bold gap-3 bg-primary hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <LogIn className="w-5 h-5" />
            Entrar com Google
          </Button>
          
          <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </div>
      </div>
    );
  }

  const renderModule = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardModule />;
      case 'pos': return <POSModule />;
      case 'stock': return <StockModule />;
      case 'financial': return <FinancialModule />;
      case 'crm': return <CRMModule />;
      case 'delivery': return <DeliveryModule />;
      case 'os': return <WorkOrderModule />;
      case 'fiscal': return <FiscalModule />;
      case 'api': return <PublicAPIModule />;
      case 'partners': return <PartnerPanelModule />;
      case 'settings': return <SettingsModule />;
      default: return <DashboardModule />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderModule()}
    </DashboardLayout>
  );
}

import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <WhiteLabelProvider>
          <AppContent />
        </WhiteLabelProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}


