function App() {
  return (
    <div className="App">
      <h1>React Getting Started</h1>
      <hr/>
        <p><em><b>To use React in production, you need npm which is included with Node.js.</b></em></p>
        <p>
          To get an overview of what React is, you can write React code directly in HTML.
        </p>
        <p>
          But in order to use React in production, you need npm and Node.js installed.
        </p>
      <hr/>
        <h2>React Directly in HTML</h2>
          <p>
            This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.
          </p>
      <hr/>
        <h2>Setting Up a React Environment</h2>
          <p>
          If you have npx and Node.js installed, you can create a React application by using <code>create-react-app</code>.
          </p>
          <p>
            <em><b>If you've previously installed <code>create-react-app</code> globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of <code>create-react-app</code>.</b></em>
          </p>
          <p>
            The <code>create-react-app</code> will set up everything you need to run a React application.
          </p>
        <hr/>
          <h2>Run The React Application</h2>
            <p>
              Run this command <code>npm start</code> to run the React application.
            </p>
    </div>
  );
}

export default App;
