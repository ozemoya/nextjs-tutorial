import Link from 'next/link';

const HomePage= () => {
  console.log('home page');
  return (
    <div>
    <h1 className="text-5xl mb-8 font-bold"> Next.js Tutorial</h1>
    <Link href="/client" className = 'btn btn-primary'>
    Get Started
    </Link>
    </div>
  )
}

export default HomePage
