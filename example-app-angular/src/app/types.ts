export interface Bohne {
  id: string;
  art: string;
  ekp: number;
  marge: number;
  rabatt: number;
  vkp: number;
  vkpRabatt: number;
}

export interface ChangeBohne {
  id: string;
  art?: string;
  ekp?: number;
  marge?: number;
  rabatt?: number;
  vkp?: number;
  vkpRabatt?: number;
}
