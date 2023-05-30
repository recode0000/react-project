import Link from "next/link"

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="underline">Home</Link>
      <h1 className="text-2x1">About</h1>
    </div>
  )
}

export default Page