import burger from './assets/burger.jpg'
import salad from './assets/OIP.jpg'
import vegetable from './assets/vegetables.jpg'
import './Main.css'

function Main(params) {
    return(
        <main>
            <h1>This Week Specials</h1>
            <button type="button">Online Menu</button>
            <div className="grid">
            <div className="card">
                <img src={burger} width={300} height={400} alt="" />
                <h4>Mediteranian Burger</h4>
                <p>This Mediterranean-inspired burger offers a delightful combination of savory and tangy flavors, with a touch of Mediterranean herbs and ingredients that make it stand out from traditional burgers.</p>
                <li><a href="http://">Order a delivery</a></li>
            </div>
            <div className="card">
                <img src={salad} width={300} height={400} alt="" />
                <h4>Special salad</h4>
                <p>Mediterranean salad is a versatile dish that can be served as a refreshing appetizer, a light lunch, or a side dish for grilled meats and seafood. It's not only delicious but also packed with nutrients,</p>
                <li><a href="http://">Order a delivery</a></li>
            </div>
            <div className="card">
                <img src={vegetable} width={300} height={400} alt="" />
                <h4>Crispy vegetables</h4>
                <p>Ratatouille is a delightful Mediterranean vegetable dish that celebrates the natural flavors of seasonal produce. It's a comforting and wholesome meal that will satisfy both vegetarians and non-vegetarians alike.</p>
                <li><a href="http://">Order a delivery</a></li>
            </div>
            </div>

        </main>

    )
}

export default Main;