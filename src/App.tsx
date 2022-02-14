import React from "react";

import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <button>Button</button>
      </Card>
    </div>
  );
}

export default App;
