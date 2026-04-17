import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FileText, ShieldCheck, AlertCircle, RefreshCw, Download, Send } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function FiscalModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Módulo Fiscal</h2>
          <p className="text-sm text-slate-500 font-medium">Emissão de notas e gestão tributária</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 gap-2">
            <RefreshCw className="w-4 h-4" />
            Sincronizar SEFAZ
          </Button>
          <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
            <FileText className="w-4 h-4" />
            Nova NF-e
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/20 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border-none uppercase tracking-widest text-[9px]">Ativo</Badge>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Certificado Digital A1</p>
            <h3 className="text-lg font-bold text-white tracking-tight">Expira em 245 dias</h3>
            <p className="text-[10px] text-slate-500 mt-2 font-mono">CNPJ: 00.000.000/0001-00</p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-2xl">
                <Send className="w-6 h-6 text-purple-500" />
              </div>
              <Badge className="bg-white/10 text-white border-none uppercase tracking-widest text-[9px]">Mês Atual</Badge>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Notas Emitidas</p>
            <h3 className="text-3xl font-black text-white tracking-tight">156</h3>
            <p className="text-[10px] text-slate-500 mt-2 font-bold">Total Fiscal: R$ 42.500,00</p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden relative group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500/20 rounded-2xl">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <Badge className="bg-amber-500/10 text-amber-400 border-none uppercase tracking-widest text-[9px]">Atenção</Badge>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Notas Rejeitadas</p>
            <h3 className="text-3xl font-black text-white tracking-tight">2</h3>
            <p className="text-[10px] text-slate-500 mt-2 font-bold">Necessário correção manual</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-white/5 bg-transparent py-6">
          <CardTitle className="text-lg font-bold text-white">Últimos Documentos Fiscais</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <FileText className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">NF-e #000{150 + i}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Emitida em 14/04/2024 às 14:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="font-black text-white">R$ 1.250,00</p>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-widest text-[9px]">Autorizada</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white hover:bg-white/10" title="Baixar XML">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white hover:bg-white/10" title="Imprimir DANFE">
                      <FileText className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

