import Image from "next/image";

// secondary image container in the left column
export function SecondaryImagePanel() {
  return (
    <section className="panel secondaryimage-panel">
      <h2 className="panel-title">{"> I haven't lost anything yet."}</h2>
      <div className="secondaryimage-container">
        <Image
          src="/baku/baku3.jpg"
          alt="secondary image"
          width={1383}
          height={224}
          className="secondaryimage-img"
        />
      </div>
    </section>
  );
}
