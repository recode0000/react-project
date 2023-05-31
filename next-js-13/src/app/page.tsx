import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/about" className="underline">About</Link>
      <h1 className="text-2x1">Home</h1>
    </div>
  )
}


