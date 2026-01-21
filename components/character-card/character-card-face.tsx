import Image from "next/image";

import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Character } from "@/types/types";

export function CharacterCardFace({ character }: { character: Character }) {
  return (
    <Item
      key={character.name}
      variant="outline"
      className="max-w-44 items-start flex h-full"
    >
      <ItemHeader className="relative w-full aspect-5/7">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL ?? ""}${character.id}.jpg`}
          alt={character.name}
          placeholder="blur"
          blurDataURL="/assets/placeholder.webp"
          className=" w-full rounded-sm object-cover"
          fill
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{character.name}</ItemTitle>
      </ItemContent>
    </Item>
  );
}
