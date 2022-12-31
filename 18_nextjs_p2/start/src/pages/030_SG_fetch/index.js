import axios from "axios";
import ArticleList from "../../components/articleList";

export default function Page({ articles }) {
  return (
    <div>
      <h3>記事一覧</h3>
      <ArticleList list={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const ENDPOINT = "http://localhost:4030/articles";

  const res = await axios.get(ENDPOINT);

  return {
    props: {
      articles: res.data,
    },
  };
}
