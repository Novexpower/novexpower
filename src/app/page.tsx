import Container from "@/components/Container";
import Section from "@/components/Section";
import { Collaboration, Events, LineSep, Team, FAQ, Hero } from "@/components";
import { getSanityContent } from "@/sanity/content";



export default async function HomePage() {
  const content = await getSanityContent();

  return (
    <>
      <Section
        id="home"
        title=""
        description=""
      >
        <Hero hero={content.hero} />
        <LineSep />
      </Section>
      <Container>
        <Section
          id="collaborators"
          title="Collaborations"
          description="We are proud to collaborate with these amazing teams and organizations."
        >
          <Collaboration collaborators={content.collaborators} />
          <LineSep />
        </Section>
        <Section
          id="team"
          title="Our Team"
          description="A glimpse of our team roles and backgrounds."
        >
          <Team teamMembers={content.teamMembers} />
          <LineSep />
        </Section>
        <Section
          id="events"
          title="Updates"
          description="Our recent and upcoming events."
        >
          <Events events={content.events} />
          <LineSep />
        </Section>
        <FAQ faqs={content.faqs} />
      </Container>
    </>
  );
};
