"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { ItemGroup } from "./ui/item";
import { CharacterTile } from "./character-tile";

/**
 * Lists characters from the Redux store.
 *
 */
export default function PeopleList() {
  const characters = useSelector((state: RootState) => state.characters.items);
  return (
    <ItemGroup className="gap-3 flex-wrap flex-row">
      {characters.map((character) => (
        <CharacterTile character={character} key={character.id} />
      ))}
    </ItemGroup>
  );
}
