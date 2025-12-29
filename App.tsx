
import React, { useState, useEffect } from 'react';
import { ChevronRight, Instagram, MessageCircle, Star, Shield, Heart, MapPin, X, CheckCircle, Sparkles, UserCheck, ArrowRight, Eye, MousePointer2, Check } from 'lucide-react';
import { EXPERT_NAME, WHATSAPP_URL, WHATSAPP_BASE_URL, WHATSAPP_PHONE, INSTAGRAM_URL, QUIZ_QUESTIONS, TRANSFORMATION_RESULTS, SIGNATURE_RESULTS, TRUST_CARDS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'CHOICE' | 'QUIZ' | 'RESULT' | 'LANDING'>('CHOICE');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextStep = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setView('RESULT');
    }
  };

  const getWhatsappMessage = (includeQuiz: boolean) => {
    if (!includeQuiz) return WHATSAPP_URL;
    const summary = QUIZ_QUESTIONS.map((q, i) => `*${q.question}*\nR: ${answers[i]}`).join('\n\n');
    const fullText = `Olá Dra. Brunna! Acabei de fazer a avaliação de perfil no seu site:\n\n${summary}`;
    return `${WHATSAPP_BASE_URL}/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(fullText)}`;
  };

  const LandingContent = () => (
    <main className="relative w-full overflow-x-hidden">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest text-stone-800 uppercase leading-none">BRUNNA ARANTES</span>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-premium-gold mt-1">Harmonização Facial</span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white p-3 rounded-full shadow-lg active:scale-90 transition-transform">
            <MessageCircle size={18} />
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative h-screen min-h-[667px] flex items-center bg-stone-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/5tcwWbe.png" alt="Dra. Brunna Arantes" className="w-full h-full object-cover object-top opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-md space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">Eu sou <span className="text-premium-gold italic">Brunna Arantes</span></h1>
            <p className="text-stone-600 text-lg font-medium leading-relaxed">Especialista em realçar sua beleza natural com segurança, exclusividade e resultados polidos.</p>
            <div className="flex flex-col space-y-4 pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-5 rounded-2xl font-bold text-lg space-x-3 shadow-2xl animate-soft-pulse active:scale-95 transition-all">
                <MessageCircle size={22} />
                <span>Agendar consulta gratuita</span>
              </a>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest ml-2">Rio Verde-GO • Atendimento Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://i.imgur.com/oNSkLLs.png" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl" alt="Brunna Arantes" />
            <div className="absolute -bottom-6 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-stone-50">
              <p className="text-premium-gold font-serif text-3xl font-bold">+1.000</p>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-none">Vidas Transformadas</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-stone-800 leading-tight">Sua essência é sua maior joia.</h2>
            <p className="text-stone-500 leading-relaxed text-lg">Não se trata de mudar quem você é, mas de realçar o que você já tem de melhor. Com um olhar artístico e precisão técnica, meu método prioriza a sua identidade.</p>
            <ul className="space-y-4 pt-4">
              {['Atendimento Individualizado', 'Planejamento Exclusivo', 'Produtos de Alta Performance'].map((t, i) => (
                <li key={i} className="flex items-center space-x-3 text-stone-700 font-bold uppercase tracking-widest text-[11px]">
                  <CheckCircle size={16} className="text-premium-gold" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. GALERIA 1: TRANSFORMAÇÕES REAIS (PROVAS SOCIAIS) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-premium-gold font-bold uppercase tracking-[0.3em] text-[10px]">Antes e Depois</span>
            <h2 className="font-serif text-4xl font-bold text-stone-800">Transformações Reais</h2>
            <p className="text-stone-400 text-sm max-w-sm mx-auto">Resultados que preservam a naturalidade e devolvem a confiança.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {TRANSFORMATION_RESULTS.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedImage(img.url)}>
                <img src={img.url} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" alt="Resultado Brunna Arantes" />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-stone-800 mb-16">Diferenciais do Método</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TRUST_CARDS.map((card, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-stone-50 text-left space-y-4 border border-stone-100 flex flex-col items-start transition-all hover:bg-stone-100">
                <div className="bg-white p-3 rounded-xl shadow-sm"><Star size={24} className="text-premium-gold" /></div>
                <h3 className="font-bold text-stone-800 uppercase tracking-widest text-sm">{card.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALERIA 2: HARMONIZAÇÃO DE CORAÇÃO 💚 */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full font-black uppercase tracking-widest text-[9px] animate-pulse">Portfólio Exclusivo</span>
            <h2 className="font-serif text-4xl font-bold text-stone-800">Harmonização Facial de <span className="text-green-500">💚</span></h2>
            <p className="text-stone-400 text-sm max-w-sm mx-auto">A nossa marca registrada. Arte e ciência unidas em cada detalhe.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SIGNATURE_RESULTS.map((img, i) => (
              <div key={i} className="aspect-square relative group overflow-hidden rounded-xl shadow-sm cursor-pointer" onClick={() => setSelectedImage(img.url)}>
                <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-2 group-hover:scale-110" loading="lazy" alt="Harmonização de Coração" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Heart className="text-white fill-white" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-32 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-premium-gold"></div>
        <div className="container mx-auto px-6 max-w-xl space-y-8 relative z-10">
          <h2 className="font-serif text-5xl font-bold leading-tight">O próximo sorriso renovado pode ser o seu.</h2>
          <p className="text-stone-400 text-lg">Garanta agora sua primeira consulta de avaliação gratuita em Rio Verde - GO.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-4 bg-premium-gold text-stone-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl active:scale-95 transition-all">
            <MessageCircle size={28} />
            <span>Reservar meu horário</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white border-t border-stone-100 text-center space-y-8">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-stone-900 tracking-widest uppercase leading-none">BRUNNA ARANTES</span>
          <span className="font-signature text-6xl text-premium-gold -mt-2">Brunna Arantes</span>
        </div>
        <div className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] space-y-2">
          <p className="flex items-center justify-center space-x-2"><MapPin size={14} className="text-premium-gold" /> <span>Rio Verde - GO</span></p>
          <p>© {new Date().getFullYear()} • TODOS OS DIREITOS RESERVADOS</p>
        </div>
        <div className="flex justify-center space-x-6 text-stone-300">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-premium-gold transition-colors"><Instagram size={24} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors"><MessageCircle size={24} /></a>
        </div>
      </footer>
    </main>
  );

  {/* INTERFACES DE FLUXO */}
  if (view === 'CHOICE') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-md">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl flex flex-col items-center text-center space-y-8 animate-in zoom-in duration-500 border border-white/20">
          {/* MOLDURA PREMIUM COM FOTO */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-premium-gold shadow-2xl animate-soft-pulse">
              <img src="https://i.imgur.com/5tcwWbe.png" alt="Dra. Brunna" className="w-full h-full object-cover object-top rounded-full border-4 border-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg"><Sparkles size={16} className="text-premium-gold animate-pulse" /></div>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-widest">Bem-vinda</h1>
            <p className="text-stone-500 text-sm font-medium">Como deseja iniciar sua experiência?</p>
          </div>
          <div className="w-full space-y-3">
            <button onClick={() => setView('QUIZ')} className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex justify-between px-6 items-center group active:scale-95 shadow-xl transition-all">
              <span>Avaliação Premium</span> <ChevronRight size={18} className="group-hover:translate-x-1" />
            </button>
            <button onClick={() => setView('LANDING')} className="w-full text-stone-400 py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-stone-600 transition-colors">Apenas conhecer o site</button>
          </div>
          <p className="text-[9px] text-stone-300 font-black italic tracking-[0.5em] uppercase">Dra. {EXPERT_NAME}</p>
        </div>
      </div>
    );
  }

  if (view === 'QUIZ') {
    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/5tcwWbe.png" alt="Fundo Quiz" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"></div>
        </div>
        <div className="relative z-10 w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 duration-500 overflow-hidden">
          <div className="px-8 pt-10 pb-4 flex justify-between items-center">
             <div className="flex flex-col"><span className="text-[9px] font-black uppercase text-premium-gold tracking-widest">Dra. {EXPERT_NAME}</span><span className="text-[10px] text-stone-400 font-bold uppercase">Análise Facial</span></div>
             <button onClick={() => setView('CHOICE')} className="p-2 bg-stone-50 rounded-full text-stone-400"><X size={16} /></button>
          </div>
          <div className="px-8 py-2"><div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden"><div className="h-full bg-premium-gold transition-all duration-700" style={{ width: `${progress}%` }} /></div></div>
          <div className="flex-1 px-8 py-10 space-y-8 max-h-[60vh] overflow-y-auto no-scrollbar">
            <h2 className="font-serif text-2xl font-bold text-stone-900 leading-tight">{QUIZ_QUESTIONS[currentQuestion].question}</h2>
            <div className="grid gap-3">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                <button key={idx} onClick={() => handleNextStep(option)} className="w-full bg-white border border-stone-100 p-4.5 rounded-xl text-left text-stone-700 font-bold text-sm hover:border-premium-gold active:scale-95 transition-all shadow-sm flex justify-between items-center">
                  <span>{option}</span> <ChevronRight size={14} className="text-stone-300" />
                </button>
              ))}
            </div>
          </div>
          <div className="p-8 border-t border-stone-50 text-center"><button onClick={() => setView('LANDING')} className="text-stone-300 text-[9px] font-black uppercase tracking-widest">Ver o site</button></div>
        </div>
      </div>
    );
  }

  if (view === 'RESULT') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/oNSkLLs.png" alt="Fundo Resultado" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-xl"></div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl flex flex-col items-center text-center animate-in zoom-in duration-500 relative border border-white/20">
          <div className="absolute top-0 left-0 w-full h-3 bg-premium-gold"></div>
          <div className="relative mb-8 mt-4">
            <img src="https://i.imgur.com/5tcwWbe.png" className="w-36 h-36 object-cover object-top rounded-full border-4 border-white shadow-2xl" alt={EXPERT_NAME} />
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-2 rounded-full border-2 border-white animate-bounce"><CheckCircle size={20} /></div>
          </div>
          <div className="space-y-4 mb-10">
            <div className="inline-block bg-premium-gold/10 px-4 py-1 rounded-full"><p className="text-premium-gold font-black uppercase tracking-widest text-[9px]">Análise Concluída</p></div>
            <h2 className="font-serif text-3xl font-bold text-stone-900 leading-tight">Perfil Ideal identificado.</h2>
            <p className="text-stone-500 text-sm leading-relaxed px-4">Parabéns! Suas respostas indicam que você busca a naturalidade que é a essência do meu trabalho.</p>
          </div>
          <div className="w-full space-y-3">
            <a href={getWhatsappMessage(true)} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white py-5 rounded-2xl font-bold text-base flex justify-center items-center space-x-3 shadow-xl animate-soft-pulse active:scale-95 transition-all">
              <MessageCircle size={22} /> <span>Enviar Avaliação à Dra.</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold text-xs flex justify-center items-center space-x-2 active:scale-95 transition-all">
              <MessageCircle size={18} /> <span>Chamar sem compromisso</span>
            </a>
            <button onClick={() => setView('LANDING')} className="w-full text-stone-300 py-3 font-black uppercase tracking-widest text-[9px]">Ver o site completo</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfbf7]">
      <LandingContent />
      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-stone-950/98 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white p-3"><X size={32} /></button>
          <div className="max-w-md w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl border border-white/10" alt="Resultado em destaque" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 bg-premium-gold text-stone-900 px-8 py-4 rounded-xl font-bold flex items-center space-x-3 active:scale-95 shadow-xl transition-all">
              <MessageCircle size={22} /> <span className="text-sm uppercase tracking-widest">Quero esse resultado</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
