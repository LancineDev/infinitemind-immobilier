import React, { FC } from "react";

const SectionClientSay: FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Ils nous font confiance</h2>
        <p className="mt-4 text-neutral-600">Quelques retours de nos clients satisfaits.</p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        <blockquote className="p-6 bg-white rounded-lg shadow-sm">
          <p className="text-sm">"Service rapide et professionnel — j'ai trouvé la maison parfaite."</p>
          <footer className="mt-3 text-xs text-neutral-500">— A. Kouame</footer>
        </blockquote>
        <blockquote className="p-6 bg-white rounded-lg shadow-sm">
          <p className="text-sm">"Très simple à utiliser, le propriétaire a répondu rapidement."</p>
          <footer className="mt-3 text-xs text-neutral-500">— M. Diarra</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default SectionClientSay;
