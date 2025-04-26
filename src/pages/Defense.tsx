import PrincipleAccordion from "@/components/PrincipleAccordion";
import Navigation from "@/components/Navigation";

const defensePrinciples = [
  {
    id: "mitte-zu",
    title: "1. Mitte zu",
    content: [
      "Wir verhindern Drives durch die Mitte und lenken den Ball zur Seitenlinie"
    ]
  },
  {
    id: "druck-am-ball",
    title: "2. Maximaler Druck am Ball",
    content: [
      "- Sofortiger, permanenter Druck auf die Ballführerin"
    ]
  },
  {
    id: "closeout",
    title: "3. Harter Closeout",
    content: [
      "- Beim Closeout wird der Wurf geschlossen und das Ziehen provoziert"
    ]
  },
  {
    id: "hilfe",
    title: "4. Frühe Hilfe",
    content: [
      "- Frühzeitige Hilfe verhindern Drives, machen Drives zu Pässen"
    ]
  },
  {
    id: "help-side",
    title: "5. Help Side",
    content: [
      "- Die Weakside hilft früh und aggressiv unter Einbeziehung der Baseline"
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
