import PrincipleAccordion from "@/components/PrincipleAccordion";
import Navigation from "@/components/Navigation";

const defensePrinciples = [
  {
    id: "trap",
    title: "1. Trap Defense",
    content: [
      {
        title: "Kurzer Einwurf",
        items: [
          "Wir wollen einen kurzen Einwurf bis maximal zur Freiwurflinie erzwingen.",
          "Wir entscheiden, ob wir die Matchups belassen oder switchen.",
          "Verteidigung im Vorfeld ist hinter den Gegenspielerinnen, Verteidigung im Rückfeld ist seitlich (Deny) von den Gegenspielerinnen."
        ]
      },
      {
        title: "Einwurf zulassen",
        items: [
          "Wir vermeiden ein hartes Deny beim Einwurf, um einen Lobpass zu vermeiden und erhalten unsere defensive Struktur.",
          "Wir switchen die Blöcke.",
          "Wenn nötig, dirigieren wir den Ball zu schwächeren Ballhandlern."
        ]
      },
      {
        title: "Maximaler Druck am Ball",
        items: [
          "Wir üben sofort nach dem Einwurf maximalen und stetigen Druck am Ball aus und schränken die Passoptionen ein.",
          "Wir halten den Ballhandler unter stetigem Stress, um Turnover zu erzwingen."
        ]
      },
      {
        title: "Mitte zu",
        items: [
          "Wir machen die Mitte zu und zwingen den Ballhandler zur Seitenlinie.",
          "Wir lösen eine Trap für maximalen Druck aus, wenn ein unkontrolliertes Dribbling zur Seitenlinie erfolgt."
        ]
      },
      {
        title: "Keine Fouls",
        items: [
          "Wir vermeiden \"einfache\" Fouls, indem wir nicht reingreifen.",
          "Wir erzwingen Notpässe aus der Drucksituation heraus, die die absinkende Verteidigung abfangen kann."
        ]
      },
      {
        title: "Rotation der übrigen Verteidiger",
        items: [
          "Während der Trapsituation deckt die absinkende Verteidigung mögliche Passwege ab.",
          "Eine Verteidigung deckt die Seitenlinie ab, eine Verteidigung kontrolliert den 45°-Pass und eine Verteidigung schützt den Korb."
        ]
      }
    ],
    video: "fOjHM7kNyWI"
  },
  {
    id: "set-defense",
    title: "2. Set Defense",
    content: [
      {
        title: "Mitte zu",
        items: [
          "Wir verhindern Drives durch die Mitte und lenken den Ball zur Seitenlinie."
        ]
      },
      {
        title: "Maximaler Druck am Ball",
        items: [
          "Wir üben permanenten Druck auf die Ballführerin und erhöhen den Stress am Ball, um Set Plays zu stören, Pässe zu erzwingen und Turnover zu forcieren."
        ]
      },
      {
        title: "Harter Closeout",
        items: [
          "Jeder Wurfversuch des Gegners wird zu einem Drive."
        ]
      },
      {
        title: "Frühe Hilfe der Help Side",
        items: [
          "Wir helfen frühzeitig bei Drives über die Baseline von der Gegenseite, verhindern einfache Punkte und doppeln am Ball.",
        ]
      },
      {
        title: "Wir verteidigen vor dem Ball",
        items: [
          "Wir verteidigen vor dem Ball, um den direkten Weg zum Korb zu verhindern.",
          "Jeder Drive des Gegners wird zu einem Pass."
        ]
      }
    ]
  }
];

const Defense = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Navigation />
      <h1 className="text-4xl font-bold mb-8 text-center">Defense Prinzipien</h1>
      <PrincipleAccordion principles={defensePrinciples} />
    </div>
  );
};

export default Defense;
