import { MemoryRouter } from 'react-router-dom';
import { PubsubDemoApp } from "./pubsub_demo_app.js";
    
export const PubsubDemoAppBasic = () => {
  return (
    <MemoryRouter>
      <PubsubDemoApp />
    </MemoryRouter>
  );
}