import { useState } from "react";

// handles search queries and direct url navigation
export function useSearch(
  defaultEngine: string = "https://google.com/search?q="
) {
  const [query, setQuery] = useState("");

  const performSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    // check if it looks like a url
    const isUrl = 
      trimmed.includes(".") && 
      !trimmed.includes(" ") &&
      (trimmed.match(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/) || // domain.tld
       trimmed.startsWith("http://") || 
       trimmed.startsWith("https://"));

    let url;
    if (isUrl) {
      // go directly to the url, add https:// if missing
      url = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
    } else {
      // search it on google
      url = `${defaultEngine}${encodeURIComponent(trimmed)}`;
    }
    
    window.open(url, "_self");
  };

  return {
    query,
    setQuery,
    performSearch,
  };
}
