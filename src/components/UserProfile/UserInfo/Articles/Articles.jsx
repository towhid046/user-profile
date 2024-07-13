import { useEffect } from "react";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("articles.json");
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);


  if(loading){
    return <h1 className="text-center py-12 text-xl font-normal text-gray-500">Loading...</h1>
  }

  return (
    <div>
      {articles?.map((article) => (
        <article
          key={article.id}
          className="bg-[#f1f1f1] p-4 rounded-[10px] mb-4"
        >
          <h2 className="text-[26px] font-semibold text-[#2B2B2B] mb-3">
            {article.title}
          </h2>
          <p className="font-[300] text-[#5F5F5F] mb-4">
            {article.description.split(" ").slice(0, 90).join(" ")}...
          </p>
          <hr />
          <div className="flex justify-between mt-4 items-center">
            <ul className="flex flex-wrap items-center gap-2">
              {article?.tags?.map((tag) => (
                <li
                  key={tag}
                  className="text-[#76A4CE] bg-white rounded-full px-3 py-1"
                >
                  #{tag}
                </li>
              ))}
              <li className="text-[#76A4CE] cursor-pointer bg-white rounded-full px-3 py-1">
                +
              </li>
            </ul>
            <button className="text-[#196AA0] md:w-max w-[180px]">
              Read More
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Articles;
