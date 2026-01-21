import { Character, Planet } from "@/types/types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";

export default function CharacterCardExpanded({
  character,
  planets,
}: {
  character: Character;
  planets: Planet[];
}) {
  return (
    <DialogContent className="grid w-max sm:grid-cols-2 min-w-82">
      <DialogHeader className="sm:col-span-2">
        <DialogTitle>{character.name}</DialogTitle>
      </DialogHeader>
      <div className="relative sm:w-64 sm:h-92 h-56 mx-auto w-44">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL ?? ""}${character.id}.jpg`}
          alt={character.name}
          placeholder="blur"
          blurDataURL="/assets/placeholder.webp"
          className=" w-full rounded-sm object-cover"
          fill
        />
      </div>
      <DialogDescription className="flex flex-col text-base gap-2">
        <span>
          <b>Year born: </b>
          {character.birth_year}
        </span>
        <span>
          <b>Gender: </b>
          {character.gender}
        </span>
        <span>
          <b>Mass: </b>
          {character.mass}
        </span>
        <span>
          <b>Height: </b>
          {character.height}
        </span>
        <span>
          <b>Homeword: </b>
          {planets[character.homeworldId].name}
        </span>
        <span>
          <b>Eye color: </b>
          {character.eye_color}
        </span>
        <span>
          <b>Hair color: </b>
          {character.hair_color}
        </span>
        <span>
          <b>Skin color: </b>
          {character.skin_color}
        </span>
      </DialogDescription>
    </DialogContent>
  );
}
