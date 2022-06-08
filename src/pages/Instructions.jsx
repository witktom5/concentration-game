function Instructions() {
  return (
    <main className='w-4/6 md:w-4/5 lg:w-3/5 2xl:w-1/2 mx-auto my-auto pb-8'>
      <header>
        <h1 className='text-4xl font-bold text-center mb-20 mt-8'>
          Instructions
        </h1>
      </header>
      <section className='grid md:grid-cols-2 gap-6 text-lg text-black'>
        <div className='card bg-success shadow-md flex-1'>
          <div className='card-body'>
            <h2 className='card-title text-2xl font-extrabold'>1</h2>
            <p>
              Start the game by clicking the "Play" button in the navigation bar
              on the top of this page. Your goal is to collect all of the cards
              by finding matching pairs.
            </p>
          </div>
        </div>
        <div className='card bg-info shadow-md flex-1'>
          <div className='card-body'>
            <h2 className='card-title text-2xl font-extrabold'>2</h2>
            <p>
              Click on a card to reveal the image on its reverse. Then select
              another card. If the images match selected cards will get removed
              and you will gain a point.
            </p>
          </div>
        </div>
        <div className='card bg-info shadow-md '>
          <div className='card-body'>
            <h2 className='card-title text-2xl font-extrabold'>3</h2>
            <p>
              If images on the selected cards do not match they get hidden
              again. Memorize their position in order to collect all the cards
              with minimum amount of moves. Selecting two cards counts as one
              move.
            </p>
          </div>
        </div>
        <div className='card bg-success shadow-md '>
          <div className='card-body'>
            <h2 className='card-title text-2xl font-extrabold'>4</h2>
            <p>
              After succesfully collecting all the cards you can play again. You
              can also press the "Reset game" button while playing if you want
              to start over. Cards are shuffled every time a new game is
              started.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Instructions;
