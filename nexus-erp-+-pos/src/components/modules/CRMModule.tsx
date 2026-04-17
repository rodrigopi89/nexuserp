import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Search, Plus, Mail, Phone, MapPin, MoreHorizontal, UserPlus, Filter, User } from 'lucide-react';
import { Badge } from '../ui/badge';

const MOCK_CUSTOMERS = [
  { id: '1', name: 'João Silva', email: 'joao@email.com', phone: '(11) 98888-7777', stage: 'Negociação', totalSpent: 1250.00 },
  { id: '2', name: 'Maria Oliveira', email: 'maria@email.com', phone: '(21) 97777-6666', stage: 'Lead', totalSpent: 0 },
  { id: '3', name: 'Empresa Tech Ltda', email: 'contato@tech.com', phone: '(11) 3333-4444', stage: 'Fiel', totalSpent: 15400.00 },
  { id: '4', name: 'Pedro Santos', email: 'pedro@email.com', phone: '(31) 96666-5555', stage: 'Perdido', totalSpent: 450.00 },
];

export default function CRMModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Relacionamento & CRM</h2>
          <p className="text-sm text-slate-500 font-medium">Gestão de leads, clientes e funil de vendas</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <Filter className="w-4 h-4" />
            Segmentação
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <Plus className="w-4 h-4" />
            Novo Cliente
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Leads', count: 124, color: 'bg-blue-500' },
          { label: 'Negociação', count: 45, color: 'bg-amber-500' },
          { label: 'Fidelizados', count: 856, color: 'bg-emerald-500' },
          { label: 'Perdidos', count: 12, color: 'bg-rose-500' },
        ].map((stage) => (
          <Card key={stage.label} className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stage.label}</p>
                <div className={`w-2 h-2 rounded-full ${stage.color} shadow-[0_0_8px_rgba(0,0,0,0.3)]`}></div>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">{stage.count}</h3>
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-10 ${stage.color}`}></div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-transparent py-6">
          <div className="flex items-center justify-between">
            <div className="relative w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Buscar por nome, email ou telefone..." 
                className="pl-12 h-12 rounded-2xl border-white/5 bg-white/5 text-white placeholder:text-slate-500 focus:ring-primary/50" 
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px] py-4">Cliente</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Contato</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Estágio</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Total Gasto</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CUSTOMERS.map((customer) => (
                <TableRow key={customer.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                  <TableCell>
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                        <User className="w-5 h-5 text-slate-500" />
                      </div>
                      <span className="font-bold text-white">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-slate-300 text-sm font-medium">{customer.email}</p>
                      <p className="text-slate-500 text-xs">{customer.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${
                      customer.stage === 'Fidelizado' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      customer.stage === 'Negociação' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                      'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    } uppercase tracking-widest text-[9px]`}>
                      {customer.stage}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-black text-primary">R$ {customer.totalSpent.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white hover:bg-white/10">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
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

