import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Character, Planet } from "@/types/types";
import { CharacterCardFace } from "./character-card-face";
import CharacterCardExpanded from "./character-card-expanded";

export function CharacterCard({
  character,
  planets,
}: {
  character: Character;
  planets: Planet[];
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <CharacterCardFace character={character} />
      </DialogTrigger>
      <CharacterCardExpanded character={character} planets={planets} />
    </Dialog>
  );
}
