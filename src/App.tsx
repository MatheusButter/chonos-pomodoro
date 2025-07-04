
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>Titulo 
        <button className="button"> <TimerIcon/> </button>
        
      </Heading>
      <p>Your productivity tool for time management.</p>
    </div>
  );
}

 
