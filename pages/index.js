import Head from 'next/head'
import Base from '../layouts/base';

export default class extends React.Component{
    render(){
        return(
           
           <Base> 
            <Head>
                <title>AppdelanteMovies</title>
            </Head>
           
           <h1> hola mundo</h1></Base>
        )
    }
}