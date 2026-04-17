import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

interface WhiteLabelConfig {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
}

interface WhiteLabelContextType {
  config: WhiteLabelConfig;
  loading: boolean;
}

const defaultPConfig: WhiteLabelConfig = {
  name: 'Nexus ERP',
  logo: 'https://picsum.photos/seed/nexus/200/200',
  primaryColor: '#0f172a',
  secondaryColor: '#3b82f6',
};

const WhiteLabelContext = createContext<WhiteLabelContextType | undefined>(undefined);

export function WhiteLabelProvider({ children }: { children: React.ReactNode }) {
  const { profile } = useAuth();
  const [config, setConfig] = useState<WhiteLabelConfig>(defaultPConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile?.companyId) {
      const unsubscribe = onSnapshot(doc(db, 'companies', profile.companyId), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.whiteLabelConfig) {
            setConfig({
              ...defaultPConfig,
              ...data.whiteLabelConfig,
            });
          }
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, [profile?.companyId]);

  return (
    <WhiteLabelContext.Provider value={{ config, loading }}>
      {children}
    </WhiteLabelContext.Provider>
  );
}

export function useWhiteLabel() {
  const context = useContext(WhiteLabelContext);
  if (context === undefined) {
    throw new Error('useWhiteLabel must be used within a WhiteLabelProvider');
  }
  return context;
}
