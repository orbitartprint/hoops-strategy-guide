
import PrincipleAccordion from "@/components/PrincipleAccordion";
import Navigation from "@/components/Navigation";

const offensePrinciples = [
  {
    id: "transition",
    title: "1. Transition",
    content: [
      {
        title: "Wir pushen den Ball",
        items: [
          "Wer immer den Ball in der Defense gewinnt (auch aus dem Einwurf), pusht den Ball sofort nach vorne mit 2–3 harten Dribblings"
          
        ]
      },
      {
        title: "Umschalten ohne Verzögerung",
        items: [
          "Alle Spielerinnen orientieren sich sofort in die Offense und sprinten explosiv ins Vorfeld",
        ]
      },
      {
        title: "Sprint entlang der Seitenlinie",
        items: [
          "Die Flügelspielerinnen laufen nahe der Seitenlinie und sind ab der Mittellinie anspielbar",
        ]
      },
      {
        title: "Ball ist schneller als Beine",
        items: [
          "Wir bevorzugen einen Pass auf den Flügel, um schneller hinter die Defense zu kommen",
        ]
      },
      {
        title: "Positionen halten",
        items: [
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
