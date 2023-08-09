'use client'

import { useEffect, useState } from 'react';
import Navbar from './navbar';
import { getServerSession } from 'next-auth/next';

interface UserData {
  name: string;
  id: number;
  avatar: {
    large: string;
    medium: string;
  };
  siteUrl: string;
  updatedAt: number;
}


export default  function Nav() {
  const [user, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedUserDataString = localStorage.getItem('user');
    if (savedUserDataString) {
      setUserData(JSON.parse(savedUserDataString));
    }
  }, []);
  return <Navbar user={user} />;
}
