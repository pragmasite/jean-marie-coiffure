import { Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function OpeningHours() {
  const { t } = useLanguage();

  return (
    <section id="hours" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-center mb-12">
          {t.hours.title}
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="bg-primary/5 px-6 py-4 flex items-center gap-3 border-b border-border">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-heading font-semibold text-foreground">
                {t.hours.title}
              </span>
            </div>

            <div className="divide-y divide-border">
              {t.hours.days.map((item, index) => {
                const isClosed = item.hours === t.hours.closed ||
                                 item.hours === 'Ferme' ||
                                 item.hours === 'Geschlossen' ||
                                 item.hours === 'Chiuso' ||
                                 item.hours === 'Closed';
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center px-6 py-4 ${
                      isClosed ? 'bg-muted/30' : ''
                    }`}
                  >
                    <span className={`font-medium ${isClosed ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {item.day}
                    </span>
                    <span className={`${isClosed ? 'text-muted-foreground italic' : 'text-primary font-medium'}`}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
