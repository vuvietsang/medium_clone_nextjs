import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import { Post } from '../model'
import { sanityClient, urlFor } from '../sanity'
interface Props {
  posts: [Post]
}
const Home = ({ posts }: Props) => {
  return (
    <div>
      <Header />
      <div className="lg:py-0, flex items-center justify-between border-y border-black bg-yellow-400 py-10">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              {' '}
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <h2 className="">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        />
      </div>
      {/* Post */}
      <div className="md:gap6 grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:pt-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  src={urlFor(post.author.image).url()}
                  className="h-12 w-12 rounded-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    author->{
    name,
    image,
  },
    description,
  mainImage
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
