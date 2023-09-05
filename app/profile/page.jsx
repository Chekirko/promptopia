"use client";

import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/quotes`, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      setQuotes(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <Profile
      name="Мій"
      desc="Моя персоналізована сторінка"
      data={quotes}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
