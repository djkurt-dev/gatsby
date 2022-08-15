import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/blog.css"

const Blog = () => {
  return (
    <Layout>
      <div className="blog">
        <h2 className="font-semibold">Blog</h2>
        <h3>Articles I have written</h3>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center px-8 py-8">
        <Link to="/blog/1" className="blog-container">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-violet-100 dark:border-gray-700">
            <a href="/blog">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-violet-800 ">
                Noteworthy technology acquisitions 2021
              </h5>

              <p class="mb-3 font-normal text-slate-900 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="/blog/1"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-violet-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Blog
