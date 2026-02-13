import Image from "next/image";
import { ABOUT } from "../content";

export default function AboutRegion() {
  return (
    <section className="region-scroll">
      <p className="region-kicker">Captain&apos;s Journal</p>
      <h2>About Me</h2>
      <div className="about-layout">
        <div>
          <p>{ABOUT.intro}</p>
          <p>{ABOUT.outro}</p>
        </div>
        <div className="about-image-wrap">
          <Image src="/profile.jpg" alt="Avaansh Nanda" width={280} height={360} className="about-image" />
        </div>
      </div>
    </section>
  );
}
