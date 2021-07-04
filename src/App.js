import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import ShotsGrid from "./components/shots-grid/ShotsGrid.js";
import Profile from "./components/profile/Profile.js";

function App() {
     const json = require("./export.json");
     const shots = json.shots;
     const userData = json.user;

     return (
          <div className="App">
               <Header />
               <Profile data={userData} shotData={shots} />
               <ShotsGrid data={shots} />
               <Footer />
          </div>
     );
}

export default App;
