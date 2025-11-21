import Image from "next/image";

// helper to highlight specific words in orange
function highlightWords(text: string, wordsToHighlight: string[]) {
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let foundWord = null;
    let foundIndex = -1;

    // find the earliest highlighted word in the remaining text
    for (const word of wordsToHighlight) {
      const index = remaining.toUpperCase().indexOf(word.toUpperCase());
      if (index !== -1 && (foundIndex === -1 || index < foundIndex)) {
        foundIndex = index;
        foundWord = word;
      }
    }

    if (foundWord && foundIndex !== -1) {
      // add text before the highlighted word
      if (foundIndex > 0) {
        parts.push(
          <span key={key++}>{remaining.substring(0, foundIndex)}</span>
        );
      }

      // add the highlighted word
      const actualWord = remaining.substring(
        foundIndex,
        foundIndex + foundWord.length
      );
      parts.push(
        <span key={key++} className="log-highlight">
          {actualWord}
        </span>
      );

      // continue with the rest
      remaining = remaining.substring(foundIndex + foundWord.length);
    } else {
      // no more highlighted words, add the rest
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
  }

  return parts;
}

const logLines = [
  "> JUST AS NO ONE HAS EVER RIDDEN A RAINBOW.",
  "> NO ONE WILL EVER BE PERFECT EITHER...",
  "> EVERYONE TAKES THAT FACT AS GOSPEL.",
  "> THAT IS EXACTLY WHY HUMANS CAN NEVER ACHIEVE IT.",
];

const highlightedWords = ["rainbow", "perfect", "gospel", "humans"];

// text log and media panel wrapper
export function StatusLog() {
  return (
    <div className="log-wrapper">
      <section className="panel panel-secondary log-panel">
        <h2 className="panel-title">{"> SYSTEM LOG"}</h2>
        <ul className="log-list">
          {logLines.map((line) => (
            <li key={line} className="log-line">
              {highlightWords(line, highlightedWords)}
            </li>
          ))}
        </ul>
      </section>
      <section className="panel panel-secondary media-panel">
        <h2 className="panel-title">{"> media"}</h2>
        <div className="media-container">
          <Image
            src="/baku/kirumasouichi_orange.gif"
            alt="animated gif"
            width={100}
            height={100}
            unoptimized
            className="media-image"
          />
        </div>
      </section>
    </div>
  );
}
