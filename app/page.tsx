import PeopleList from "@/components/PeopleList";
import { getCharacters } from "@/services/characters.service";
import { Character } from "@/types/types";

export default async function Home() {
  const peopleArr: Character[] = await getCharacters(process.env.DATA_URL);

  return (
    <div className="">
      <PeopleList data={peopleArr} />
    </div>
  );
}
