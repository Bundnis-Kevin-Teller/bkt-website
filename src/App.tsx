import React, { useState } from 'react';
import { PartyPopper, Users, Brain, FileText, MessageCircle, ArrowDown, Disc as Discord, Menu, X, Heart, Sun, Moon, Monitor, Download, Mail, Star, Trophy, Laugh, Quote, ThumbsUp, Target, Sparkles, Rocket, Coffee, Users2, Coins, Gift, Award, Crown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const isDark = 
      newTheme === 'dark' || 
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel px-4 py-2 md:py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://bkt-info.org/bkt.png" 
              alt="BKT Logo" 
              className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">BKT</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              <button
                onClick={() => toggleTheme('light')}
                className={`theme-button ${theme === 'light' ? 'active' : ''}`}
                title="Light Mode"
              >
                <Sun size={20} />
              </button>
              <button
                onClick={() => toggleTheme('dark')}
                className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
                title="Dark Mode"
              >
                <Moon size={20} />
              </button>
              <button
                onClick={() => toggleTheme('system')}
                className={`theme-button ${theme === 'system' ? 'active' : ''}`}
                title="System Theme"
              >
                <Monitor size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">Über uns</button>
              <button onClick={() => scrollToSection('why')} className="nav-link">Warum?</button>
              <button onClick={() => scrollToSection('program')} className="nav-link">Wahlprogramm</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Kontakt</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav-overlay ${isMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`mobile-nav-content ${isMenuOpen ? 'visible' : ''}`}>
        {/* Mobile Theme Toggle */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            onClick={() => toggleTheme('light')}
            className={`theme-button ${theme === 'light' ? 'active' : ''}`}
            title="Light Mode"
          >
            <Sun size={20} />
          </button>
          <button
            onClick={() => toggleTheme('dark')}
            className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
            title="Dark Mode"
          >
            <Moon size={20} />
          </button>
          <button
            onClick={() => toggleTheme('system')}
            className={`theme-button ${theme === 'system' ? 'active' : ''}`}
            title="System Theme"
          >
            <Monitor size={20} />
          </button>
        </div>
        <button onClick={() => scrollToSection('about')} className="nav-link w-full text-center py-2">Über uns</button>
        <button onClick={() => scrollToSection('why')} className="nav-link w-full text-center py-2">Warum?</button>
        <button onClick={() => scrollToSection('program')} className="nav-link w-full text-center py-2">Wahlprogramm</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link w-full text-center py-2">Kontakt</button>
      </div>

      <div className="min-h-screen px-4 py-24 md:px-8">
        {/* Hero Section */}
        <section className="content-section text-center">
          <h1 className="hero-title">
            Willkommen beim Bündnis Kevin Teller!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Die erste Partei, die Politik mit einem Augenzwinkern nimmt! 🎉
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://discord.gg/KE4Aj9YX96"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-2"
            >
              <Discord size={20} />
              Jetzt Mitglied werden
            </a>
            <a 
              href="https://dcserver.link/bkt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
            >
              oder direkt zum Discord (dcserver.link/bkt)
            </a>
          </div>
          <div className="mt-12">
            <ArrowDown className="mx-auto text-red-500 animate-bounce dark:text-red-400" size={32} />
          </div>
        </section>

        {/* Features Section */}
        <section className="content-section">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <Star className="feature-icon" size={32} />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p>Eine Partei von der Community, für die Community. Jede Stimme zählt bei uns!</p>
            </div>
            <div className="feature-card">
              <Trophy className="feature-icon" size={32} />
              <h3 className="text-xl font-semibold mb-2">Echte Ziele</h3>
              <p>Wir setzen uns für mehr Spaß und weniger Stress in der Politik ein.</p>
            </div>
            <div className="feature-card">
              <Laugh className="feature-icon" size={32} />
              <h3 className="text-xl font-semibold mb-2">Humor & Politik</h3>
              <p>Politik muss nicht langweilig sein. Wir bringen frischen Wind in verstaubte Debatten!</p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <Target className="text-red-600 dark:text-red-400" /> Unsere Erfolge
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="achievement-card">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">70+</div>
              <p>Discord Mitglieder</p>
            </div>
            <div className="achievement-card">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">50+</div>
              <p>Community Events</p>
            </div>
            <div className="achievement-card">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">100%</div>
              <p>Meme-Qualität</p>
            </div>
            <div className="achievement-card">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">∞</div>
              <p>Spaß-Faktor</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <Users2 className="text-red-600 dark:text-red-400" /> Unser Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="team-card">
              <div className="relative">
                <Crown className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-500" size={32} />
                <img 
                  src="https://bkt-info.org/jt.png" 
                  alt="JT_lol" 
                  className="team-image"
                />
              </div>
              <div className="team-content">
                <h3 className="text-2xl font-bold mb-2">JT_lol</h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-4">Founder</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Der Kopf hinter der Vision des BKT. Bringt frischen Wind in die Politik!
                </p>
              </div>
            </div>
            <div className="team-card">
              <img 
                src="https://bkt-info.org/Emin.png" 
                alt="EministarVR" 
                className="team-image"
              />
              <div className="team-content">
                <h3 className="text-2xl font-bold mb-2">EministarVR</h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-4">Co-Founder & Development</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Technisches Genie und Visionär. Sorgt dafür, dass alles reibungslos läuft.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img 
                src="https://bkt-info.org/media.png" 
                alt="SoulR4gELxGen" 
                className="team-image"
              />
              <div className="team-content">
                <h3 className="text-2xl font-bold mb-2">SoulR4gELxGen</h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-4">Media</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Kreativkopf und Mediengenie. Bringt unsere Message visuell auf den Punkt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Us Section */}
        <section className="content-section bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 text-white">
          <div className="text-center space-y-6">
            <Coffee className="mx-auto" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold">Unterstütze unsere Mission!</h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Server und Bots kosten Geld - aber wir wollen weiterhin kostenlos für die Community da sein.
              Deine Unterstützung hilft uns dabei, die Infrastruktur am Laufen zu halten!
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="support-card">
                <Coins className="mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Server Kosten</h3>
                <p>Hilf uns dabei, die Server-Infrastruktur zu finanzieren</p>
              </div>
              <div className="support-card">
                <Gift className="mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Discord Bot</h3>
                <p>Unterstütze die Entwicklung unseres Community Bots</p>
              </div>
              <div className="support-card">
                <Award className="mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p>Ermögliche uns noch mehr Community Events</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
  <a 
    href="https://ko-fi.com/eministarvr"
    target="_blank"
    rel="noopener noreferrer"
    className="support-button"
  >
    <Coffee size={20} />
    Unterstütze das BKT
  </a>
</div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <Quote className="text-red-600 dark:text-red-400" /> Was unsere Wähler sagen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Kevin M." 
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="font-semibold text-xl mb-2">Kevin M.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "Endlich eine Partei, die Politik nicht so ernst nimmt! Die Memes sind top und die Community ist mega!"
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                alt="Lisa T." 
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="font-semibold text-xl mb-2">Lisa T.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "Die Events sind immer super organisiert und man lernt so viele coole Leute kennen. BKT für den Win!"
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                alt="Max P." 
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="font-semibold text-xl mb-2">Max P.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "Beste Community ever! Hier wird Politik endlich mal verständlich und unterhaltsam erklärt."
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <Sparkles className="text-red-600 dark:text-red-400" /> Kommende Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="event-card">
              <div className="event-date">
                <span className="text-2xl font-bold">15</span>
                <span>März</span>
              </div>
              <div className="event-details">
                <h3 className="text-xl font-semibold">Meme Contest</h3>
                <p>Erstelle das beste politische Meme und gewinne tolle Preise!</p>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="text-2xl font-bold">22</span>
                <span>März</span>
              </div>
              <div className="event-details">
                <h3 className="text-xl font-semibold">Community Meeting</h3>
                <p>Diskutiere mit uns über die neuesten Entwicklungen!</p>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="text-2xl font-bold">01</span>
                <span>April</span>
              </div>
              <div className="event-details">
                <h3 className="text-xl font-semibold">BKT Convention</h3>
                <p>Das große Community-Treffen mit vielen Überraschungen!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="content-section bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white">
          <div className="text-center space-y-6">
            <Rocket className="mx-auto" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold">Werde Teil der Bewegung!</h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Gemeinsam machen wir Politik wieder spannend und zugänglich für alle.
              Tritt jetzt unserem Discord bei und gestalte die Zukunft mit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a 
                href="https://discord.gg/KE4Aj9YX96"
                target="_blank"
                rel="noopener noreferrer"
                className="movement-button"
              >
                <Discord size={20} />
                Discord beitreten
              </a>
              <a 
                href="https://dcserver.link/bkt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                oder direkt: dcserver.link/bkt
              </a>
            </div>
          </div>
        </section>

        {/* Wer sind wir? Section */}
        <section id="about" className="content-section">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="section-title flex items-center gap-3">
                <Users className="text-red-600 dark:text-red-400" /> Wer sind wir?
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Wir sind eine Spaßpartei, die mit Humor und einem Lächeln politische Diskussionen auf die leichte Schulter nimmt. 
                  Unser Ziel? Spaß und Zusammenhalt – und ein bisschen Memes!
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Gegründet von Fans für Fans, verstehen wir uns als Brücke zwischen Entertainment und Politik. 
                  Wir glauben fest daran, dass man wichtige Themen auch mit einem Augenzwinkern diskutieren kann.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Bei uns steht die Community im Mittelpunkt. Jedes Mitglied kann sich einbringen, Ideen teilen und Teil einer 
                  wachsenden Bewegung werden, die Politik neu denkt.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://bkt-info.org/kevin.png" 
                alt="Team Spirit" 
                className="rounded-xl glass-panel p-2 w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Warum? Section */}
        <section id="why" className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <Brain className="text-red-600 dark:text-red-400" /> Warum BKT?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Weil es die Welt braucht! Spaß in der Politik – wer sagt, dass Politik immer ernst sein muss? 
                Wir wollen, dass alle lachen und dabei die wichtigen Themen nicht aus den Augen verlieren.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                In einer Zeit, in der politische Debatten oft von Negativität geprägt sind, setzen wir auf positive Energie 
                und konstruktiven Dialog – gewürzt mit einer ordentlichen Portion Humor.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Unsere Grundsätze:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <PartyPopper className="text-red-500 dark:text-red-400" size={20} />
                  <span>Humor als Brücke zwischen Menschen</span>
                </li>
                <li className="flex items-center gap-2">
                  <PartyPopper className="text-red-500 dark:text-red-400" size={20} />
                  <span>Community-getriebene Entscheidungen</span>
                </li>
                <li className="flex items-center gap-2">
                  <PartyPopper className="text-red-500 dark:text-red-400" size={20} />
                  <span>Transparenz und Offenheit</span>
                </li>
                <li className="flex items-center gap-2">
                  <PartyPopper className="text-red-500 dark:text-red-400" size={20} />
                  <span>Politik zum Anfassen und Mitmachen</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wahlprogramm Section */}
        <section id="program" className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <FileText className="text-red-600 dark:text-red-400" /> Wahlprogramm
          </h2>
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                Unser Wahlprogramm ist simpel – für mehr Spaß, mehr Memes und weniger Langeweile!
                Wir setzen auf klare, verständliche Politik ohne kompliziertes Blabla.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Unsere Kernthemen:</h3>
                <ul className="space-y-4">
                  {[
                    "Mehr Memes in der Politik - für eine verständlichere Kommunikation!",
                    "Keine Langeweile mehr – jede Diskussion wird unterhaltsam!",
                    "Mehr Transparenz – jeder Teller ist gleich!",
                    "Community-Engagement fördern und belohnen",
                    "Politik zum Mitmachen und Mitgestalten"
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg group">
                      <PartyPopper className="text-red-600 dark:text-red-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={24} />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Unsere Versprechen:</h3>
                <ul className="space-y-4">
                  {[
                    "Regelmäßige Community-Events und Abstimmungen",
                    "Transparente Entscheidungsprozesse",
                    "Aktive Einbindung aller Mitglieder",
                    "Spaß und Ernst in perfekter Balance",
                    "Innovative Lösungsansätze für alte Probleme"
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg group">
                      <Star className="text-red-600 dark:text-red-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={24} />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="https://bkt-info.org/wahlprogramm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="n
eon-button inline-flex items-center gap-2"
              >
                <Download size={20} />
                Wahlprogramm herunterladen
              </a>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="contact" className="content-section">
          <h2 className="section-title flex items-center gap-3">
            <MessageCircle className="text-red-600 dark:text-red-400" /> Kontakt
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Dein Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="deine@email.de"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Nachricht</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input h-32"
                    placeholder="Deine Nachricht an uns..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className={`neon-button w-full ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Absenden'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">Nachricht erfolgreich gesendet!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">Ein Fehler ist aufgetreten. Bitte versuche es später erneut.</p>
                )}
              </form>

              <div className="text-center p-6 glass-panel">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Direkte Kontaktaufnahme</h3>
                <a 
                  href="mailto:kontakt@bkt-info.org"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                >
                  <Mail size={20} />
                  kontakt@bkt-info.org
                </a>
              </div>
            </div>
            
            <div className="glass-panel p-8 text-center">
              <h3 className="text-2xl mb-4 text-red-600 dark:text-red-400">Tritt unserem Discord bei!</h3>
              <Discord className="mx-auto text-red-600 dark:text-red-400 mb-4 transition-transform duration-300 hover:scale-110" size={48} />
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Werde Teil unserer Community auf Discord! Hier findest du alle Neuigkeiten, kannst mit anderen Mitgliedern diskutieren und bist immer up to date.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://discord.gg/KE4Aj9YX96" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neon-button inline-block w-full"
                >
                  Discord beitreten
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Direktlink: <a 
                    href="https://dcserver.link/bkt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    dcserver.link/bkt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Bündnis Kevin Teller. Alle Rechte vorbehalten. Das BKT ist selbstverständlich keine ECHTE Partei.
          </p>
          <p className="footer-text flex items-center gap-1">
            Designed by EministarVR with <Heart className="footer-heart" size={16} />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;