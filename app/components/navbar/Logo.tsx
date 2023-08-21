'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="hidden md:block cursor-pointer rounded-full"
      height={50}
      width={50}
      src="/images/logo.png"
    />
  );
};

export default Logo;
