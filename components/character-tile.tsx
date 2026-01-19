import Image from "next/image";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { Character } from "@/types/types";
import { getIdFromUrl } from "@/lib/utils";

export function CharacterTile({ character }: { character: Character }) {
  return (
    <Item
      key={character.name}
      variant="outline"
      className="sm:w-44 items-start flex w-32"
    >
      <ItemHeader>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL ?? ""}${character.id}.jpg`}
          alt={character.name}
          width={128}
          height={128}
          className=" w-full rounded-sm object-cover"
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{character.name}</ItemTitle>
        <ItemDescription>
          {character.species[0] && getIdFromUrl(character.species[0]) === 2
            ? "Created"
            : "Born"}
          : {character.birth_year}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
