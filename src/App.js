import "./App.css";
import logo from "./images/logo.svg";
import girl from "./images/hero-mobile.jpg";
import Input from "./Components/Input";
import girlAdult from "./images/hero-desktop.jpg";

function App() {
  return (
    <main className="   sm:flex sm:items-center  h-[100vh]  bg-[black] ">
      <div className="container w-[375px] md:w-[1440px]   sm:mx-auto bg-gradient-to-t from-firstColor to-secondColor  ">
        <div className="md:flex md:flex-row-reverse  ">
          <div className="bg-white p-8 md:hidden ">
            <img src={logo} alt="" />
          </div>
          {/* <div>
            <img className="md:hidden" src={girl} alt="" />
            <img
              src={girlAdult}
              alt=""
              className=" md:h-[100%] sm:hidden md:block  object-cover"
            />
          </div> */}
          <picture>
            <source
              media="(min-width:768px )"
              srcset={girlAdult}
              className=" h-[100%] "
            />
            <img src={girl} alt="" className="h-[100%] " />
          </picture>

          <div className="p-10  bg-white flex flex-col md:justify-start md:flex md:items-start md:ml-10  items-center ">
            <div className="bg-white p-8 md:mb-10 md:block sm:hidden   ">
              <img src={logo} alt="" />
            </div>
            <h1 className="text-5xl font-josefine mb-4 mt-4 md:text-7xl ">
              <span className="block font-[300] uppercase ml-10 text-Redone tracking-[1.5rem] md:ml-0 ">
                We're
              </span>{" "}
              <span className="block uppercase font-[600] tracking-[0.5rem] text-DarkGrayishRed md:tracking-[1.5rem]  ">
                coming
              </span>{" "}
              <span className="block uppercase font-[600] tracking-[0.5rem] ml-7 text-DarkGrayishRed md:tracking-[1.5rem] md:ml-0 ">
                soon
              </span>
            </h1>
            <p className=" text-Redone  font-josefine text-[14px] font-normal md:text-[16px] md:max-w-[50%] md:mb-5 ">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and <span className="ml-20 md:ml-0">our launch deals.</span>
            </p>
            <Input />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
