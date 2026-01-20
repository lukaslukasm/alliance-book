export interface SWAPICharacterRaw {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  created: string;
  edited: string;
}
// todo add fields we'll have
export interface Character extends SWAPICharacterRaw {
  id: number;
}

export type SearchParams = Partial<Character> & {
  search?: string;
  page?: number;
};
