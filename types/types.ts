import { FILTERABLE_ATTRIBUTES } from "@/lib/constants";

/**
 * Represents a Planet resource from the Star Wars API.
 */
export interface SWAPIPlanetRaw {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  poputation: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

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

export type SearchParams = Partial<
  Record<(typeof FILTERABLE_ATTRIBUTES)[number], string | string[]>
> & {
  search?: string;
  page?: number;
};

export type CharacterGender =
  | "male"
  | "female"
  | "n/a"
  | "hermaphrodite"
  | "none";

export type Planet = {
  id: number;
  name: string;
};
