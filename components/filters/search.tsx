"use client";
import { useState, useTransition } from "react";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

/**
 * Returns a Search form component.
 *
 */
export default function Search({ value }: { value?: string }) {
  const [query, setQuery] = useState(value ?? "");
  const [, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
      params.delete("page");
    } else {
      params.delete("search");
      params.delete("page");
    }

    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-64 flex gap-4">
      <label htmlFor="searchQuery" className="sr-only">
        Search Character
      </label>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      {query && (
        <Button
          onClick={() => {
            setQuery("");
            handleSearch("");
          }}
          variant={null}
          size="icon"
          className="-ml-14"
        >
          <X />
        </Button>
      )}
    </form>
  );
}
