import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { getCharacters } from "@/services/characters.service";
import { Character } from "@/types/types";

export type HomepageProps = {
  searchParams: Promise<{
    search?: string;
    page?: number;
  }>;
};

export default async function Home({ searchParams }: HomepageProps) {
  const page = Number((await searchParams).page ?? 1);

  const characters: Character[] = await getCharacters(process.env.DATA_URL);

  return (
    <main className="flex flex-col gap-4 px-2 my-8 items-center">
      <TypographyH1>The Alliance Book</TypographyH1>
      <AllianceBook characters={characters} page={page ?? 1} />
    </main>
  );
}
