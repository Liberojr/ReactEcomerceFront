import './style.css';
import cart from "./assets/cart.png";
import smart from "./assets/smart-phone.png"
import store from "./assets/store.png"
function App() {
  return (
    <div className="App">
      <body>
      <header class='header'>
       <div class='h1'>
            <div class='no'>
            <img class='piccart' src={store} alt='cart'></img>
            </div>
            <div class='logo'>
            <div class='cartback'><button>&#9776;</button></div>
            </div>
            <div class='search'>
              <input type="text" class="search-bar" placeholder='Search'></input>
              <div class='cartback'><button>&#128269;</button><p>Search</p></div>
            </div>
            <div class='cart'>
              <div class='cartback'><button alt="Hot">&#128293;<p>Hot</p></button></div>
              <div class='cartback'><button alt='favorites'>&#128150;<p>Favorites</p></button></div>
              <div class='cartback'><button alt='cart'>&#128722;<p>Cart</p></button></div>
            </div>
            <div class='nav'>
              <ul>
              <li><a href='#'>Books</a></li>
              <li><a href='#'>Games</a></li>
              <li><a href='#'>Smart Phones</a></li>
              <li><a href='#'>PC Gamer</a></li>
              <li><a href='#'>Notebook</a></li>
              <li><a href='#'>SmartTVs</a></li>
              </ul>
            </div>
        </div>
        <div class='h2'>
        <h2>Categories</h2>
              <ul>
              <li><a href='#'>&#128218; Books</a></li>
              <li><a href='#'>&#127918; Games</a></li>
              <li><a href='#'>&#9917; Sport</a></li>
              <li><a href='#'>&#128715; Decoration</a></li>
              <li><a href='#'>&#9999; School</a></li>
              <li><a href='#'>&#127968; Smart House</a></li>
              </ul>
        </div>
        <div class='h3'>
        <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
          <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
          <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
          <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
          <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
          <div class='product'>
            <h3>Product</h3>
            <img class='smart' src={smart} alt='smart'></img>
            <p>Product description product description product</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#9733; 4,5 Rate</p>
            <a href='#'>$124,56 </a>
          </div>
        </div>
        
        
      </header>
      <footer class='h4'>
        <p>H4</p>
        </footer>
      </body>
    </div>
  );
}
export default App;


