import { Character } from "@/types/types";
import Image from "next/image";

export default async function PeopleList({ data }: { data: Character[] }) {
  return (
    <div>
      {data.map((character) => (
        <div key={character.id} className="flex gap-4 m-10">
          <div className="w-20 relative overflow-hidden h-20">
            <Image
              priority={character.id <= 10}
              fill
              className="object-contain"
              src={`${process.env.IMG_URL}${character.id}.jpg`}
              alt={`A photo of ${character.name}`}
            />
          </div>
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
}
