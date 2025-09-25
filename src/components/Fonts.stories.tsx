import React from "react";

export default {
  title: "Design System/Fonts",
};

const fonts = [
  {
    name: "Google Sans Code",
    style: { fontFamily: "Google Sans Code, monospace" },
  },
  {
    name: "Inter",
    style: { fontFamily: "Inter, sans-serif" },
  },
  {
    name: "Courier Prime",
    style: { fontFamily: "Courier Prime, monospace" },
  },
];

export const FontDemo = () => (
  <div style={{ padding: 24 }}>
    {fonts.map((font) => (
      <div key={font.name} style={{ marginBottom: 24 }}>
        <div style={{ ...font.style, fontSize: 32, fontWeight: 600 }}>
          {font.name} - The quick brown fox jumps over the lazy dog
        </div>
        <div style={{ ...font.style, fontSize: 18 }}>
          Sample text in {font.name}
        </div>
      </div>
    ))}
  </div>
);
