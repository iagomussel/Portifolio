if (typeof window !== "undefined") {
    require("jquery");
    require("bootstrap");
  }
import Perfil from '../components/perfil'


export default (req,res)=>{
    return (
        <Perfil/>
    )
};