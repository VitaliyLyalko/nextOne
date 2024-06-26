import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'lyalko' + keywords}/>
                <title>main page</title>
            </Head>
            <div className='navbar'>
                <A href={"/"} text='Main'/>
                <A href={"/users"} text='Users'/>
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;