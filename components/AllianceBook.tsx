"use client";
import { store } from "@/lib/store";
import { Character } from "@/types/types";
import { Provider } from "react-redux";
import StoreInitializer from "./StoreInitializer";
import PeopleList from "./PeopleList";

function AllianceBook({ characters }: { characters: Character[] }) {
  return (
    <Provider store={store}>
      <StoreInitializer data={characters} />
      <PeopleList />
    </Provider>
  );
}
export default AllianceBook;
