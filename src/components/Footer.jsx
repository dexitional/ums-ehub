import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t md:border-t-0 bg-zinc-200/50 bg-opacity-50">
        <div className="py-3 md:py-0 md:mx-auto w-full md:h-14 md:max-w-7xl flex flex-col md:flex-row items-center md:justify-between space-y-2">
        <span className="py-0.5 px-2 rounded-md md:rounded-lg bg-zinc-400 text-white text-base md:text-xl font-bold tracking-wider">ehub</span>
        <div className="md:w-2/5 text-xs md:text-sm flex space-x-3 items-center justify-evenly text-zinc-600 font-medium">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Security</div>
            <div>&copy;2023 UCC</div>
        </div>
        </div>
    </footer>
  )
}

export default Footer