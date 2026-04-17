import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Plus, ArrowUpCircle, ArrowDownCircle, Filter, Download, Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';

const MOCK_FINANCIAL = [
  { id: '1', description: 'Venda PDV #1240', amount: 850.00, type: 'income', date: '2024-04-14', status: 'paid', category: 'Vendas' },
  { id: '2', description: 'Aluguel Escritório', amount: 2500.00, type: 'expense', date: '2024-04-10', status: 'paid', category: 'Infraestrutura' },
  { id: '3', description: 'Fornecedor Tech S.A', amount: 1200.00, type: 'expense', date: '2024-04-20', status: 'pending', category: 'Estoque' },
  { id: '4', description: 'Venda PDV #1241', amount: 349.90, type: 'income', date: '2024-04-14', status: 'paid', category: 'Vendas' },
  { id: '5', description: 'Internet Fiber', amount: 149.90, type: 'expense', date: '2024-04-15', status: 'pending', category: 'Utilidades' },
];

export default function FinancialModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Fluxo Financeiro</h2>
          <p className="text-sm text-slate-500 font-medium">Gestão de contas, DRE e saúde fiscal</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <Calendar className="w-4 h-4" />
            Período
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <Plus className="w-4 h-4" />
            Novo Lançamento
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-emerald-600/20 backdrop-blur-xl border-emerald-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg">
                <ArrowUpCircle className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Receitas</Badge>
            </div>
            <p className="text-emerald-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Total a Receber</p>
            <h3 className="text-3xl font-black tracking-tight">R$ 45.200,00</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 transition-all"></div>
          </CardContent>
        </Card>
        
        <Card className="bg-rose-600/20 backdrop-blur-xl border-rose-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-rose-500 rounded-2xl shadow-lg">
                <ArrowDownCircle className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Despesas</Badge>
            </div>
            <p className="text-rose-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Total a Pagar</p>
            <h3 className="text-3xl font-black tracking-tight">R$ 12.840,50</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/40 transition-all"></div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600/20 backdrop-blur-xl border-blue-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Saldo</Badge>
            </div>
            <p className="text-blue-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Saldo Disponível</p>
            <h3 className="text-3xl font-black tracking-tight">R$ 32.359,50</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-transparent py-6">
          <CardTitle className="text-lg font-bold text-white">Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px] py-4">Descrição</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Categoria</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Vencimento</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Valor</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_FINANCIAL.map((item) => (
                <TableRow key={item.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                  <TableCell className="font-bold text-white py-5">{item.description}</TableCell>
                  <TableCell className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.category}</TableCell>
                  <TableCell className="text-slate-400 text-sm">{item.date}</TableCell>
                  <TableCell className={`font-black ${item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.type === 'income' ? '+' : '-'} R$ {item.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${item.status === 'paid' || item.status === 'Recebido' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'} uppercase tracking-widest text-[9px]`}>
                      {item.status === 'paid' ? 'Pago' : 'Pendente'}
                    </Badge>
                  </TableCell>
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

import { TrendingUp, MoreHorizontal } from 'lucide-react';
