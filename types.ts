
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface GalleryImage {
  url: string;
  category: 'result' | 'expert';
  label?: string;
}
