import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import logoSTEAM from 'public/images/logos/steam-logo.svg'
import logoFSD from 'public/images/logos/fsd-logo.svg'
import logoCS4Girls from 'public/images/logos/cs4girls-logo.svg'
import logoAMC from 'public/images/logos/amc-logo.png'
import logoEG from 'public/images/logos/eg-logo.jpeg'
import logoYOC from 'public/images/logos/yoc-logo.jpeg'
import logoUCLA from 'public/images/logos/ucla-logo.svg'
import logoStackoverflow from 'public/images/logos/stackoverflow-logo.svg'

import image1 from 'public/images/photos/image-1.jpg'
import image2 from 'public/images/photos/image-2.jpg'
import image3 from 'public/images/photos/image-3.jpg'
import image4 from 'public/images/photos/image-4.jpg'
import image5 from 'public/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

const resumeLink =
  'https://docs.google.com/document/d/19VgdANW72FOnb3upxLRlQUjS_8tZdEfM/edit?usp=sharing&ouid=106445289170448264330&rtpof=true&sd=true'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}


function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume({ isWorkRelated }) {
  let resume = [
    {
      company: 'University of California, Los Angeles',
      title: 'Linguistics Research Assistant',
      logo: logoUCLA,
      start: 'Sep 2025',
      end: {
        label: 'Jun 2026',
        dateTime: new Date().getFullYear(),
      },
      type: 'work'
    },
    {
      company: 'Youth on Course',
      title: 'Junior Developer',
      logo: logoYOC,
      start: 'Oct 2023',
      end: {
        label: 'Mar 2025',
        dateTime: new Date().getFullYear(),
      },
      type: 'work',
    },
    {
      company: 'City of Elk Grove',
      title: 'Product Manager',
      logo: logoEG,
      start: 'Aug 2023',
      end: {
        label: 'May 2024',
        dateTime: new Date().getFullYear(),
      },
      type: 'work',
    },
    {
      company: 'Full-Stack Development',
      title: 'President',
      logo: logoFSD,
      start: 'Aug 2022',
      end: {
        label: 'May 2025',
        dateTime: new Date().getFullYear(),
      },
      type: 'community',
    },
    {
      company: 'CS4Girls',
      title: 'President (24-25)',
      logo: logoCS4Girls,
      start: 'Aug 2021',
      end: {
        label: 'May 2025',
        dateTime: new Date().getFullYear(),
      },
      type: 'community',
    },
    {
      company: 'StackOverflow',
      title: 'Forum Contributor',
      logo: logoStackoverflow,
      start: 'Nov 2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
      type: 'community'
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {isWorkRelated === true ? 
          (
            <>
              <BriefcaseIcon className="h-6 w-6 flex-none" /> 
              <span className="ml-3">Work Experience</span>
            </>
          ):
            <>
              <HeartIcon className="h-6 w-6 flex-none"/>
              <span className="ml-3">Community Experience</span>
            </>
          }
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          (role.type === 'work' && isWorkRelated || role.type === 'community' && !isWorkRelated)  ?
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.title}
              </dd>

              <dt className="sr-only">Company</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
          :
          <></>
        ))}
      </ol>
      {/* <Button
        href={resumeLink}
        variant="secondary"
        className="group mt-6 w-full"
      >
              See Resume */}
        {/* <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" /> */}
      {/* </Button> */}
      
    </div>
  )
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 flex-row space-evenly space-x-4">
        <div className={clsx(
          'rotate-2 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        )}>
          <img
            src={image2.src}
            alt="An open Bible."
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
       </div>
       <div className={clsx(
          '-rotate-2 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        )}>
          <img
            src={image1.src}
            alt="Golden Bridge in Sacramento, California."
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
        </div>
        <div className={clsx(
          'rotate-2 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        )}>
          <img
            src={image3.src}
            alt="Gamcheon Culture Village in Busan, South Korea."
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className={clsx(
          '-rotate-2 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        )}>
          <img
            src={image5.src}
            alt="A greenside bunker on a golf course."
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className={clsx(
          'rotate-2 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
        )}>
          <img
            src={image4.src}
            alt="A stack of paperback books."
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover -scale-x-100"
          />
        </div>
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Nuri Kim - Software developer, student, and leader</title>
        <meta
          name="description"
          content="Hi, I'm Nuri, a rising junior studying Computer Science at Franklin
            High School's STEM program in Elk Grove, California. I am the club president
            of Franklin's Fullstack Development Club. This year, we are working on an exclusive
            project offered by the City of Elk Grove to create a 3D visualization of the
            zoo's design models. As president I lead the project and members
            specialized in CAD and programming. We are set to deploy the spring of 2024.
            See our work at elkgrovezoo.franklinsoftwaredevelopers.com"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Nuri Kim
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a second-year student at UCLA studying Linguistics & Computer Science. My primary work involves full-stack web and mobile development using React/JavaScript. Other areas of my technical experience include VR, Python, and TailwindCSS.
            </p>
            <p>
              As a technical lead, I've delivered multiple published projects and led an initiative introducing Python programming, game and web development to female elementary students. A summary of my positions, involvement, and my articles are further down on this page. Meanwhile, my projects are located <u><a href="/projects">here</a></u>.
            </p>
            <p>
              I am actively seeking a Summer 2027 internship opportunity. I would love to join a collaborative, passionate team where I can contribute my technical and leadership expertise to hone results and create impact. 
            </p>
            <p>
              The rest of my website awaits!
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
            {/* <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="https://github.com/nurikimchi"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/nurikimchi/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16 lg:pr-14 xl: pr-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-8 xl:pl-10">
            {/* <Newsletter /> */}
            <Resume isWorkRelated={true}/>
            <Resume isWorkRelated={false}/>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
