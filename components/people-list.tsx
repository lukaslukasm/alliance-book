"use client";
import { ItemGroup } from "./ui/item";
import { Character } from "@/types/types";
import { CharacterCard } from "./character-card";

/**
 * Lists characters from the Redux store.
 *
 */
export default function PeopleList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <ItemGroup className="gap-2 sm:gap-3 justify-center grid grid-cols-3 sm:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </ItemGroup>
  );
}
