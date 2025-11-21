"use client";

import type { FormEvent } from "react";
import { useSearch } from "../hooks/useSearch";

// search bar that navigates to urls or searches google
export function SearchPanel() {
  const { query, setQuery, performSearch } = useSearch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performSearch();
  };

  return (
    <section className="panel panel-primary">
      <h1 className="panel-title">{"> NET SURF"}</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <span className="search-prompt">{">"}</span>
        <input
          autoFocus
          className="search-input"
          placeholder="type to search the net..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="search-button" type="submit">
          SEARCH
        </button>
      </form>
    </section>
  );
}
