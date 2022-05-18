import Layout from "../components/Layout";
import styles from "../styles/blog.module.css";

function blog(props) {
    const {dataBlog} = props;
    return (
    <Layout pageTitle="Blog Page">
        {dataBlog.map(blog=>{
            return(
                <div key={blog.id} className={styles.card}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            )
        })}
    </Layout>
        );
}

export default blog;

export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    return{
        props:{
            dataBlog,
        }
    }
}