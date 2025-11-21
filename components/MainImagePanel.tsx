import Image from "next/image";

// main image container on the right side
export function MainImagePanel() {
  return (
    <section className="panel mainimage-panel">
      <h2 className="panel-title">{"> You are a big liar aren't you?"}</h2>
      <div className="mainimage-container">
        <Image
          src="/baku/baku1.png"
          alt="main image"
          width={736}
          height={1040}
          className="mainimage-img"
          priority
        />
      </div>
    </section>
  );
}
