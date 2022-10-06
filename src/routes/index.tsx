import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const day = new Date().getDay();
  const dieta = [
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍒"],
      spuntino: [],
      pranzo: ["pasta 80 gr", "formaggio fresco 100 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: [],
      cena: ["carne rossa 200 gr", "pane integrale 60 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🥝"],
      spuntino: ["yogurt magro bianco", "frutta fresca 150 gr"],
      pranzo: ["pane integrale 30 gr", "legumi secchi 80 gr o freschi 240 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: ["frutta secca 🥜 10 gr"],
      cena: ["carne bianca 🍗 200 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍌"],
      spuntino: ["yogurt magro bianco", "frutta fresca 150 gr"],
      pranzo: ["riso 80 gr", "carne bianca 🍗 100 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: ["frutta secca 🥜 10 gr"],
      cena: ["pesce 200 gr", "pane intetrale 60 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍉"],
      spuntino: ["yogurt magro bianco", "frutta fresca 150 gr"],
      pranzo: ["pane integrale 30 gr", "uova 1 intero + albumi 🍳 200 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: ["frutta secca 🥜 10 gr"],
      cena: ["legumi secchi 80 gr o freschi 240 gr", "carne bianca 100 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍏"],
      spuntino: ["yogurt magro bianco", "frutta fresca 150 gr"],
      pranzo: ["pane integrale 30 gr", "legami secchi 80 gr o freschi 240 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: ["frutta secca 🥜 10 gr"],
      cena: ["pesce 200 gr", "pane integrale 60 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍎"],
      spuntino: ["yogurt magro bianco", "frutta fresca 150 gr"],
      pranzo: ["pane integrale 30 gr", "legami secchi 80 gr o freschi 240 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: ["frutta secca 🥜 10 gr"],
      cena: ["uova 1 intero + albumi 🍳 200 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"]
    },
    {
      colazione: ["Fiocchi di avena 40 gr", "Bavanda vegetale 🥛 150 gr", "Frutta Fresca 🍊"],
      spuntino: [],
      pranzo: ["pesce 400 gr", "verdura cruda/cotta 100/200 gr", "olio evo 15 gr"],
      merenda: [],
      cena: ["pizza 🍕"]
    }
  ];
  return (
    <div>
      <h1>
        Oggi è {new Date().toLocaleDateString("it-IT", { weekday: 'long' })} che si mangia? 🤯
      </h1>
      <h2>Colazione</h2>
      <ul>
        {dieta.at(day)?.colazione.map((v, i) => (
          <li>
            <span>{v}</span>
          </li>
        ))}
      </ul>
      <h2>Spuntino</h2>
      <ul>
        {dieta.at(day)?.spuntino.map((v, i) => (
          <li>
            <span>{v}</span>
          </li>
        ))}
      </ul>
      <h2>Pranzo</h2>
      <ul>
        {dieta.at(day)?.pranzo.map((v, i) => (
          <li>
            <span>{v}</span>
          </li>
        ))}
      </ul>
      <h2>Merenda</h2>
      <ul>
        {dieta.at(day)?.merenda.map((v, i) => (
          <li>
            <span>{v}</span>
          </li>
        ))}
      </ul>
      <h2>Cena</h2>
      <ul>
        {dieta.at(day)?.cena.map((v, i) => (
          <li>
            <span>{v}</span>
          </li>
        ))}
      </ul>


  {/*     <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Che si mangia? 🤯',
};
