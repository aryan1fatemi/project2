import './App.css';
import Card from './components/Card.jsx';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <h1 class='heading'>The Best Pizza Places near Dulles, VA</h1>
      </header>
      <div className='Card-Container'>
        <Card
          name='Pizza Twist'
          image='./src/assets/PizzaTwist.jpg'
          link='https://www.yelp.com/biz/pizza-twist-herndon'
        />
        <Card
          name='The Dons Wood-Fired Pizza'
          image='./src/assets/don.jpg'
          link='https://www.yelp.com/biz/the-dons-wood-fired-pizza-sterling'
        />
        <Card
          name='Champs Pizza'
          image='./src/assets/champ.jpg'
          link='https://www.yelp.com/biz/champs-pizza-sterling'
        />
        <Card
          name='Crust Pizzeria Napoletana'
          image='./src/assets/napo.jpg'
          link='https://www.yelp.com/biz/crust-pizzeria-napoletana-herndon-herndon-2'
        />
        <Card
          name='&pizza'
          image='./src/assets/andpizza.jpg'
          link='https://www.yelp.com/biz/and-pizza-dulles-28-dulles'
        />
        <Card
          name='Goodfellas'
          image='./src/assets/goodfellas.jpg'
          link='https://www.yelp.com/biz/goodfellas-sterling'
        />
        <Card
          name= 'Piero&apos;s Corner'
          image='./src/assets/piero.jpg'
          link='https://www.yelp.com/biz/pieros-corner-herndon-2'
        />
        <Card
          name= 'Fire Works Pizza'
          image='./src/assets/firework.jpg'
          link='https://www.fireworkspizza.com/cascades'
        />
        <Card
          name= 'Ledo Pizza'
          image='./src/assets/ledo.jpg'
          link='https://order.ledopizza.com/menu/ledo-pizza-sterling'
        />
        <Card
          name= 'Rai&apos;s Pizza'
          image='./src/assets/rai.png'
          link='https://www.raispizza.com/'
        />
      </div>
    </div>
  );
};

export default App;
