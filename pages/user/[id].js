import Layout from "../../components/Layout";
import styles from "../../styles/user.module.css";

function ditail(props) {
const {user} = props;
return (
        <Layout pageTitle="User Detail">
            <div className={styles.card}>
         <p>Nama : {user.name}</p>   
         <p>Email: {user.email}</p>   
         <p>Phone: {user.phone}</p>   
         <p>web  : {user.website}</p>   
            </div>
        </Layout>
    );
}

export default ditail;

export async function getStaticPaths(){

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await res.json();
    const paths = dataUsers.map((user)=>{
        return{
            params:{
                id: `${user.id}`,
            }
        }
    });
 return{
     paths,
     fallback: false,
 };   
}

export async function getStaticProps(context){
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return{
        props:{
            user,
        }
    }
}