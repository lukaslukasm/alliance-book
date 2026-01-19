import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";

import { getCharacters } from "@/services/characters.service";
import { Character } from "@/types/types";

export default async function Home() {
  const characters: Character[] = await getCharacters(process.env.DATA_URL);

  return (
    <main className="flex flex-col gap-4 px-2 mt-8 items-center">
      <TypographyH1>The Alliance Book</TypographyH1>
      <AllianceBook characters={characters} />
    </main>
  );
}
