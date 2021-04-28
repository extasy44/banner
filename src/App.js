import { useState } from 'react';

import Banner from './components/Banner';
import Shop from './components/Shop';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div>
      <Banner
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsShopOpen={setIsShopOpen}
      />
      {isShopOpen && <Shop setIsLoading={setIsLoading} />}
    </div>
  );
};

export default App;
