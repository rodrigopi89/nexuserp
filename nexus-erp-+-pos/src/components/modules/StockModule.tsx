import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Search, Plus, Filter, MoreHorizontal, Package, AlertTriangle } from 'lucide-react';
import { Badge } from '../ui/badge';

const MOCK_STOCK = [
  { id: '1', name: 'Camiseta Nexus Pro', sku: 'V-001', price: 89.90, stock: 45, minStock: 10, category: 'Vestuário' },
  { id: '2', name: 'Mouse Gamer RGB', sku: 'E-042', price: 159.00, stock: 12, minStock: 15, category: 'Eletrônicos' },
  { id: '3', name: 'Teclado Mecânico', sku: 'E-089', price: 349.90, stock: 8, minStock: 5, category: 'Eletrônicos' },
  { id: '4', name: 'Monitor 24" 144Hz', sku: 'E-112', price: 1299.00, stock: 5, minStock: 2, category: 'Eletrônicos' },
  { id: '5', name: 'Cadeira Ergonômica', sku: 'M-005', price: 899.00, stock: 3, minStock: 5, category: 'Móveis' },
];

export default function StockModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Gestão de Inventário</h2>
          <p className="text-sm text-slate-500 font-medium">Controle total de produtos, lotes e movimentações</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <Filter className="w-4 h-4" />
            Filtros Avançados
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <Plus className="w-4 h-4" />
            Novo Produto
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-600/20 backdrop-blur-xl border-blue-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Total</Badge>
            </div>
            <p className="text-blue-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Itens Cadastrados</p>
            <h3 className="text-3xl font-black tracking-tight">1.240</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-600/20 backdrop-blur-xl border-amber-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500 rounded-2xl shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Alerta</Badge>
            </div>
            <p className="text-amber-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Estoque Baixo</p>
            <h3 className="text-3xl font-black tracking-tight text-amber-400">12</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-all"></div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-600/20 backdrop-blur-xl border-emerald-500/20 shadow-2xl text-white overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Mês</Badge>
            </div>
            <p className="text-emerald-200/60 text-[10px] font-bold uppercase tracking-widest mb-1">Novas Entradas</p>
            <h3 className="text-3xl font-black tracking-tight">85</h3>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 transition-all"></div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-transparent py-6">
          <div className="flex items-center justify-between">
            <div className="relative w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Buscar por nome, SKU ou categoria..." 
                className="pl-12 h-12 rounded-2xl border-white/5 bg-white/5 text-white placeholder:text-slate-500 focus:ring-primary/50" 
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px] py-4">Produto</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">SKU</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Categoria</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Preço</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Estoque</TableHead>
                <TableHead className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_STOCK.map((item) => (
                <TableRow key={item.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                  <TableCell className="font-bold text-white py-5">{item.name}</TableCell>
                  <TableCell className="text-slate-500 font-mono text-xs">{item.sku}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-lg font-bold border-white/10 text-slate-400 uppercase tracking-tighter text-[9px]">{item.category}</Badge>
                  </TableCell>
                  <TableCell className="font-black text-primary">R$ {item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-black ${item.stock <= item.minStock ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]' : 'text-white'}`}>
                        {item.stock}
                      </span>
                      <span className="text-slate-600 text-[10px] font-bold">/ {item.minStock} min</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {item.stock <= item.minStock ? (
                      <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 uppercase tracking-widest text-[9px]">Estoque Baixo</Badge>
                    ) : (
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-widest text-[9px]">Em Dia</Badge>
                    )}
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

