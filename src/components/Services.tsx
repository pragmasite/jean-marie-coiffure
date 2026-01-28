import { Scissors, Palette, Sparkles, Hand, Footprints, Heart, Zap, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const serviceIcons = [
  Scissors,   // Coupe femme
  Scissors,   // Coupe homme
  Palette,    // Coloration
  Sparkles,   // Traitement keratine
  Hand,       // Manucure
  Footprints, // Pedicure
  Heart,      // Massages
  Zap,        // Epilation
  Star,       // Colombian Lifting
];

function ServiceCard({
  title,
  description,
  Icon
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-center mb-12">
          {t.services.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={serviceIcons[index] || Sparkles}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
