
import PrincipleAccordion from "@/components/PrincipleAccordion";
import Navigation from "@/components/Navigation";

const offensePrinciples = [
  {
    id: "trap",
    title: "0. Trap Defense",
    content: [
      {
        title: "Kurzer Einwurf",
        items: [
          "Wir wollen einen kurzen Einwurf bis maximal zur Freiwurflinie erzwingen",
          "Wir entscheiden, ob wir die Matchups belassen oder switchen",
          "Verteidigung im Vorfeld ist hinter den Gegenspielerinnen, Verteidigung im Rückfeld ist seitlich (Deny) von den Gegenspielerinnen"
        ]
      },
      {
        title: "Einwurf zulassen",
        items: [
          "Wir vermeiden ein hartes Deny beim Einwurf, um einen Lobpass zu vermeiden und erhalten unsere defensive Struktur",
          "Wir switchen die Blöcke",
          "Wenn nötig, dirigieren wir den Ball zu schwächeren Ballhandlern"
        ]
      },
      {
        title: "Maximaler Druck am Ball",
        items: [
          "Wir üben sofort nach dem Einwurf maximalen und stetigen Druck am Ball aus und schränken die Passoptionen ein",
          "Wir halten den Ballhandler unter stetigem Stress, um Turnover zu erzwingen"
        ]
      },
      {
        title: "Mitte zu",
        items: [
          "Wir machen die Mitte zu und zwingen den Ballhandler zur Seitenlinie",
          "Wir lösen eine Trap für maximalen Druck aus, wenn ein unkontrolliertes Dribbling zur Seitenlinie erfolgt"
        ]
      },
      {
        title: "Keine Fouls",
        items: [
          "Wir vermeiden \"einfache\" Fouls, indem wir nicht reingreifen",
          "Wir erzwingen Notpässe aus der Drucksituation heraus, die die absinkende Verteidigung abfangen kann"
        ]
      },
      {
        title: "Rotation der übrigen Verteidiger",
        items: [
          "Während der Trapsituation deckt die absinkende Verteidigung mögliche Passwege ab",
          "Eine Verteidigung deckt die Seitenlinie ab, eine Verteidigung kontrolliert den 45°-Pass und eine Verteidigung schützt den Korb"
        ]
      }
    ],
    video: "fOjHM7kNyWI"
  },
  {
    id: "transition",
    title: "1. Transition",
    content: [
      {
        title: "Grundprinzipien",
        items: [
          "Wir pushen den Ball – Wer immer den Ball in der Defense gewinnt (auch aus dem Einwurf), pusht den Ball sofort nach vorne mit 2–3 harten Dribblings",
          "Umschalten ohne Verzögerung – Alle Spielerinnen orientieren sich sofort in die Offense und sprinten explosiv ins Vorfeld",
          "Transition entlang der Seitenlinie – Die Flügelspielerinnen laufen nahe der Seitenlinie und sind ab der Mittellinie anspielbar",
          "Ball ist schneller als Beine – Wir bevorzugen einen Pass auf den Flügel, um schneller hinter die Defense zu kommen",
          "Flügel halten ihre Positionen und besetzen am Ende des Sprints die Ecken für optimales Spacing"
        ]
      }
    ],
    video: "WIUktpk29iI"
  },
  {
    id: "trigger",
    title: "2. Trigger",
    content: [
      {
        title: "Prinzipien",
        items: [
          "Fließender Übergang in die Halfcourt-Offense",
          "Erkennen von Vorteil oder Neutralität",
          "Bei Neutralität lösen wir ein Hand-off oder Screen aus",
          "Kommunikation, welche Varianten gewählt werden, erfolgt innerhalb des Teams"
        ]
      }
    ]
  },
  {
    id: "domino",
    title: "3. Domino",
    content: [
      {
        title: "Grundprinzip",
        items: [
          "Sobald ein Vorteil entsteht, lassen wir die Defense wie Dominosteine kollabieren"
        ]
      },
      {
        title: "Wurfauswahl",
        items: [
          "Würfe in Korbnähe (Korbleger, Post-up, Floater, etc.)",
          "Freier Dreier",
          "Freier Wurf",
          "Kein schlechter Wurf gegen Verteidigung oder außerhalb des eigenen Repertoires"
        ]
      },
      {
        title: "Entscheidungen",
        items: [
          "Null-Sekunden Entscheidungen",
          "Zone schnell freimachen",
          "Gutes Spacing für Drive und Pass"
        ]
      },
      {
        title: "Entscheidungshierarchie",
        items: [
          "Gegenspielerin zu weit weg → Wurf",
          "Gegenspielerin kommt zu spät → Drive",
          "Hilfe kommt → Pass"
        ]
      }
    ]
  }
];

const Offense = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Navigation />
      <h1 className="text-4xl font-bold mb-8 text-center">Offense Prinzipien</h1>
      <PrincipleAccordion principles={offensePrinciples} />
    </div>
  );
};

export default Offense;
