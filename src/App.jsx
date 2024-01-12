import logo from "./assets/eshop.svg";

function App() {
  return (
    <>
      <header className=" w-full flex justify-center py-8">
        <div className=" flex items-center gap-4">
          <figure className=" w-14 h-14 relative">
            <img
              src={logo}
              alt="eShop"
              className=" object-cover w-full h-full"
            />
          </figure>
          <h1 className=" text-5xl">eShop</h1>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default App;
