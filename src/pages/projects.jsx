import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoCsfhs from 'public/images/logos/csfhs.jpg'
import logoEG from 'public/images/logos/eg-logo.jpeg'
import logoGurmukhiTutor from 'public/images/logos/gurmukhi-logo.png'
import logoYOC from 'public/images/logos/yoc-logo.jpeg'

const projects = [
  {
    name: 'csfhs.net',
    description:
      'Official website for the Computer Science Pathway at Franklin High School. Implemented a complete website redesign using TailwindCSS and Svelte. Added over ten subpages under three new categories including alumni institutions, student testimonials, and photos.',
    link: {
      href: 'https://csfhs.net',
      label: 'csfhs.net',
    },
    logo: logoCsfhs
  },
  {
    name: 'New Zoo 3D Simulation',
    description:
      'A city-commissioned 3D simulation of the City of Elk Grove\'s planned zoo. Helped result in 100% council approval for zoo construction. Footage and screenshots featured by several local news stations.',
    link: {
      href: 'https://elkgrove.gov/capital-improvements/elk-grove-sacramento-zoo',
      label: 'elkgrove.gov',
    },
    logo: logoEG
  },
  {
    name: 'GurmukhiTutor',
    description:
      'A React Native app teaching Punjabi script, Gurmukhi, using trace-tracking and gamification features. Received $110 Apple Developer grant from HackClub via the Cider program.',
    link: {
      href: 'https://www.youtube.com/watch?v=r2Qa-Un_pFI',
      label: 'youtube.com',
    },
    logo: logoGurmukhiTutor
  },
  {
    name: 'Youth on Course',
    description:
      'Developed a released feature on the non-profit organization\'s mobile app allowing users to post their golf scores and upload them to a global database (GHIN) and receive a calculated handicap.',
    link: {
      href: 'https://apps.apple.com/us/app/youth-on-course/id1475287768',
      label: 'App Store',
    },
    logo: logoYOC
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nuri Kim</title>
        <meta
          name="description"
          content="I worked on almost all of these projects as a lead of a team of developers--exception of Youth on Course where I was a junior developer working remotely."
        />
      </Head>
      <Image
        src="/public/images/logos/csfhs.jpg"
        width="8"
        height="8"
      />
      <SimpleLayout
        title="Apps I've built and released"
        intro="I worked on almost all of these projects as a lead of a team of developers--exception of Youth on Course where I was a junior developer working remotely."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  width="8"
                  height="8"
                  className="h-8 w-8"
                  unoptimized
                  style={{borderRadius: '50%'}}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
