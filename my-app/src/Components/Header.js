
import C from './assets/C.jpg'
import './imp.css'

function Header() {
    return(
        <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <img src={C} width={400} alt="Mediteranian food"  />
            <h4>We are a family owned ,Mediteranian resturand based on traditional recipes served with a modern twist</h4>
            <button type="submit" >Reserve a table</button>
        </header>

    );
};
export default Header;