"use client";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useSelector } from "react-redux";

/**
 * Lists characters from the Redux store.
 *
 */
export default function PeopleList() {
  const characters = useSelector((state: RootState) => state.characters.items);
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} className="flex gap-4 m-10">
          <div className="w-20 relative overflow-hidden h-20">
            <Image
              priority={character.id <= 10}
              fill
              className="object-contain"
              src={`${process.env.NEXT_PUBLIC_IMG_URL}${character.id}.jpg`}
              alt={`A photo of ${character.name}`}
            />
          </div>
          <h1>{character.name}</h1>
        </div>
      ))}
    </div>
  );
}
