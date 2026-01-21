import { GENDERS } from "@/lib/constants";
import MultiSelectFilter from "./multi-select-filter";
import Search from "./search";
import { Planet, SearchParams } from "@/types/types";

type FilterBarParams = {
  searchParams: SearchParams;
  planets: Planet[];
};

/**
 * A composite UI component that manages the search input and categorical filters.
 *
 */
export default function FilterBar({ searchParams, planets }: FilterBarParams) {
  return (
    <div className="">
      <Search value={searchParams.search} />
      <div className="grid sm:grid-cols-2 sm:gap-3 gap-2">
        <MultiSelectFilter
          attribute="gender"
          searchable={false}
          defaultValue={
            searchParams.gender
              ? Array.isArray(searchParams.gender)
                ? searchParams.gender
                : [searchParams.gender]
              : undefined
          }
          placeholder="Filter Genders"
          options={GENDERS.map((gender) => ({
            value: gender,
            label: gender,
          }))}
        />
        <MultiSelectFilter
          attribute="homeworldId"
          defaultValue={
            searchParams.homeworldId
              ? Array.isArray(searchParams.homeworldId)
                ? searchParams.homeworldId
                : [searchParams.homeworldId]
              : undefined
          }
          placeholder="Filter Homeworlds"
          options={planets.map((planet) => ({
            value: String(planet.id),
            label: planet.name,
          }))}
        />
      </div>
    </div>
  );
}
