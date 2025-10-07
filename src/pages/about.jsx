import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from 'public/images/photos/portrait.JPG'

import { useEffect, useState } from 'react'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const greetings = [
      'Hi',
      'Hello',
      'Hey there',
      'Howdy',
      '안녕하세요',
      'Salutations',
      "What's up",
    ]

    const timeOfDay = new Date().getHours()
    console.log(timeOfDay)

    switch (timeOfDay) {
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        greetings.push('Good morning')
        break
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        greetings.push('Good afternoon')
        break
      default:
        greetings.push('Good evening')
    }

    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting)
  }, [])

  return (
    <>
      <Head>
        <title>About - Nuri Kim</title>
        <meta name="description" content="" />
      </Head>
      <script></script>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {/* <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={portraitImage.src}
                alt="Nuri looking over her laptop."
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div> */}
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {greeting}! It's Nuri, again.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                This time, get to know me personally! Here are some of my curent
                interests!
              </p>

              {/* <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                Current interests
              </h1> */}

              <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                (Digital) Minimalism
              </h2>
              <p>
                Whether donating or reselling unused clothing and wearing
                second-hand clothing, minimalism has been a long-standing
                interest of mine. In practicing digital minimalism in my life,
                I've deactivated my social media accounts and removed YouTube
                recommendations. I've felt a greater peace of mind and better
                focus.
              </p>
              <p>
                I have experienced FOMO of TikTok brainrot/references at the
                outset, but you will connect with the people you relate to (+
                you will start saying the same references around two weeks later
                if you happen to be friends with a brainrotted person).
              </p>
              <p>
                Getting a{' '}
                <u>
                  <a href="https://www.thelightphone.com/lightiii">
                    Light Phone
                  </a>
                </u>{' '}
                was/is also a genuine source of contemplation. I may have
                watched more promotional videos, and surfed through more Reddit
                posts than I'd like to admit...
              </p>

              <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                Any and all recreation sports
              </h2>
              <p>
                I am down to play any rec sport. <strong>Basketball</strong>,
                rock climbing, fishing (tried once; would love to try again!),
                badminton, table tennis, volleyball are some of my favorites.
              </p>
              <p>
                I used to play competitive golf in high school, but now play for fun. <u><a href="/golf">Here</a></u> are my golf scores from then.
              </p>

              <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                Reading
              </h1>
              <p>
                I mostly read classic or non-fiction books--with some
                exceptions.
              </p>
              <ul className="list-disc pl-7">
                <li>
                  <u>Pachinko</u> by Min Jin Lee
                  <ul className="list-disc pl-6">
                    <li>
                      One of my favorite books I've recently read because it
                      gave me a better insight on my Korean heritage
                      and history.
                    </li>
                  </ul>
                </li>
                <li>
                  <u>Sapiens</u> by Noah Yuval Harari
                  <ul className="list-disc pl-6">
                    <li>
                      As a Christian, reading his work challenged my worldview
                      and offered viewpoints I never would have otherwise
                      considered.
                    </li>
                    <li>
                      I had a summer-long phase where I wanted to be a hunter-gatherer.
                    </li>
                  </ul>
                </li>
                <li>
                  <u>Deep Work</u> by Cal Newport
                  <ul className="list-disc pl-6">
                    <li>
                      One of the few catalysts behind deactivating my Instagram
                      account.
                    </li>
                    <li>Favorite "self-help"/productivity author.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="github.com/nurikimchi"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="linkedin.com/in/nurikimchi"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:main@nurikimchi.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                main@nurikimchi.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
