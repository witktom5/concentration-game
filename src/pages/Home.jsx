import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className='w-4/6 md:w-3/5 lg:w-2/5 mx-auto my-auto pb-8'>
      <header>
        <h1 className='text-4xl font-bold text-center mb-14 mt-8'>
          Concentration Game
        </h1>
        <p className='text-xl text-center'>
          Welcome to Concentation Game! Please press "Play" to start the game or
          press "Instructions" if you want to learn how to play. Have fun!
        </p>
      </header>
      <section className='grid md:grid-cols-2 mt-14 gap-5'>
        <Link to='/play' className='btn btn-success'>
          Play
        </Link>
        <Link to='/instructions' className='btn btn-info'>
          Instructions
        </Link>
      </section>
    </main>
  );
}
export default Home;
