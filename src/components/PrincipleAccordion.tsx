
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Principle {
  id: string;
  title: string;
  content: string[];
  video?: string;
}

interface PrincipleAccordionProps {
  principles: Principle[];
}

const PrincipleAccordion = ({ principles }: PrincipleAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {principles.map((principle) => (
        <AccordionItem key={principle.id} value={principle.id}>
          <AccordionTrigger className="accordion-header">
            {principle.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="principle-content">
              {principle.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              {principle.video && (
                <div className="aspect-video mt-6">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${principle.video}`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PrincipleAccordion;
