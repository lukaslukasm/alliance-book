"use client";
import { MultiSelect, MultiSelectOption } from "../ui/multi-select";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Character } from "@/types/types";

type MultiSelectFilterProps = {
  attribute: keyof Character;
  options: MultiSelectOption[];
  placeholder: string;
};

/**
 * Renders a multi-select for a given attribute with given options and writes the selection to the URL.
 *
 */
export default function MultiSelectFilter({
  attribute,
  options,
  placeholder,
}: MultiSelectFilterProps) {
  const [, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChange(value: string[]) {
    const params = new URLSearchParams(searchParams);
    params.delete(attribute);
    value.forEach((val) => params.append(attribute, val));

    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <MultiSelect
      options={options}
      placeholder={placeholder}
      aria-label="gender filter"
      onValueChange={(value) => handleChange(value)}
    />
  );
}
