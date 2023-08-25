import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Відкривай і поширюй!
        <br />
        <span className="orange_gradient text-center">
          Глибокі християнські цитати
        </span>
      </h1>
      <p className="desc text-center">
        Книжник - це безкоштовний ресурс для публікації, читання та поширення
        цитат з християнських книг
      </p>

      <Feed />
    </section>
  );
};

export default Home;
