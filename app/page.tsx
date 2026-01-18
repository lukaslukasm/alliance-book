import PeopleList from "@/components/PeopleList";
import { getPeople } from "@/lib/utils";
import { Character } from "@/types/types";

export default async function Home() {
  const peopleArr: Character[] = await getPeople(process.env.DATA_URL);

  return (
    <div className="">
      <PeopleList data={peopleArr} />
    </div>
  );
}
