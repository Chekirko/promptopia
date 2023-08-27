"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CreateQuote = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quote: "",
    author: "",
    book: "",
    tag: "",
  });

  const createQuote = async (e) => {};
  return (
    <Form
      type="Додай"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createQuote}
    />
  );
};

export default CreateQuote;
