"use client";
import { ItemGroup } from "./ui/item";
import { Character, Planet } from "@/types/types";
import { CharacterCard } from "./character-card";

/**
 * Lists characters from the Redux store.
 *
 */
export default function PeopleList({
  characters,
  planets,
}: {
  characters: Character[];
  planets: Planet[];
}) {
  return (
    <ItemGroup className="gap-2 sm:gap-3 justify-center grid grid-cols-2 items-stretch sm:grid-cols-3 md:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
          planets={planets}
        />
      ))}
    </ItemGroup>
  );
}
