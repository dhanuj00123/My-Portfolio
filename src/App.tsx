import "./App.css";
import NavBar from "./components/Navbar/navBar";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Logo from "./assets/logo.svg";
import HeroPage from "./components/HeroPage/heroPage";
import MyProjects from "./components/MyProjects/myProjects";
import { useIsMobile } from "./hooks/screenWidthHook";
function App() {
  const isMobile = useIsMobile(); // use to do mobile responsive

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-between ">
          <div className="flex items-center ">
            <img src={Logo} />
            <h3 className="pl-4 scroll-m-20 text-2xl font-semibold tracking-tight">
              Dhanuj
            </h3>
          </div>
          <div className="flex h-14 ">
            <NavBar />
          </div>
          <div className="flex items-center w-14 h-14 ">
            <ModeToggle />
          </div>
        </div>
        <HeroPage />
        <MyProjects />
      </ThemeProvider>
    </>
  );
}

export default App;
