import Link from 'next/link';
import Image from 'next/image';

import defaultUserImage from '@/public/default-user.jpg';

import { auth } from '@/app/_lib/auth';

export default async function Navigation() {
  // auth make the entire route dynamic/entire website is dynamic right now
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center"
          >
            {session?.user ? (
              <>
                <Image
                  src={session.user.image || defaultUserImage}
                  alt={session.user.name || 'User avatar'}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full mr-4 object-cover"
                />
                <span>Guest area</span>
              </>
            ) : (
              'Guest area'
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
