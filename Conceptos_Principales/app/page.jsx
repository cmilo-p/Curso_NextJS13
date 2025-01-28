"use client";

export default function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <button
        onClick={() => {
          alert("alerta");
        }}
      >
        Click
      </button>
    </section>
  );
}
