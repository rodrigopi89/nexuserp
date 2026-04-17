import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { 
  Wrench, 
  Clock, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Camera, 
  Upload, 
  X, 
  Smartphone,
  Eye,
  FileEdit,
  Trash2,
  Printer,
  History
} from 'lucide-react';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';

const MOCK_OS = [
  { id: '1024', customer: 'Ricardo Alves', equipment: 'Notebook Dell G15', problem: 'Superaquecimento', status: 'Em Análise', priority: 'Média', date: '14/04/2024' },
  { id: '1025', customer: 'Juliana Lima', equipment: 'iPhone 13 Pro', problem: 'Tela Quebrada', status: 'Aguardando Peças', priority: 'Alta', date: '13/04/2024' },
  { id: '1026', customer: 'Marcos Silva', equipment: 'Impressora HP Laser', problem: 'Atolamento de Papel', status: 'Concluído', priority: 'Baixa', date: '12/04/2024' },
];

export default function WorkOrderModule() {
  const [isNewOSOpen, setIsNewOSOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Ordens de Serviço</h2>
          <p className="text-sm text-slate-500 font-medium">Controle de manutenções, equipamentos e histórico técnico</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2 h-11 px-5">
            <Smartphone className="w-4 h-4 text-primary" />
            Checklist Rápido
          </Button>
          
          <Dialog open={isNewOSOpen} onOpenChange={setIsNewOSOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] gap-2 h-11 px-6 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
                <Plus className="w-4 h-4" />
                Nova OS
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-white/5 text-white max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden p-0">
              <div className="bg-gradient-to-r from-primary/20 to-transparent p-8 pb-4">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-black tracking-tight text-white mb-1">Abertura de Nova OS</DialogTitle>
                  <p className="text-slate-400 text-sm">Registre os detalhes do serviço e Capture evidências do estado do equipamento.</p>
                </DialogHeader>
              </div>
              
              <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {/* Section: Identificação */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Identificação</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Cliente / Solicitante</Label>
                      <Input placeholder="Nome Completo do Cliente" className="bg-white/5 border-white/5 rounded-2xl h-12 focus-visible:ring-primary/40 focus-visible:bg-white/[0.08] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Equipamento</Label>
                      <Input placeholder="Ex: Notebook Dell G15, iPhone 13..." className="bg-white/5 border-white/5 rounded-2xl h-12 focus-visible:ring-primary/40 focus-visible:bg-white/[0.08] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Section: Detalhamento */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Detalhamento Técnico</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Prioridade</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/5 rounded-2xl h-12">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/5 text-white rounded-xl">
                          <SelectItem value="baixa" className="focus:bg-primary/20 cursor-pointer">🟢 Baixa</SelectItem>
                          <SelectItem value="media" className="focus:bg-primary/20 cursor-pointer">🟡 Média</SelectItem>
                          <SelectItem value="alta" className="focus:bg-primary/20 cursor-pointer">🔴 Alta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Problema / Sintomas Relatados</Label>
                      <Input placeholder="Curta descrição do defeito principal" className="bg-white/5 border-white/5 rounded-2xl h-12 focus-visible:ring-primary/40" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Observações Adicionais</Label>
                    <Textarea placeholder="Detalhes técnicos, histórico ou acessórios deixados..." className="bg-white/5 border-white/5 rounded-2xl min-h-[120px] resize-none focus-visible:ring-primary/40" />
                  </div>
                </div>

                {/* Section: Registro Visual */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Registro Visual</h4>
                  </div>
                  <div className="space-y-2">
                    {photo ? (
                      <div className="relative group rounded-3xl overflow-hidden aspect-video border-2 border-primary/20 shadow-2xl">
                        <img src={photo} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                          <Button variant="outline" className="rounded-full border-white/20 bg-white/10 hover:bg-white/20" onClick={() => setPhoto(null)}>
                            <History className="w-4 h-4 mr-2" /> Trocar Foto
                          </Button>
                          <Button variant="destructive" size="icon" className="rounded-full shadow-lg" onClick={() => setPhoto(null)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="cursor-pointer group">
                          <div className="h-32 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 bg-white/[0.02] group-hover:bg-primary/5 group-hover:border-primary/40 transition-all">
                            <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                              <Camera className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors">Tirar Foto</span>
                            <input type="file" accept="image/*" capture="environment" className="hidden" onChange={handleFileChange} />
                          </div>
                        </label>
                        <label className="cursor-pointer group">
                          <div className="h-32 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 bg-white/[0.02] group-hover:bg-emerald-500/5 group-hover:border-emerald-500/40 transition-all">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                              <Upload className="w-6 h-6 text-emerald-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-500 transition-colors">Anexar Arquivos</span>
                            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                          </div>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <DialogFooter className="border-t border-white/5 p-8 bg-slate-900/50 flex flex-col sm:flex-row gap-3">
                <Button variant="ghost" onClick={() => setIsNewOSOpen(false)} className="rounded-2xl h-12 px-8 text-slate-400 font-bold hover:text-white hover:bg-white/5 border border-transparent">
                  Descartar
                </Button>
                <Button className="bg-primary rounded-2xl h-12 px-10 font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                  Gerar Ordem de Serviço
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Abertas', count: 12, color: 'bg-blue-500', icon: Clock },
          { label: 'Em Reparo', count: 5, color: 'bg-amber-500', icon: Wrench },
          { label: 'Aguardando', count: 3, color: 'bg-rose-500', icon: AlertCircle },
          { label: 'Prontas', count: 8, color: 'bg-emerald-500', icon: CheckCircle2 },
        ].map((stat) => (
          <Card key={stat.label} className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl bg-white/5 text-white/50 group-hover:text-white transition-colors`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <Badge className="bg-white/5 text-slate-400 border-white/5 uppercase tracking-widest text-[9px] font-black">{stat.label}</Badge>
              </div>
              <h3 className="text-4xl font-black text-white tracking-tight">{stat.count}</h3>
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-10 ${stat.color} group-hover:opacity-30 transition-opacity`}></div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden rounded-[2rem]">
        <CardHeader className="border-b border-white/5 bg-transparent p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Buscar por OS, cliente ou equipamento..." 
                className="pl-12 h-14 rounded-2xl border-white/5 bg-white/5 text-white placeholder:text-slate-500 focus:ring-primary/40 focus:bg-white/10 transition-all" 
              />
            </div>
            
            <Button onClick={() => setIsNewOSOpen(true)} className="w-full md:w-auto rounded-2xl bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 gap-3 h-14 px-8 font-black transition-all">
              <Plus className="w-5 h-5" />
              Nova Ordem de Serviço
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="font-black text-slate-500 uppercase tracking-[0.2em] text-[10px] py-6 px-8">OS ID</TableHead>
                  <TableHead className="font-black text-slate-500 uppercase tracking-[0.2em] text-[10px]">Cliente</TableHead>
                  <TableHead className="font-black text-slate-500 uppercase tracking-[0.2em] text-[10px]">Equipamento</TableHead>
                  <TableHead className="font-black text-slate-500 uppercase tracking-[0.2em] text-[10px]">Status</TableHead>
                  <TableHead className="font-black text-slate-500 uppercase tracking-[0.2em] text-[10px]">Prioridade</TableHead>
                  <TableHead className="text-right px-8"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_OS.map((os) => (
                  <TableRow key={os.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                    <TableCell className="font-mono text-xs text-primary py-6 px-8 font-bold">#{os.id}</TableCell>
                    <TableCell className="font-black text-white">{os.customer}</TableCell>
                    <TableCell className="text-slate-400 text-sm font-medium">{os.equipment}</TableCell>
                    <TableCell>
                      <Badge className="bg-white/5 text-slate-400 border-white/5 uppercase tracking-widest text-[9px] font-black">{os.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${
                        os.priority === 'Alta' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                        os.priority === 'Média' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                        'bg-slate-500/10 text-slate-400 border-slate-500/20'
                      } uppercase tracking-widest text-[9px] font-black`}>
                        {os.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white hover:bg-white/10 rounded-xl transition-all h-10 w-10">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-slate-900 border-white/10 text-white w-56 p-2 rounded-2xl shadow-2xl">
                          <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 py-2">Ações da OS #{os.id}</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-white/5" />
                          <DropdownMenuItem className="focus:bg-primary/20 focus:text-primary rounded-xl px-3 py-2 cursor-pointer transition-colors">
                            <Eye className="w-4 h-4 mr-3" /> Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-primary/20 focus:text-primary rounded-xl px-3 py-2 cursor-pointer transition-colors">
                            <FileEdit className="w-4 h-4 mr-3" /> Editar Serviço
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-primary/20 focus:text-primary rounded-xl px-3 py-2 cursor-pointer transition-colors">
                            <Printer className="w-4 h-4 mr-3" /> Imprimir Comprovante
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/5" />
                          <DropdownMenuItem className="focus:bg-rose-500/20 focus:text-rose-400 text-rose-500 rounded-xl px-3 py-2 cursor-pointer transition-colors">
                            <Trash2 className="w-4 h-4 mr-3" /> Excluir Registro
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

