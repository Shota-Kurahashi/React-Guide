import axios from "axios";
import Article from "../../components/article";

const ENDPOINT = "http://localhost:4030/articles";

export default function Detail({ article }) {
  return <Article data={article} />;
}

export async function getStaticPaths() {
  const res = await axios.get(ENDPOINT);
  const paths = res?.data?.map((item) => {
    return {
      params: {
        detail: `${item.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params: ", params);
  const res = await axios.get(`${ENDPOINT}/${params.detail}`);
  return {
    props: {
      article: res.data,
    },
  };
}
