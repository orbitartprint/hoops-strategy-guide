import PrincipleAccordion from "@/components/PrincipleAccordion";
import Navigation from "@/components/Navigation";

const mindsetPrinciples = [
  {
    id: "mind",
    title: "Mindset",
    content: [
      {
        title: "Fehler sind erlaubt",
        items: [
          "Wir dürfen Fehler machen und lernen daraus."
        ]
      },
      {
        title: "Voller Einsatz",
        items: [
          "Wir geben jedes Training, jedes Spiel unser Bestes.",
          "Wir pushen uns gegenseitig."
        ]
      },
      {
        title: "One Team One Family",
        items: [
          "Wir gehen wertschätzend und motivierend miteinander um und behandeln den Gegner mit Respekt."
        ]
      }
    ]
  },
  {
    id: "golden",
    title: "Goldene Regeln",
    content: [
      {
        title: "Ich dribble nur, um den Korb zu attackieren",
        items:[]
      },
      {
        title: "Meine Füße zeigen zum Korb",
        items:[]
      },
      {
        title: "Ich laufe immer zurück",
        items:[]
      },
      {
        title: "Ich spiele harte Pässe",
        items:[]
      },
      {
        title: "Ich laufe nach dem Pass",
        items:[]
      }
    ]
  }
];

const Mindset = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Navigation />
      <h1 className="text-4xl font-bold mb-8 text-center">Mindset</h1>
      <PrincipleAccordion principles={mindsetPrinciples} />
    </div>
  );
};

export default Mindset;
