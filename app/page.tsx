import AllianceBook from "@/components/AllianceBook";

import { getCharacters } from "@/services/characters.service";
import { Character } from "@/types/types";

export default async function Home() {
  const characters: Character[] = await getCharacters(process.env.DATA_URL);

  return <AllianceBook characters={characters} />;
}
