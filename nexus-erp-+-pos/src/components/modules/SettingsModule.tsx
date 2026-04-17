import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Settings, Building2, Palette, Lock, Bell, Globe, Users, MessageSquare, Save, Shield, Upload } from 'lucide-react';

export default function SettingsModule() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white tracking-tighter">Configurações do Sistema</h2>
          <p className="text-sm text-slate-500 font-medium">Personalize sua experiência e gerencie sua conta</p>
        </div>
        <Button className="rounded-xl bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] gap-2">
          <Save className="w-4 h-4" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="bg-white/5 p-1 rounded-2xl border border-white/5 mb-10 h-14 backdrop-blur-xl overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="company" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all whitespace-nowrap">
            <Building2 className="w-4 h-4" /> Empresa
          </TabsTrigger>
          <TabsTrigger value="whitelabel" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all whitespace-nowrap">
            <Palette className="w-4 h-4" /> White Label
          </TabsTrigger>
          <TabsTrigger value="users" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all whitespace-nowrap">
            <Users className="w-4 h-4" /> Usuários
          </TabsTrigger>
          <TabsTrigger value="whatsapp" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all whitespace-nowrap">
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl gap-2 data-[state=active]:bg-primary data-[state=active]:text-white h-full px-8 font-bold transition-all whitespace-nowrap">
            <Shield className="w-4 h-4" /> Segurança
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-8">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-transparent py-6">
              <CardTitle className="text-lg font-bold text-white">Dados da Empresa</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Razão Social</label>
                  <Input defaultValue="Nexus Tecnologia LTDA" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CNPJ</label>
                  <Input defaultValue="00.000.000/0001-00" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">E-mail de Contato</label>
                  <Input defaultValue="contato@nexus.com.br" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Telefone</label>
                  <Input defaultValue="(11) 99999-9999" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whitelabel" className="space-y-8">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-transparent py-6">
              <CardTitle className="text-lg font-bold text-white">Customização Visual</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nome do Sistema</label>
                    <Input defaultValue="Nexus ERP" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Cor Primária</label>
                    <div className="flex gap-4">
                      <Input type="color" defaultValue="#3B82F6" className="w-16 h-12 p-1 rounded-xl border-white/5 bg-white/5" />
                      <Input defaultValue="#3B82F6" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Logotipo</label>
                  <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-slate-500" />
                    </div>
                    <p className="text-sm text-slate-400 font-bold">Arraste seu logo ou clique para upload</p>
                    <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest">PNG, SVG ou JPG (Máx. 2MB)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-8">
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-transparent py-6">
              <CardTitle className="text-lg font-bold text-white">Integração WhatsApp Business</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-6 p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white tracking-tight">Status: Conectado</h4>
                  <p className="text-sm text-emerald-400 font-bold">+55 (11) 98765-4321</p>
                </div>
                <Button variant="outline" className="ml-auto rounded-xl border-rose-500/20 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20">Desconectar</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">API Key Meta</label>
                  <Input type="password" value="••••••••••••••••" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">ID do Telefone</label>
                  <Input value="1092837465" className="h-12 rounded-2xl border-white/5 bg-white/5 text-white focus:ring-primary/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

