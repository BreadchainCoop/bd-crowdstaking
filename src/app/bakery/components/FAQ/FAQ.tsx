import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";

function AccordionHeader({ children }: { children: ReactNode }) {
  return (
    <Accordion.Header className=" text-breadgray-ultra-white text-xl font-semibold">
      {children}
    </Accordion.Header>
  );
}
function AccordionTrigger({ children }: { children: ReactNode }) {
  return (
    <Accordion.Trigger className="w-full text-left flex justify-between AccordionTrigger">
      {children}
      <svg
        className="AccordionChevron"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 8H5V10H7V12H9V14H11V16H13V14H15V12H17V10H19V8H17V10H15V12H13V14H11V12H9V10H7V8Z"
          fill="#F8F8F8"
        />
      </svg>
    </Accordion.Trigger>
  );
}

function AccordionContent({ children }: { children: ReactNode }) {
  return (
    <Accordion.Content>
      <div className="border-t-[1px] border-breadviolet-shaded py-6">
        {children}
      </div>
    </Accordion.Content>
  );
}

export default function FAQ() {
  return (
    <section className="pt-32 px-4 max-w-xl m-auto">
      <Accordion.Root type="single" className="flex flex-col gap-4" collapsible>
        <Accordion.Item
          value="first"
          className="flex flex-col gap-4 bg-breadgray-charcoal p-4 px-6 rounded"
        >
          <AccordionHeader>
            <AccordionTrigger>
              <div>
                What is <span className="font-bold">$BREAD</span>?
              </div>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Chase ball of string eat plants, meow, and throw up because I ate
            plants going to catch the red dot today going to catch the red dot
            today. I could pee on this if I had the energy. Chew iPad power cord
            steal the warm chair right after you get up for purr for no reason
            leave hair everywhere, decide to want nothing to do with my owner
            today.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item
          value="second"
          className="flex flex-col gap-4 bg-breadgray-charcoal p-4 px-6 rounded"
        >
          <AccordionHeader>
            <AccordionTrigger>
              How does <span className="font-bold">$BREAD</span> maintain 1 USD?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Hate dogs. Stinky cat curl into a furry donut. Hunt anything ask to
            go outside and ask to come inside and ask to go outside and ask to
            come inside meowzer all of a sudden cat goes crazy, or jump on
            fridge meowing non stop for food. Hey! you there, with the hands
            purr like an angel or bite plants and damn that dog.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item
          value="third"
          className="flex flex-col gap-4 bg-breadgray-charcoal p-4 px-6 rounded"
        >
          <AccordionHeader>
            <AccordionTrigger>
              What can I do with <span className="font-bold">$BREAD</span>?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Chase dog then run away i shall purr myself to sleep or spread kitty
            litter all over house, pose purrfectly to show my beauty for if
            human is on laptop sit on the keyboard or hiiiiiiiiii feed me now
            cattt catt cattty cat being a cat. Nya nya nyan nap all day stares
            at human while pushing stuff off a table or eat plants.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item
          value="fourth"
          className="flex flex-col gap-4 bg-breadgray-charcoal p-4 px-6 rounded"
        >
          <AccordionHeader>
            <AccordionTrigger>How do I get my DAI back?</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Catto munch salmono meowing non stop for food so i could pee on this
            if i had the energy scream for no reason at 4 am a nice warm laptop
            for me to sit on litter kitter kitty litty little kitten big roar
            roar feed me love blinks and purr purr purr purr yawn.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item
          value="fifth"
          className="flex flex-col gap-4 bg-breadgray-charcoal p-4 px-6 rounded"
        >
          <AccordionHeader>
            <AccordionTrigger>
              How does <span className="font-bold">$BREAD</span> assist a
              post-capitalist future?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            Throwup on your pillow annoy owner until he gives you food say meow
            repeatedly until belly rubs, feels good, play time, for if it smells
            like fish eat as much as you wish asdflkjaertvlkjasntvkjn (sits on
            keyboard) but cough hairball on conveniently placed pants.
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}