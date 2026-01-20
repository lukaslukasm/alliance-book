import { FILTERABLE_ATTRIBUTES } from "@/lib/constants";

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
export interface Character extends Omit<
  SWAPICharacterRaw,
  "homeworld" | "films" | "url" | "created" | "edited"
> {
  id: number;
  homeworldId: number;
  filmsIds: number[];
  speciesId: number | null;
  vehiclesIds: number[];
  starshipsIds: number[];
}

export type SearchParams = typeof FILTERABLE_ATTRIBUTES & {
  search?: string;
  page?: number;
};

export type CharacterGender =
  | "male"
  | "female"
  | "n/a"
  | "hermaphrodite"
  | "none";
