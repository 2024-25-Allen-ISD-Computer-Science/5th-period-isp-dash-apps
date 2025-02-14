import Button from './components/button'
import localFont from "next/font/local";

const RubikBold = localFont({
  src: "./fonts/Rubik-Bold.ttf",
  variable: "--font-rubik-bold",
  weight: "100 900",
});
const RubikRegular = localFont({
  src: "./fonts/Rubik-Regular.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});
export default function Home() {
  return (
    <>
    <div className={`${RubikBold.className} container text-40px`}>WELCOME TO DASH APPS</div>

    <div className={`${RubikBold.className} container text-40px`}> What is Dash Apps?</div>
    <Button text="Find Us on GitHub"/>

    <div className={`${RubikRegular.className} container text-20px`}>The Dash Software and Web Application Suite is a collection of open source applications with the aim of
       making free and convienient software options available for everyone to use and contribute to.
      We have a dedicated team working to develop these apps and are open to suggestions for new ideas on projects we can create </div>
    
    <div className={`${RubikBold.className} container text-40px`}> FOUNDERS/CONTRIBUTERS</div>

    <div className={`${RubikRegular.className} container text-20px`}> 
     Logan Is the product manger and producer on the team 
     Rithvik is the programmer And follows in logan footsteps and Debugger
     Braylon is the researcher and Edior in dash apps helps Find ideas on projects and can adapt.
</div>
    </>
  );
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Layout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">Header</header>
        <div class="main-content">
            <div class="box">Box 1</div>
            <div class="box">Box 2</div>
            <div class="box">Box 3</div>
        </div>
        <div class="sub-content">
            <div class="small-box">Small Box 1</div>
            <div class="small-box">Small Box 2</div>
        </div>
        <footer class="footer">Footer</footer>
    </div>
</body>
</html>

