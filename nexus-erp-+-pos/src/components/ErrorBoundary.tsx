import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    (this as any).state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const state = (this as any).state;
    const props = (this as any).props;
    if (state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 bg-rose-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-rose-500" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white tracking-tight">Ops! Algo deu errado</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ocorreu um erro inesperado no sistema. Nossa equipe técnica já foi notificada.
              </p>
            </div>
            {state.error && (
              <div className="bg-black/40 rounded-xl p-4 text-left overflow-hidden">
                <p className="text-[10px] font-mono text-rose-400/80 break-all leading-tight">
                  {state.error.message}
                </p>
              </div>
            )}
            <Button 
              onClick={() => window.location.reload()}
              className="w-full h-12 rounded-2xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] font-bold"
            >
              Recarregar Sistema
            </Button>
          </div>
        </div>
      );
    }

    return props.children;
  }
}
