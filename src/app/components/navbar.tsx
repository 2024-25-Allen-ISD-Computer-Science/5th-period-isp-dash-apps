import localFont from "next/font/local";


const RubikBold = localFont({
  src: "../fonts/Rubik-Bold.ttf",
  variable: "--font-rubik-bold",
  weight: "100 900",
});

export default function NavBar() {
    return (
      <>
      
      <nav className={RubikBold.className}>

<div className="uppercase text-20px tracking-widest">

  <h4>Dash Apps</h4>

</div>

<ul className="nav-links">

  <li><a className="active" href="/">Home</a></li>
  <li><a className="active" href="/apps">Apps</a></li>
  <li><a className="active" href="/info">Info</a></li>




</ul>

</nav>
      </>
    );
  }