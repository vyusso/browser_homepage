import Image from "next/image";

const logLines = [
  "> JUST AS NO ONE HAS EVER RIDDEN A RAINBOW.",
  "> NO ONE WILL EVER BE PERFECT EITHER...",
  "> EVERYONE TAKES THAT FACT AS GOSPEL.",
  "> THAT IS EXACTLY WHY HUMANS CAN NEVER ACHIEVE IT.",
];

// text log and media panel wrapper
export function StatusLog() {
  return (
    <div className="log-wrapper">
      <section className="panel panel-secondary log-panel">
        <h2 className="panel-title">{"> SYSTEM LOG"}</h2>
        <ul className="log-list">
          {logLines.map((line) => (
            <li key={line} className="log-line">
              {line}
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
