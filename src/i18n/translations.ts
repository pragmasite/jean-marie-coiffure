export type Language = 'fr' | 'de' | 'it' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    hours: string;
    location: string;
    contact: string;
  };
  disclaimer: {
    title: string;
    message: string;
    dismiss: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string[];
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  hours: {
    title: string;
    closed: string;
    days: {
      day: string;
      hours: string;
    }[];
  };
  location: {
    title: string;
    address: string;
    phone: string;
    followUs: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      services: 'Services',
      hours: 'Horaires',
      location: 'Nous trouver',
      contact: 'Contact',
    },
    disclaimer: {
      title: 'Apercu du site',
      message: 'Ce site est un apercu et n\'est pas indexe par les moteurs de recherche. Il peut contenir des erreurs ou des informations incompletes.',
      dismiss: 'J\'ai compris',
    },
    hero: {
      title: 'Jean Marie Coiffure & Onglerie',
      subtitle: 'Votre salon de beaute a Fribourg. Coiffure, soins des ongles et traitements esthetiques dans une atmosphere chaleureuse et professionnelle.',
      cta: 'Nous appeler',
    },
    about: {
      title: 'Bienvenue chez nous',
      content: [
        'Jean Marie Coiffure & Onglerie vous accueille dans un cadre elegant et chaleureux au coeur de Fribourg.',
        'Notre equipe passionnee met tout son savoir-faire a votre service pour sublimer votre beaute. Que ce soit pour une coupe tendance, une coloration sur mesure, des soins des ongles impeccables ou un moment de detente avec nos massages, nous vous offrons une experience personnalisee.',
        'Decouvrez egalement notre soin exclusif Colombian Lifting pour une peau rajeunie et eclatante.',
      ],
    },
    services: {
      title: 'Nos Services',
      items: [
        { title: 'Coupe femme', description: 'Coupes modernes et classiques adaptees a votre style et a la nature de vos cheveux.' },
        { title: 'Coupe homme', description: 'Coupes soignees et tendance pour un look impeccable.' },
        { title: 'Coloration', description: 'Balayages, meches, couleurs completes avec des produits de qualite professionnelle.' },
        { title: 'Traitement keratine', description: 'Lissage et soin a la keratine pour des cheveux soyeux et brillants.' },
        { title: 'Manucure', description: 'Soins des ongles, pose de vernis classique ou semi-permanent.' },
        { title: 'Pedicure', description: 'Soins complets des pieds pour un confort et une beaute optimale.' },
        { title: 'Massages', description: 'Moments de relaxation et de bien-etre avec nos massages professionnels.' },
        { title: 'Epilation', description: 'Epilation a la cire pour une peau douce et lisse.' },
        { title: 'Colombian Lifting', description: 'Soin esthetique innovant pour raffermir et rajeunir la peau du visage.' },
      ],
    },
    hours: {
      title: 'Horaires d\'ouverture',
      closed: 'Ferme',
      days: [
        { day: 'Lundi', hours: 'Ferme' },
        { day: 'Mardi', hours: '09:00 - 18:30' },
        { day: 'Mercredi', hours: '09:00 - 18:30' },
        { day: 'Jeudi', hours: '09:00 - 18:30' },
        { day: 'Vendredi', hours: '09:00 - 18:30' },
        { day: 'Samedi', hours: '09:00 - 16:00' },
        { day: 'Dimanche', hours: 'Ferme' },
      ],
    },
    location: {
      title: 'Nous trouver',
      address: 'Boulevard de Perolles 28, 1700 Fribourg',
      phone: 'Telephone',
      followUs: 'Suivez-nous',
    },
    footer: {
      rights: 'Tous droits reserves.',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Uber uns',
      services: 'Dienstleistungen',
      hours: 'Offnungszeiten',
      location: 'Standort',
      contact: 'Kontakt',
    },
    disclaimer: {
      title: 'Website-Vorschau',
      message: 'Diese Website ist eine Vorschau und wird nicht von Suchmaschinen indexiert. Sie kann Fehler oder unvollstandige Informationen enthalten.',
      dismiss: 'Verstanden',
    },
    hero: {
      title: 'Jean Marie Coiffure & Onglerie',
      subtitle: 'Ihr Schonheitssalon in Freiburg. Friseur, Nagelpflege und asthetische Behandlungen in einer warmen und professionellen Atmosphare.',
      cta: 'Rufen Sie uns an',
    },
    about: {
      title: 'Willkommen bei uns',
      content: [
        'Jean Marie Coiffure & Onglerie empfangt Sie in einem eleganten und warmen Ambiente im Herzen von Freiburg.',
        'Unser leidenschaftliches Team stellt sein ganzes Know-how in Ihren Dienst, um Ihre Schonheit zu unterstreichen. Ob fur einen trendigen Haarschnitt, eine massgeschneiderte Farbung, makellose Nagelpflege oder einen Moment der Entspannung mit unseren Massagen - wir bieten Ihnen ein personalisiertes Erlebnis.',
        'Entdecken Sie auch unsere exklusive Colombian Lifting Behandlung fur eine verjungte und strahlende Haut.',
      ],
    },
    services: {
      title: 'Unsere Dienstleistungen',
      items: [
        { title: 'Damenhaarschnitt', description: 'Moderne und klassische Schnitte, angepasst an Ihren Stil und Ihre Haarstruktur.' },
        { title: 'Herrenhaarschnitt', description: 'Gepflegte und trendige Schnitte fur einen makellosen Look.' },
        { title: 'Farbung', description: 'Balayage, Strahnen, Komplettfarben mit professionellen Qualitätsprodukten.' },
        { title: 'Keratin-Behandlung', description: 'Glattung und Keratinpflege fur seidiges und glanzendes Haar.' },
        { title: 'Manikure', description: 'Nagelpflege, klassischer oder semipermanenter Lack.' },
        { title: 'Pedikure', description: 'Komplette Fusspflege fur optimalen Komfort und Schonheit.' },
        { title: 'Massagen', description: 'Momente der Entspannung und des Wohlbefindens mit unseren professionellen Massagen.' },
        { title: 'Haarentfernung', description: 'Wachsepilation fur weiche und glatte Haut.' },
        { title: 'Colombian Lifting', description: 'Innovative asthetische Behandlung zur Straffung und Verjungung der Gesichtshaut.' },
      ],
    },
    hours: {
      title: 'Offnungszeiten',
      closed: 'Geschlossen',
      days: [
        { day: 'Montag', hours: 'Geschlossen' },
        { day: 'Dienstag', hours: '09:00 - 18:30' },
        { day: 'Mittwoch', hours: '09:00 - 18:30' },
        { day: 'Donnerstag', hours: '09:00 - 18:30' },
        { day: 'Freitag', hours: '09:00 - 18:30' },
        { day: 'Samstag', hours: '09:00 - 16:00' },
        { day: 'Sonntag', hours: 'Geschlossen' },
      ],
    },
    location: {
      title: 'So finden Sie uns',
      address: 'Boulevard de Perolles 28, 1700 Freiburg',
      phone: 'Telefon',
      followUs: 'Folgen Sie uns',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      services: 'Servizi',
      hours: 'Orari',
      location: 'Dove siamo',
      contact: 'Contatto',
    },
    disclaimer: {
      title: 'Anteprima del sito',
      message: 'Questo sito e un\'anteprima e non e indicizzato dai motori di ricerca. Potrebbe contenere errori o informazioni incomplete.',
      dismiss: 'Ho capito',
    },
    hero: {
      title: 'Jean Marie Coiffure & Onglerie',
      subtitle: 'Il vostro salone di bellezza a Friburgo. Parrucchiere, cura delle unghie e trattamenti estetici in un\'atmosfera calda e professionale.',
      cta: 'Chiamaci',
    },
    about: {
      title: 'Benvenuti da noi',
      content: [
        'Jean Marie Coiffure & Onglerie vi accoglie in un ambiente elegante e accogliente nel cuore di Friburgo.',
        'Il nostro team appassionato mette tutto il suo know-how al vostro servizio per esaltare la vostra bellezza. Che si tratti di un taglio trendy, di una colorazione su misura, di una cura delle unghie impeccabile o di un momento di relax con i nostri massaggi, vi offriamo un\'esperienza personalizzata.',
        'Scoprite anche il nostro esclusivo trattamento Colombian Lifting per una pelle ringiovanita e luminosa.',
      ],
    },
    services: {
      title: 'I nostri servizi',
      items: [
        { title: 'Taglio donna', description: 'Tagli moderni e classici adattati al vostro stile e alla natura dei vostri capelli.' },
        { title: 'Taglio uomo', description: 'Tagli curati e trendy per un look impeccabile.' },
        { title: 'Colorazione', description: 'Balayage, meches, colori completi con prodotti di qualita professionale.' },
        { title: 'Trattamento cheratina', description: 'Lisciatura e cura alla cheratina per capelli setosi e brillanti.' },
        { title: 'Manicure', description: 'Cura delle unghie, smalto classico o semipermanente.' },
        { title: 'Pedicure', description: 'Cura completa dei piedi per un comfort e una bellezza ottimali.' },
        { title: 'Massaggi', description: 'Momenti di relax e benessere con i nostri massaggi professionali.' },
        { title: 'Epilazione', description: 'Epilazione a cera per una pelle morbida e liscia.' },
        { title: 'Colombian Lifting', description: 'Trattamento estetico innovativo per rassodare e ringiovanire la pelle del viso.' },
      ],
    },
    hours: {
      title: 'Orari di apertura',
      closed: 'Chiuso',
      days: [
        { day: 'Lunedi', hours: 'Chiuso' },
        { day: 'Martedi', hours: '09:00 - 18:30' },
        { day: 'Mercoledi', hours: '09:00 - 18:30' },
        { day: 'Giovedi', hours: '09:00 - 18:30' },
        { day: 'Venerdi', hours: '09:00 - 18:30' },
        { day: 'Sabato', hours: '09:00 - 16:00' },
        { day: 'Domenica', hours: 'Chiuso' },
      ],
    },
    location: {
      title: 'Dove trovarci',
      address: 'Boulevard de Perolles 28, 1700 Friburgo',
      phone: 'Telefono',
      followUs: 'Seguici',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      hours: 'Hours',
      location: 'Location',
      contact: 'Contact',
    },
    disclaimer: {
      title: 'Website Preview',
      message: 'This website is a preview and is not indexed by search engines. It may contain errors or incomplete information.',
      dismiss: 'I understand',
    },
    hero: {
      title: 'Jean Marie Coiffure & Onglerie',
      subtitle: 'Your beauty salon in Fribourg. Hair styling, nail care and aesthetic treatments in a warm and professional atmosphere.',
      cta: 'Call us',
    },
    about: {
      title: 'Welcome',
      content: [
        'Jean Marie Coiffure & Onglerie welcomes you in an elegant and warm setting in the heart of Fribourg.',
        'Our passionate team puts all its expertise at your service to enhance your beauty. Whether for a trendy haircut, a customized coloring, impeccable nail care or a moment of relaxation with our massages, we offer you a personalized experience.',
        'Also discover our exclusive Colombian Lifting treatment for rejuvenated and radiant skin.',
      ],
    },
    services: {
      title: 'Our Services',
      items: [
        { title: 'Women\'s haircut', description: 'Modern and classic cuts adapted to your style and hair type.' },
        { title: 'Men\'s haircut', description: 'Neat and trendy cuts for an impeccable look.' },
        { title: 'Coloring', description: 'Balayage, highlights, full colors with professional quality products.' },
        { title: 'Keratin treatment', description: 'Smoothing and keratin care for silky and shiny hair.' },
        { title: 'Manicure', description: 'Nail care, classic or semi-permanent polish.' },
        { title: 'Pedicure', description: 'Complete foot care for optimal comfort and beauty.' },
        { title: 'Massages', description: 'Moments of relaxation and well-being with our professional massages.' },
        { title: 'Hair removal', description: 'Wax epilation for soft and smooth skin.' },
        { title: 'Colombian Lifting', description: 'Innovative aesthetic treatment to firm and rejuvenate facial skin.' },
      ],
    },
    hours: {
      title: 'Opening Hours',
      closed: 'Closed',
      days: [
        { day: 'Monday', hours: 'Closed' },
        { day: 'Tuesday', hours: '09:00 - 18:30' },
        { day: 'Wednesday', hours: '09:00 - 18:30' },
        { day: 'Thursday', hours: '09:00 - 18:30' },
        { day: 'Friday', hours: '09:00 - 18:30' },
        { day: 'Saturday', hours: '09:00 - 16:00' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    location: {
      title: 'Find Us',
      address: 'Boulevard de Perolles 28, 1700 Fribourg',
      phone: 'Phone',
      followUs: 'Follow us',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
