import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} цитату</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} та поділись зі всім світом цитатою, яка тобі сподобалась і нехай
        це посприяє духовному розвитку кожного читача
      </p>

      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Цитата
          </span>
          <textarea
            value={post.quote}
            onChange={(e) => setPost({ ...post, quote: e.target.value })}
            placeholder="Напиши свою улюблену цитату тут"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Автор цитати
          </span>
          <input
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            placeholder="Хто це сказав?"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Книга
          </span>
          <input
            value={post.book}
            onChange={(e) => setPost({ ...post, book: e.target.value })}
            placeholder="З якої книги ця цитата?"
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags{" "}
            <span className="font-normal">
              {" "}
              (#віра, #церква, #молитва та ін.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="додай тег"
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
