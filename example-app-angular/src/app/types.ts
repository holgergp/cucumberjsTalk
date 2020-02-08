export interface Bohne {
  id: string;
  art: string;
  ekp: string;
  marge: string;
  rabatt: string;
  vkp: string;
  vkpRabatt: string;
}

export interface ChangeBohne {
  id: string;
  art?: string;
  ekp?: string;
  marge?: string;
  rabatt?: string;
  vkp?: string;
  vkpRabatt?: number;
}
