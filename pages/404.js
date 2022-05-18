import { useRouter } from "next/router";
import { useEffect } from "react";

function Custom404(props) {
const router = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            router.push('/');
        },2000);
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Opss.....!!</h1>
            <h1 className="title-not-found">Halaman Yang Anda Cari tidak ditemukan</h1>
        </div>
    );
}

export default Custom404;