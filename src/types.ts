export interface Film {
  id: number;
  title: string;
  src: string;
  background: string;
  preview: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
  voiceCount: number;
  director: string;
  actorList: Array<string>;
  runtime: number;
  video: string;
  fullVideo: string;
  isFavorite: boolean;
}

export interface Details {
  genre?: string;
  year?: number;
  director?: string;
  actorList?: Array<string>;
  runtime?: number;
}

export interface Overview {
  description?: string;
  rating?: number;
  voiceCount?: number;
  director?: string;
  actorList?: Array<string>;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Tab {
  title: string;
  value: Details | Overview | Review | number;
}

export interface ActiveItem {
  title: string;
  value: Overview;
}

export interface RatingDescriptionType {
  min: number;
  max?: number;
  title: string;
}
