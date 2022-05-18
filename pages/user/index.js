import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/user.module.css";

export default function user({dataUsers}) {
    console.log(dataUsers);
    const router = useRouter();
    return (
    <Layout pageTitle="User Page">
        {dataUsers.map(user=>{
            return(
                <div key={user.id} onClick={()=> router.push(`/user/${user.id}`)} className={styles.card}>
               <p>{user.name}</p>
               <p>{user.email}</p>
                </div>
            )
        })}
    </Layout>
    );
}


export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}