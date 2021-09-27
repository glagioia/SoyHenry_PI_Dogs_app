
import { Link } from 'react-router-dom';
import '../Css/PrincipalPage.css';

function PrincipalPage(){
    return (
        <div className="principal">
            <div>
                <h1 className="h1">Henry Dogs</h1>
            </div>
            <div>
                <Link to="/principal">
                    <button className="but">Entrar</button>
                </Link>
            </div>            
        </div>
    )
}

export default PrincipalPage;