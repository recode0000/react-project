import { client } from "../libs/client.js"
import styles from '@/styles/Home.module.css'

//SSGでビルドしたときにサーバー側でHTMLを生成する
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    }
  }
}

export default function Home({blog}) {
  return (
    <>
      {blog.map((blog) => (
        <li key={blog.id}>
          <a href="/">{blog.title}</a>
        </li>
      ))}
    </>
  )
}
