import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from './ui/button';

const STORAGE_KEY = 'jm-coiffure-disclaimer-dismissed';

export function DisclaimerModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
          {t.disclaimer.title}
        </h2>

        <p className="text-foreground mb-6 leading-relaxed">
          {t.disclaimer.message}
        </p>

        <Button onClick={handleDismiss} className="w-full">
          {t.disclaimer.dismiss}
        </Button>
      </div>
    </div>
  );
}
