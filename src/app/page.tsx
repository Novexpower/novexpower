import Container from "@/components/Container";
import Section from "@/components/Section";
import { Collaboration, Events, LineSep, Team, FAQ, Hero } from "@/components";



export default function HomePage() {
  return (
    <>
      <Section
        id="home"
        title=""
        description=""
      >
        <Hero />
        <LineSep />
      </Section>
      <Container>
        <Section
          id="collaborators"
          title="Collaborations"
          description="We are proud to collaborate with these amazing teams and organizations."
        >
          <Collaboration />
          <LineSep />
        </Section>
        <Section
          id="team"
          title="Our Team"
          description="A glimpse of our team roles and backgrounds."
        >
          <Team />
          <LineSep />
        </Section>
        <Section
          id="events"
          title="Updates"
          description="Our recent and upcoming events."
        >
          <Events />
          <LineSep />
        </Section>
        <FAQ />
      </Container>
    </>
  );
};
