
import { QuizQuestion, GalleryImage } from './types';

export const EXPERT_NAME = "Brunna Arantes";
export const WHATSAPP_PHONE = "5564993409898";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;
export const WHATSAPP_URL = WHATSAPP_BASE_URL;
export const INSTAGRAM_URL = "https://www.instagram.com/dra.brunnaarantes/";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "O que você mais deseja melhorar hoje?",
    options: ["Rugas e Linhas de Expressão", "Volume Labial", "Contorno do Rosto", "Qualidade da Pele"]
  },
  {
    id: 2,
    question: "Já realizou algum procedimento estético anteriormente?",
    options: ["Sim, já realizo regularmente", "Fiz poucas vezes", "Nunca fiz, mas tenho vontade", "Tenho receio de ficar artificial"]
  },
  {
    id: 3,
    question: "Qual sua principal prioridade ao escolher um profissional?",
    options: ["Naturalidade no resultado", "Segurança e Qualificação", "Preço acessível", "Atendimento Exclusivo"]
  },
  {
    id: 4,
    question: "Como você se sente ao se olhar no espelho ultimamente?",
    options: ["Sinto aparência de cansada", "Sinto que perdi o contorno jovem", "Sinto que falta algo nos lábios", "Estou bem, quero apenas prevenir"]
  }
];

// Galeria 1: Provas Sociais (Antes e Depois / Resultados)
export const TRANSFORMATION_RESULTS: GalleryImage[] = [
  { url: 'https://i.imgur.com/rvIuVcX.png', category: 'result' },
  { url: 'https://i.imgur.com/yegHYRz.png', category: 'result' },
  { url: 'https://i.imgur.com/nUkvut4.png', category: 'result' },
  { url: 'https://i.imgur.com/SO8aHbl.png', category: 'result' },
  { url: 'https://i.imgur.com/pFD8e7s.png', category: 'result' },
  { url: 'https://i.imgur.com/f2gCz8K.png', category: 'result' },
  { url: 'https://i.imgur.com/LDlTgvk.png', category: 'result' },
  { url: 'https://i.imgur.com/jx7dYQb.png', category: 'result' },
  { url: 'https://i.imgur.com/tqxOY0b.png', category: 'result' },
  { url: 'https://i.imgur.com/5CmILU5.png', category: 'result' },
  { url: 'https://i.imgur.com/GMTAbke.png', category: 'result' },
  { url: 'https://i.imgur.com/siSzue8.png', category: 'result' }
];

// Galeria 2: Harmonização Facial de 💚 (Portfólio / Estilo)
export const SIGNATURE_RESULTS: GalleryImage[] = [
  { url: 'https://i.imgur.com/oXxIqZS.png', category: 'result' },
  { url: 'https://i.imgur.com/ZvoC57L.png', category: 'result' },
  { url: 'https://i.imgur.com/ddHehVw.png', category: 'result' },
  { url: 'https://i.imgur.com/lh4rExI.png', category: 'result' },
  { url: 'https://i.imgur.com/OB7QVtB.png', category: 'result' },
  { url: 'https://i.imgur.com/OePHbx5.png', category: 'result' },
  { url: 'https://i.imgur.com/nRic98C.png', category: 'result' },
  { url: 'https://i.imgur.com/WcnIPha.png', category: 'result' },
  { url: 'https://i.imgur.com/Fo8Gy2A.png', category: 'result' },
  { url: 'https://i.imgur.com/g5S3DEb.png', category: 'result' },
  { url: 'https://i.imgur.com/qUKQYSJ.png', category: 'result' },
  { url: 'https://i.imgur.com/AsHEq3G.png', category: 'result' }
];

export const EXPERT_PHOTOS: GalleryImage[] = [
  { url: 'https://i.imgur.com/5tcwWbe.png', category: 'expert', label: 'Dra. Brunna Arantes' },
  { url: 'https://i.imgur.com/oNSkLLs.png', category: 'expert', label: 'Consultório Premium' },
  { url: 'https://i.imgur.com/jDxgaZ9.png', category: 'expert', label: 'Atendimento Exclusivo' }
];

export const TRUST_CARDS = [
  { title: "Avaliação Honesta", desc: "Não indico procedimentos desnecessários. O foco é a sua real necessidade." },
  { title: "Naturalidade", desc: "Minha assinatura é realçar sua beleza sem apagar sua identidade." },
  { title: "Segurança Total", desc: "Produtos de alta performance e técnicas validadas internacionalmente." },
  { title: "Exclusividade", desc: "Cada rosto é único. Seu planejamento é feito milimetricamente para você." }
];
