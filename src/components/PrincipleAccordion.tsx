
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentItem {
  title: string;
  items: string[];
}

interface Principle {
  id: string;
  title: string;
  content: string[] | ContentItem[];
  video?: string;
}

interface PrincipleAccordionProps {
  principles: Principle[];
}

const PrincipleAccordion = ({ principles }: PrincipleAccordionProps) => {
  // Improved type guard function that first checks if content is an array
  // and then checks if the first item is an object with a 'title' property
  const isContentArray = (content: any[]): content is ContentItem[] => {
    return Array.isArray(content) && 
           content.length > 0 && 
           typeof content[0] === 'object' &&
           content[0] !== null &&
           'title' in content[0];
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {principles.map((principle) => (
        <AccordionItem key={principle.id} value={principle.id}>
          <AccordionTrigger className="accordion-header">
            {principle.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="principle-content">
              {isContentArray(principle.content) ? (
                <div className="space-y-6">
                  {(principle.content as ContentItem[]).map((section, idx) => (
                    <Card 
                      key={idx} 
                      className="bg-[#f57520]/10 border-[#f57520]/30 rounded-xl"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl text-[#f57520]">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-4 space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-white/80">{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <ul className="list-disc pl-4 space-y-2">
                  {principle.content.map((item, index) => (
                    <li key={index} className="text-white/80">{item}</li>
                  ))}
                </ul>
              )}
              {principle.video && (
                <div className="aspect-video mt-6 max-w-xl mx-auto">  {/* Reduced max-w from max-w-2xl to max-w-xl */}
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
