import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Publicity - Nuri Kim</title>
        <meta
          name="description"
          content="Moments when others took notice."
        />
      </Head>
      <SimpleLayout
        title="Moments when others took notice."
        intro="I’ve been fortunate to have my work noticed and featured by local press."
      >
        <div className="space-y-20">
          <SpeakingSection title="Interviews">
            <Appearance
              href="https://fox40.com/video/franklin-high-school-students-bring-renderings-of-future-sacramento-zoo-to-life/9668731/"
              title="Franklin High School Students Bring Renderings of Future Sacramento Zoo to Life"
              description="I was interviewed in a morning segment on Fox 40 News. We discussed the project, including its development process and impact. "
              event="Fox News 40"
              cta="Watch video"
            />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yltolP_WPS8?si=88XToMYbdJhAnU9V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SpeakingSection>
          <SpeakingSection title="Presentations">
            <Appearance
              href=""
              title="City of Elk Grove - Regular Council Meeting (5/08/24)"
              description="I presented our work to city councilmembers, detailing the start of the development process, challenges we faced, and sharing my experience as project lead. Here is that presentation and their comments."
              event="Council Meeting"
              cta="Watch the video below"
            />
            <embed width="560" height="315" frameborder="0" allowfullscreen="true" src="//elkgrove.granicus.com/player/clip/2519?view_id=21&redirect=true&entrytime=4530&stoptime=5025&autostart=0&embed=1"></embed>
          </SpeakingSection>

          <SpeakingSection title="Other Press">
            <Appearance
              href="https://www.abc10.com/video/news/local/elk-grove/community-brings-input-on-design-for-new-sacramento-zoo-at-open-house-event/103-cd47249e-a093-41ba-9c55-7b3bce1072cb"
              title="Community brings input on design for new Sacramento zoo at open house event"
              description="During our development process, we participated in an open house event for the City of Elk Grove. We deployed a prototype version of our work and put them on iPads. Residents interacted with the simulation and provided us feedback."
              event="ABC 10"
              cta="Watch video"
            />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rADCBxzYiEg?si=U4YpBZL0Uk-B1TdH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Appearance
              href="https://www.sacbee.com/news/local/education/article288388465.html"
              title="What the Sacramento Zoo move to Elk Grove means for its educational programming"
              description="An instance of our work being mentioned on a separate article discussing the overall zoo."
              event="ABC 10"
              cta="Read article"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=Y6eeZ1jI8Bo"
              title="Recommended new name of proposed Elk Grove zoo is revealed"
              description="This represents an instance of local news coverage using footage when discussing the zoo in general."
              event="KCRA 3"
              cta="Watch video"
            />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y6eeZ1jI8Bo?si=xsvagroVzPY_xBwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
