function About() {
  return (
    <main className='w-5/6 md:w-4/5 lg:w-3/5 mx-auto my-auto pb-8'>
      <header>
        <h1 className='text-4xl font-bold text-center mb-20 mt-8'>About</h1>
      </header>
      <section className='grid md:grid-cols-2 2xl:grid-cols-4 gap-6  text-neutral-content'>
        <div className='card bg-neutral shadow-md flex-1'>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quasi quod repellat mollitia expedita nulla, quo molestias
              repellendus debitis hic commodi. Esse eum earum recusandae,
              voluptas at repellat harum enim! Voluptatum laborum quasi et
              consequuntur quidem ipsam?
            </p>
          </div>
        </div>
        <div className='card bg-neutral shadow-md flex-1'>
          <div className='card-body'>
            <h2 className='card-title'>Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              fugit illo, error, sint perspiciatis modi officia, excepturi
              molestiae voluptate provident neque voluptates? Officia tempora
              eos rerum dolore modi velit sapiente.
            </p>
          </div>
        </div>
        <div className='card bg-neutral shadow-md '>
          <div className='card-body'>
            <h2 className='card-title'>Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, dolores. A quis quas laborum corrupti quod ipsa
              repudiandae! Harum, porro? Repellat odit tempore reprehenderit.
              Quibusdam deleniti alias doloremque dolores deserunt.
            </p>
          </div>
        </div>
        <div className='card bg-neutral shadow-md '>
          <div className='card-body'>
            <h2 className='card-title'>Consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, dolores. A quis quas laborum corrupti quod ipsa
              repudiandae! Harum, porro? Repellat odit tempore reprehenderit.
              Quibusdam deleniti alias doloremque dolores deserunt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
