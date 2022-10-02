
import React, {useState, useEffect} from 'react';
import AddCountry from './components/AddCountry/AddCountry';
import Country from './components/Country/Country';
import Post from './components/Post/Post';

function App() {
  const products = [
    {name: 'Photoshope', price : '60$'},
    {name: 'Illistrator', price : '60$'},
    {name: 'pdf reader', price : '60$'},
    {name: 'Excek', price : '60$'},
    {name: 'Microsoft word', price : '60$'},
  ]
  const productName = products.map(product => product.name);


  const  [countries , setCountries] =useState([]);
  const [addCountry , setAddCounty] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>  setCountries(data))
        .catch(error => console.log(error));
    },[])


  
    const handleAddCountry = (country) => {
        const newAddCountry = [...addCountry, country];
        setAddCounty(newAddCountry);
    }
  
  return (
    <div>
      <header>
        <h2>Country Loaded : {countries.length}</h2>
        <h3>Add Country :{addCountry.length} </h3>
        <AddCountry addCountry ={addCountry}></AddCountry>
        {/* <Count></Count> */}
        <ul>
          {
            countries.map( country => <Country country ={country} handleAddCountry={handleAddCountry} key ={country.flags.svg}></Country>)
          }
        </ul>
        {/* <User></User>
        <Post></Post> */}
        {/* <ul>
          {
            products.map(product => <Product product ={product}></Product>)
          }
        </ul> */}

        
      </header>
    </div>
  );
}

function Product(props){

  const{name , price}= props.product;
  const productStyle = {
    background:'#fafafa',
    height:'auto',
    width:'300px',
    padding:'10px',
    margin:'10px',
    borderRadius:'5px',
    boxShadow:'5px 5px 5px 5px lightgray',
    float:'left',
    textAlign:'center'
  }

  const btnstyle={
    color: '#000',
    padding: '10px 20px',
    borderRadius: '22px',
    fonteight: 'bold',
}

  return(
    <div className="product" style={productStyle}>
      <img src="" alt="" className="product-img" />
      <div className="product-name">
        <h3>Product: <span style={{color:'red'}}>{name}</span></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, illo!</p>
        <p style={{color:'red' , fontWeight:'bold'}}>Price:   {price}</p>
        <button style={btnstyle}>Buy Now</button>
      </div>
    </div>
  )
}


function Count(props) {
  const [count, setCount] = useState(0);
  const handleIncree = () =>{setCount(count + 1)};
  const handleDeccree = () =>{setCount(count -1)};
  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={handleIncree }>+</button>
      <button onClick={handleDeccree }>-</button>
    </div>
  );


}
function User(props) {
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
    
  }, []);
  
  return (
    <div>
      <h3> Name  : {user.name}</h3>
      <p>Number Of Users : {user.length}</p>
      <ul>
        {
          user.map(user => <li>{user.name}</li> )
        }
      </ul>
      
    </div>
  );
}








export default App;
