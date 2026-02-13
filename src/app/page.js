"use client";

import dynamic from "next/dynamic";

const AtlasMap2D = dynamic(() => import("../components/atlas2d/AtlasMap2D"), {
  ssr: false,
  loading: () => (
    <main className="atlas-loading-screen">
      <h1 className="pirate">Unfurling the atlas...</h1>
    </main>
  ),
});

export default function Home() {
  return <AtlasMap2D />;
}
