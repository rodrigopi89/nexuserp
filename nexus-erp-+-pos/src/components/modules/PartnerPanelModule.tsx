import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Users, CreditCard, TrendingUp, Shield, Plus, Search, MoreHorizontal, ExternalLink } from 'lucide-react';
import { Input } from '../ui/input';

const MOCK_PARTNERS = [
  { id: '1', name: 'Agência Digital X', clients: 12, commission: 1540.00, status: 'Ativo' },
  { id: '2', name: 'Consultoria Financeira Y', clients: 5, commission: 850.00, status: 'Ativo' },
  { id: '3', name: 'Sistemas Z Ltda', clients: 28, commission: 4200.00, status: 'Premium' },
];

export default function PartnerPanelModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Painel de Parceiros</h2>
          <p className="text-sm text-slate-500 font-medium">Gestão de revendedores, comissões e performance da rede</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <TrendingUp className="w-4 h-4" />
            Relatório Consolidado
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <Plus className="w-4 h-4" />
            Novo Parceiro
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/20 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-white/5 text-slate-400 border-white/5 uppercase tracking-widest text-[9px]">Total</Badge>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Parceiros Ativos</p>
            <h3 className="text-3xl font-black text-white tracking-tight">45</h3>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-2xl">
                <CreditCard className="w-6 h-6 text-emerald-500" />
              </div>
              <Badge className="bg-white/5 text-slate-400 border-white/5 uppercase tracking-widest text-[9px]">Mês Atual</Badge>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Comissões a Pagar</p>
            <h3 className="text-3xl font-black text-white tracking-tight">R$ 12.450,00</h3>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-none uppercase tracking-widest text-[9px]">Crescimento</Badge>
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Novos Clientes (Parceiros)</p>
            <h3 className="text-3xl font-black text-white tracking-tight">+124</h3>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-transparent py-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-white">Gestão de Parceiros</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Buscar parceiro..." 
                className="pl-12 h-12 rounded-2xl border-white/5 bg-white/5 text-white placeholder:text-slate-500 focus:ring-primary/50" 
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px] py-4">Parceiro</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Clientes</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Comissão Acumulada</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_PARTNERS.map((partner) => (
                <TableRow key={partner.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                  <TableCell className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold text-white">{partner.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-slate-300">{partner.clients} empresas</TableCell>
                  <TableCell className="font-black text-emerald-400">R$ {partner.commission.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge className={`${
                      partner.status === 'Premium' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-primary/10 text-primary border-primary/20'
                    } uppercase tracking-widest text-[9px]`}>
                      {partner.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white hover:bg-white/10" title="Acessar Painel">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white hover:bg-white/10">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

