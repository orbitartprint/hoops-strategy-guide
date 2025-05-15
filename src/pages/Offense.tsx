
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
          "Jede pusht den Ballexplosiv mit schnellen harten Dribblings nach vorne. Immer!",
        ]
      },
      {
        title: "Umschalten ohne Verzögerung",
        items: [
          "Wir sprinten OHNE Verzögerung in die Offense.",
        ]
      },
      {
        title: "Sprint entlang der Seitenlinie",
        items: [
          "Die Flügelspielerinnen laufen nahe der Seitenlinie und sind ab der Mittellinie anspielbar.",
        ]
      },
      {
        title: "Ball ist schneller als Beine",
        items: [
          "Wir bevorzugen einen Pass auf den Flügel, um schneller hinter die Defense zu kommen.",
        ]
      },
      {
        title: "Positionen halten",
        items: [
          "Die Flügel halten ihre Positionen und besetzen am Ende des Sprints die Ecken für optimales Spacing."
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
          "Fließender Übergang von Transition in die Halfcourt-Offense.",
          "Erkennen von Vorteil oder Neutralität.",
          "Neutral heißt, alle Spieler werden verteidigt und wir haben keinen Vorteil, weil ein Gegenspieler zu weit weg ist, zu langsam, zu klein oder wir eine Überzahl irgendwo auf dem Feld haben (1-0, 2-1, usw.).",
          "Bei Neutralität lösen wir einen Hand-off oder Screen aus.",
          "Welche Screen- oder Hand-off-Varianten wir wählen und wie wir diese auf dem Feld kommunizieren, ist in Klärung und werden wir im Team gemeinsam erarbeiten."
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
          "Sobald ein Vorteil (Gegenspielerin zu weit weg, Gegenspielerin nicht in Position, Überzahl, Mismatch, usw.) entsteht, lassen wir die Defense wie Dominosteine kollabieren."
        ]
      },
      {
        title: "Null-Sekunden Entscheidungen",
        items: [
          "Wir finden schnelle Entscheidungen, um der Defense keine Chance zu geben, sich wieder zu sortieren."
        ]
      },
      {
        title: "Zone schnell freimachen",
        items: [
          "Wir machen Platz für den nächsten Drive."
        ]
      },
      {
        title: "Spacing",
        items: [
          "Wir stehen so, dass eine Gegenspielerin nicht 2 verteidigen kann."
        ]
      },
      {
        title: "Entscheidungshierarchie",
        items: [
          "Gegenspielerin ist zu weit weg → Wurf",
          "Gegenspielerin kommt zu spät oder ist zu nah → Drive",
          "Hilfe kommt oder Verteidigung ist vor dem Ball → Pass"
        ]
      },
      {
        title: "Wurfauswahl",
        items: [
          "Gold: Würfe in Korbnähe (Korbleger, Post-up, Floater, etc.)",
          "Silber: Freier Dreier",
          "Bronze: Freier Wurf aus der Mitteldistanz",
          "Wurf gegen Verteidigung oder außerhalb des eigenen Repertoires"
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
