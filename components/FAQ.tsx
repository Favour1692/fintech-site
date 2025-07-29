import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I open an account?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>Opening an account is easy and takes less than 5 minutes. Just download our app, provide your details, verify your identity and you're ready to start transacting.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is my money safe with you?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>Absolutely, your funds are secure. We use bank-level encryption, two-factor authentication, and are fully compliant with local financial regulations to keep your money and data protected.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What kind of services do you offer?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>We offer savings, payments, transfers and financial planning tools. From managing personal finances to large business transactions, we've got you covered.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Are there any fees?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>Most of our core services are free. We may charge small transaction or service fees in specific cases which are always clearly disclosed before you proceed.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
