import Boton from "@/components/boton";
import axios from "axios";

async function universidadesMexico(){
    const url="http://universities.hipolabs.com/search?country=Mexico";
    const universidades= await axios.get(url);
    return universidades.data;
}

export default async function Noticias(){
    var universidades=await universidadesMexico();
    return(
        <div>
            <h1>Noticias</h1>
            <p>Estas en noticias</p>
            <table className="table">
            <thead>
                <th>Id</th>
                <th>Universidades</th>
                <th>Sitio Web</th>
            </thead>
            <tbody>
                {
                    universidades.map((universidad,i)=>(
                        <tr key="{i}">
                        <td>{i+1}</td>
                        <td>{universidad.name}</td>
                        <td>{universidad.web_pages[0]}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            <Boton />
        </div>
    );
}