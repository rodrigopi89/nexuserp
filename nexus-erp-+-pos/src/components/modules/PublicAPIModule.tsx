import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Code, Globe, Lock, Webhook, Database, Zap } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export default function PublicAPIModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">API Pública & Integrações</h2>
          <p className="text-sm text-slate-500 font-medium">Conecte seu Nexus ERP com outras ferramentas e sistemas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <Badge className="bg-primary/20 text-primary border-none uppercase tracking-widest text-[9px]">Ativo</Badge>
            </div>
            <h3 className="text-lg font-bold mb-3 tracking-tight">Chave de API</h3>
            <div className="bg-white/5 p-4 rounded-xl font-mono text-xs flex items-center justify-between border border-white/5">
              <span className="truncate text-slate-400">nx_live_51P...92jK</span>
              <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10">Copiar</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Webhook className="w-6 h-6 text-purple-500" />
              <Badge className="bg-purple-500/10 text-purple-400 border-none uppercase tracking-widest text-[9px]">3 Webhooks</Badge>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Webhooks</h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">Receba notificações em tempo real sobre vendas e estoque.</p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-amber-500" />
              <Badge className="bg-amber-500/10 text-amber-400 border-none uppercase tracking-widest text-[9px]">100 req/min</Badge>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Performance</h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">Sua API está operando com 99.9% de uptime.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-transparent py-6">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Documentação Rápida
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
              <div className="space-y-4">
                <h4 className="font-bold text-white text-sm uppercase tracking-widest">Listar Produtos</h4>
                <div className="bg-slate-950 rounded-2xl p-5 font-mono text-xs text-slate-300 space-y-2 border border-white/5">
                  <p className="text-emerald-400 font-bold">GET /api/v1/products</p>
                  <p className="text-slate-600">// Header: Authorization: Bearer {'{YOUR_TOKEN}'}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-white text-sm uppercase tracking-widest">Criar Nova Venda</h4>
                <div className="bg-slate-950 rounded-2xl p-5 font-mono text-xs text-slate-300 space-y-2 border border-white/5">
                  <p className="text-primary font-bold">POST /api/v1/sales</p>
                  <pre className="text-slate-500">
{`{
  "customer_id": "cust_123",
  "items": [
    { "product_id": "prod_456", "quantity": 2 }
  ],
  "payment_method": "pix"
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-transparent py-6">
              <CardTitle className="text-lg font-bold text-white">Endpoints</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {['Products', 'Customers', 'Sales', 'Invoices', 'Inventory', 'Financial'].map((endpoint) => (
                  <div key={endpoint} className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white">{endpoint}</span>
                    <Badge className="bg-white/5 text-slate-500 border-white/5 text-[9px] uppercase tracking-widest">v1</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


import { Button } from '../ui/button';
