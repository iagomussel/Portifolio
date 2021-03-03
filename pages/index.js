if (typeof window !== "undefined") {
    require("jquery");
    require("popper.js");
    require("bootstrap");
  }
import Perfil from '../components/perfil'


var IndexPage=(req,res)=>{
    return (
        <Perfil/>
    )
}
export default IndexPage;