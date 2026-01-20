"use client";
import { MultiSelect, MultiSelectProps } from "../ui/multi-select";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Character } from "@/types/types";

type MultiSelectFilterProps = Omit<MultiSelectProps, "onValueChange"> & {
  attribute: keyof Character;
};

/**
 * Renders a multi-select for a given attribute with given options and writes the selection to the URL.
 *
 */
export default function MultiSelectFilter(props: MultiSelectFilterProps) {
  const [, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChange(value: string[]) {
    const params = new URLSearchParams(searchParams);
    params.delete(props.attribute);
    value.forEach((val) => params.append(props.attribute, val));

    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <MultiSelect
      {...props}
      aria-label="gender filter"
      onValueChange={(value) => handleChange(value)}
    />
  );
}
