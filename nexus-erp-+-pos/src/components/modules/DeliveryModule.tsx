import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Utensils, Clock, User, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const MOCK_TABLES = [
  { id: 1, status: 'occupied', total: 156.90, time: '45 min', items: 4 },
  { id: 2, status: 'free', total: 0, time: '-', items: 0 },
  { id: 3, status: 'occupied', total: 89.00, time: '12 min', items: 2 },
  { id: 4, status: 'reserved', total: 0, time: '-', items: 0 },
  { id: 5, status: 'free', total: 0, time: '-', items: 0 },
  { id: 6, status: 'occupied', total: 245.50, time: '1h 20min', items: 8 },
  { id: 7, status: 'free', total: 0, time: '-', items: 0 },
  { id: 8, status: 'free', total: 0, time: '-', items: 0 },
];

export default function DeliveryModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Delivery & Restaurante</h2>
          <p className="text-sm text-slate-500 font-medium">Mapa de mesas, pedidos e logística de entrega</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <MessageSquare className="w-4 h-4" />
            Pedidos WhatsApp
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <Utensils className="w-4 h-4" />
            Novo Pedido
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tables" className="w-full">
        <TabsList className="bg-white/5 p-1 rounded-2xl border border-white/5 mb-10 h-14 backdrop-blur-xl">
          <TabsTrigger value="tables" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all">
            Mapa de Mesas
          </TabsTrigger>
          <TabsTrigger value="delivery" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all">
            Entregas
          </TabsTrigger>
          <TabsTrigger value="kitchen" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all">
            Cozinha
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {MOCK_TABLES.map((table) => (
              <Card 
                key={table.id} 
                className={`bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl cursor-pointer transition-all hover:scale-105 group overflow-hidden relative ${
                  table.status === 'occupied' ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-xl shadow-lg border border-white/10 ${
                    table.status === 'occupied' ? 'bg-primary text-white' : 
                    table.status === 'reserved' ? 'bg-amber-500 text-white' : 'bg-white/5 text-slate-500'
                  }`}>
                    {table.id}
                  </div>
                  <h4 className="font-bold text-white">Mesa {table.id}</h4>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">
                    {table.status === 'occupied' ? 'Ocupada' : 
                     table.status === 'reserved' ? 'Reservada' : 'Livre'}
                  </p>
                  {table.status === 'occupied' && (
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                      <p className="text-sm font-black text-primary">R$ {table.total.toFixed(2)}</p>
                      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 font-bold">
                        <Clock className="w-3 h-3" />
                        {table.time}
                      </div>
                    </div>
                  )}
                  <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full blur-2xl opacity-20 ${
                    table.status === 'occupied' ? 'bg-primary' : 
                    table.status === 'reserved' ? 'bg-amber-500' : 'bg-slate-500'
                  }`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="delivery">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Preparando', 'Em Rota', 'Entregue'].map((status) => (
              <div key={status} className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-black text-white tracking-tight uppercase text-xs tracking-widest">{status}</h3>
                  <Badge className="bg-white/5 text-slate-400 border-white/5">2</Badge>
                </div>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-4 pr-4">
                    {[1, 2].map((i) => (
                      <Card key={i} className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl hover:bg-white/5 transition-all group overflow-hidden relative">
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h5 className="font-black text-white tracking-tight">#D-102{i}</h5>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Há 15 min</p>
                            </div>
                            <Badge className={`${
                              status === 'Em Rota' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                              status === 'Entregue' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                              'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            } uppercase tracking-widest text-[9px]`}>
                              {status}
                            </Badge>
                          </div>
                          <div className="space-y-3 mb-5">
                            <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                <User className="w-4 h-4 text-slate-500" />
                              </div>
                              Carlos Alberto
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                <MapPin className="w-4 h-4 text-slate-500" />
                              </div>
                              Rua das Flores, 123
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="font-black text-primary">R$ 124,90</span>
                            <Button size="sm" variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white">Detalhes</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
