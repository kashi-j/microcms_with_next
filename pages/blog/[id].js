import client from "@/libs/client";
import styles from "../../styles/Home.module.scss"

const BlogId = ({ blog }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}`} } className={styles.post}></div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  // ↓なぜかオブジェクト配列だと失敗してしまう。
  // const paths = data.contents.map((content) => ({params: {id: `/blog/${content.id}`}}));
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
