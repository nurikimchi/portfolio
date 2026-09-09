import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllBlogPosts } from '@/lib/getAllBlogPosts'

function Blog({ blog }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${blog.slug}`} className="text-3xl">
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        {/* <Card.Cta>Read blog</Card.Cta> */}
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function BlogsIndex({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog - Nuri Kim</title>
        <meta
          name="description"
          content="Non-technical writing about the tech space."
        />
      </Head>
      <SimpleLayout
        title="Blogs and personal thoughts."
        intro="Non-technical writing about the tech space."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogs: (await getAllBlogPosts()).map(({ component, ...meta }) => meta),
    },
  }
}
