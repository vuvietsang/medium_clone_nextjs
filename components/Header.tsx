import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between">
      <div className="flex items-center space-x-5">
        <Link href="/post">
          <img
            className="w-44 object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-500 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="py1 rounded-full border px-4">Get Started</h3>
      </div>
    </header>
  )
}

export default Header
