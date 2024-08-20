import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FontAwesomeIcon icon={faHouse} />
      </header>
      <body>
      <Button variant="flat" size="xxl" class="bg-primary">
        flat button
      </Button>
      </body>
    </div>
  );
}

export default App;
