// import styles from "../styles/Home.module.css";
import client from "@/libs/client";
import Link from "next/link";

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{ blog.title }</Link>
        </li>
      ))}
    </div>
  );
}

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents
    }
  }
};
