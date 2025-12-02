export interface CSFDOptions {
  language?: CSFDLanguage;
  request?: RequestInit;
}

export type CSFDLanguage = 'cs' | 'en' | 'sk';