import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  ShoppingCart,
  MessageSquare
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, sales: 240 },
  { name: 'Fev', revenue: 3000, sales: 198 },
  { name: 'Mar', revenue: 2000, sales: 150 },
  { name: 'Abr', revenue: 2780, sales: 210 },
  { name: 'Mai', revenue: 1890, sales: 120 },
  { name: 'Jun', revenue: 2390, sales: 170 },
  { name: 'Jul', revenue: 3490, sales: 250 },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }: any) => (
  <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden group hover:bg-white/5 transition-all duration-500">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-3 rounded-2xl ${color} bg-opacity-10 shadow-inner`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trendValue}
        </div>
      </div>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.1em] mb-1">{title}</p>
      <h3 className="text-2xl font-black text-white tracking-tight">{value}</h3>
      
      {/* Decorative glow */}
      <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-10 ${color}`}></div>
    </CardContent>
  </Card>
);

export default function DashboardModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Nexus Intelligence</h2>
          <p className="text-sm text-slate-500 font-medium">Análise de BI avançada e monitoramento global</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">Exportar BI</Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all">Nova Transação</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Faturamento Diário" 
          value="R$ 42.850,22" 
          icon={DollarSign} 
          trend="up" 
          trendValue="↑ 12.4%" 
          color="bg-blue-500"
        />
        <StatCard 
          title="Ticket Médio" 
          value="R$ 158,40" 
          icon={ShoppingCart} 
          trend="up" 
          trendValue="↑ 2.1%" 
          color="bg-purple-500"
        />
        <StatCard 
          title="Vendas no PDV" 
          value="1.240" 
          icon={Users} 
          trend="up" 
          trendValue="85% Meta" 
          color="bg-orange-500"
        />
        <StatCard 
          title="NF-e Emitidas" 
          value="842" 
          icon={Package} 
          trend="up" 
          trendValue="0 Rejeições" 
          color="bg-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 pb-6">
            <CardTitle className="text-lg font-bold text-white">Análise de BI Avançada</CardTitle>
            <Badge className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest text-[10px]">Mensal</Badge>
          </CardHeader>
          <CardContent className="h-[400px] pt-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl">
            <CardHeader className="border-b border-white/5 pb-6">
              <CardTitle className="text-lg font-bold text-white">Status Fiscal</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {[
                { label: 'NF-e (Produto)', status: 'Online', color: 'bg-emerald-500' },
                { label: 'NFC-e (Consumidor)', status: 'Online', color: 'bg-emerald-500' },
                { label: 'MDF-e / CT-e', status: 'Lento', color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_rgba(16,185,129,0.5)]`}></span>
                    <span className="text-sm font-semibold text-slate-300">{item.label}</span>
                  </div>
                  <Badge className={`${item.status === 'Online' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'} uppercase tracking-widest text-[9px]`}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-emerald-400 text-sm tracking-tight">WhatsApp Business API</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              142 confirmações de pedido enviadas hoje.<br />
              <span className="text-emerald-400/60 font-bold">32 campanhas ativas.</span>
            </p>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
