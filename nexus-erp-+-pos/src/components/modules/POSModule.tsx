import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Search, ShoppingCart, Trash2, Plus, Minus, CreditCard, Banknote, QrCode } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Camiseta Nexus Pro', price: 89.90, stock: 45, category: 'Vestuário' },
  { id: '2', name: 'Mouse Gamer RGB', price: 159.00, stock: 12, category: 'Eletrônicos' },
  { id: '3', name: 'Teclado Mecânico', price: 349.90, stock: 8, category: 'Eletrônicos' },
  { id: '4', name: 'Monitor 24" 144Hz', price: 1299.00, stock: 5, category: 'Eletrônicos' },
  { id: '5', name: 'Cadeira Ergonômica', price: 899.00, stock: 3, category: 'Móveis' },
];

export default function POSModule() {
  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-180px)]">
      {/* Product Selection */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <Input 
                placeholder="Buscar produto por nome ou código de barras..." 
                className="pl-12 h-14 rounded-2xl border-white/5 bg-white/5 text-white placeholder:text-slate-500 focus:ring-primary/50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <ScrollArea className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pr-4">
            {MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map(product => (
              <Card 
                key={product.id} 
                className="bg-card/40 backdrop-blur-xl border-white/5 shadow-xl hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer group relative overflow-hidden"
                onClick={() => addToCart(product)}
              >
                <CardContent className="p-5">
                  <div className="aspect-square bg-white/5 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <ShoppingCart className="w-10 h-10 text-slate-600 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-bold text-white truncate text-sm">{product.name}</h4>
                  <p className="text-[10px] text-slate-500 mb-3 uppercase tracking-widest font-bold">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-primary text-lg">R$ {product.price.toFixed(2)}</span>
                    <Badge variant="secondary" className="bg-white/5 text-slate-400 border-none text-[9px]">{product.stock} un</Badge>
                  </div>
                </CardContent>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 bg-primary rounded-lg shadow-lg">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Cart and Checkout */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Card className="flex-1 bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl flex flex-col overflow-hidden">
          <CardHeader className="border-b border-white/5 pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-white">Carrinho de Vendas</CardTitle>
              <Badge className="bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">{cart.length} itens</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 py-20">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                    <ShoppingCart className="w-10 h-10 opacity-20" />
                  </div>
                  <p className="font-bold uppercase tracking-widest text-xs">Carrinho vazio</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-white truncate">{item.name}</h5>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">R$ {item.price.toFixed(2)} / un</p>
                      </div>
                      <div className="flex items-center gap-3 bg-black/20 rounded-xl border border-white/5 p-1.5">
                        <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-white/10 text-white" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-black w-6 text-center text-white">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-white/10 text-white" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="text-right min-w-[90px]">
                        <p className="font-black text-sm text-primary">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-600 hover:text-red-400 hover:bg-red-400/10" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            <div className="p-8 bg-black/20 border-t border-white/5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-white">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <span>Descontos</span>
                  <span className="text-rose-400">- R$ 0,00</span>
                </div>
                <div className="flex items-center justify-between text-2xl font-black text-white pt-4 border-t border-white/5">
                  <span className="tracking-tighter">Total</span>
                  <span className="text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Banknote, label: 'Dinheiro' },
                  { icon: CreditCard, label: 'Cartão' },
                  { icon: QrCode, label: 'PIX' },
                ].map((method) => (
                  <Button key={method.label} variant="outline" className="flex-col h-20 gap-2 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 text-white transition-all">
                    <method.icon className="w-6 h-6 text-primary" />
                    <span className="text-[9px] font-black uppercase tracking-widest">{method.label}</span>
                  </Button>
                ))}
              </div>

              <Button className="w-full py-8 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-black shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all uppercase tracking-widest">
                Finalizar Venda
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
