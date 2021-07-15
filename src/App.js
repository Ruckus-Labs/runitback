import { useState } from 'react';
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import ShotsGrid from "./components/shots-grid/ShotsGrid.js";
import Profile from "./components/profile/Profile.js";
import EmptyState from "./components/empty-state/EmptyState";

function App() {

     const [shotData, setShotData] = useState(null);
     const [numberOfActiveShots, setNumberOfActiveShots] = useState('0');

     return (
          <div className="App">
               <Header shotData={shotData} setShotData={setShotData} />
               {shotData ? <Profile profileImage={shotData.user.avatar_url} numberOfShots={shotData.shots.length} name={shotData.user.name} createdAt={shotData.user.created_at} /> : <EmptyState setShotData={setShotData} />}
               {shotData ? <ShotsGrid data={shotData.shots} setData={setShotData.shots} /> : ''}
               <Footer />
          </div>
     );
}

export default App;
