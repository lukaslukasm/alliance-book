"use client";

import { setCharacters } from "@/lib/characters/charactersSlice";
import { RootState } from "@/lib/store";
import { Character } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";

export default function StoreInitializer({ data }: { data: Character[] }) {
  const dispatch = useDispatch();

  const hasItems = useSelector(
    (state: RootState) => state.characters.items.length > 0,
  );

  if (!hasItems) dispatch(setCharacters(data));

  return null;
}
