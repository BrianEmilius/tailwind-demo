import { useState } from "react";

function App() {
  var [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-400 h-10 md:container mx-auto flex justify-between items-center px-5 md:px-10">
        <a href="/">LOGO</a>
        <div className={open ? "bg-white md:bg-transparent absolute md:relative inset-0 bottom-auto pb-4 shadow-md transition-all" : "invisible md:visible"}>
          <button onClick={() => setOpen(!open)} className="md:hidden block ml-auto mr-5">&times;</button>
          <ul className="md:flex gap-5">
            <li className="text-center"><a href="#">Link 1</a></li>
            <li className="text-center"><a href="#">Link 2</a></li>
            <li className="text-center"><a href="#">Link 3</a></li>
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>MENU</button>
      </nav>

      <section className="bg-pink-500 h-64 md:container mx-auto flex items-center flex-col justify-center">
        <h1 className="text-4xl uppercase">Want a free thingy!?</h1>

        <a href="/cta" className="bg-yellow-300 px-5 py-3 rounded-xl">OMG click here!!</a>
      </section>

      <section className="md:container mx-auto px-5 md:px-10 md:flex justify-between py-5">
        <article className="text-center mx-5">
          <img src="https://picsum.photos/200/200" alt="" className="mx-auto rounded-full" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut aut tempora explicabo atque quia soluta quisquam maxime obcaecati maiores expedita accusantium reiciendis ducimus, libero officia tenetur fugit quae ullam.</p>
        </article>
        <article className="text-center mx-5">
          <img src="https://picsum.photos/200/200" alt="" className="mx-auto rounded-full" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut aut tempora explicabo atque quia soluta quisquam maxime obcaecati maiores expedita accusantium reiciendis ducimus, libero officia tenetur fugit quae ullam.</p>
        </article>
        <article className="text-center mx-5">
          <img src="https://picsum.photos/200/200" alt="" className="mx-auto rounded-full" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut aut tempora explicabo atque quia soluta quisquam maxime obcaecati maiores expedita accusantium reiciendis ducimus, libero officia tenetur fugit quae ullam.</p>
        </article>
      </section>
    </>
  );
}

export default App;
