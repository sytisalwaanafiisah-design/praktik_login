import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isBrewing, setIsBrewing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isReady = username.trim() !== "" && password.trim() !== "";

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username && !password) {
      setError("Please fill in your username and password.");
      return;
    }

    if (!username) {
      setError("Please enter your username.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setIsBrewing(true);

    setTimeout(() => {
      setIsBrewing(false);
      setIsLoggedIn(true);
    }, 2500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setShowPassword(false);
    setError("");
  };

  return (
    <main className="app">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <div className="coffee-bean bean-one"></div>
      <div className="coffee-bean bean-two"></div>

      <section className={`login-card ${isLoggedIn ? "success-card" : ""}`}>
        {!isLoggedIn ? (
          <>
            <div className="brand">
              <div className="brand-icon">☕</div>

              <div>
                <h1>Morning Brew</h1>
                <p>YOUR DAILY COFFEE MOMENT</p>
              </div>
            </div>

            <div className={`coffee-area ${isBrewing ? "brewing" : ""}`}>
              <div className="coffee-machine">
                <div className="machine-panel">
                  <div className="machine-logo">MB</div>

                  <div className="machine-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="machine-head">
                  <div className="portafilter"></div>
                  <div className="coffee-nozzle"></div>

                  {isBrewing && <div className="coffee-stream"></div>}
                </div>

                <div className="coffee-cup">
                  <div className="coffee-surface"></div>
                  <div className="cup-handle"></div>
                </div>

                <div className="machine-base"></div>

                {isBrewing && (
                  <div className="steam">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>
            </div>

            <div className="welcome">
              <p>START YOUR DAY</p>
              <h2>Good morning.</h2>

              <span>Log in and let us brew something good for you.</span>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <label>
                Username
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    setError("");
                  }}
                  disabled={isBrewing}
                />
              </label>

              <label>
                Password
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                    disabled={isBrewing}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isBrewing}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              {isReady && !isBrewing && !error && (
                <div className="ready-message">
                  <span>✓</span>
                  <p>Ready to brew your morning coffee</p>
                </div>
              )}

              {error && (
                <div className="error-message">
                  <span>☕</span>
                  <p>{error}</p>
                </div>
              )}

              <button type="submit" disabled={isBrewing}>
                {isBrewing ? "BREWING..." : "BREW & LOGIN"}
                <span>{isBrewing ? "☕" : "→"}</span>
              </button>
            </form>

            <div className="coffee-note">
              <span>✦</span>
              Freshly brewed for your day
              <span>✦</span>
            </div>
          </>
        ) : (
          <div className="success-content">
            <div className="success-icon">☕</div>

            <p className="success-label">YOUR COFFEE IS READY</p>

            <h2>Good morning,</h2>

            <h3>{username}!</h3>

            <div className="success-cup">
              <div className="success-coffee"></div>
              <div className="success-handle"></div>

              <div className="success-steam">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <p className="success-message">
              Your morning brew is ready.
              <br />
              Have a wonderful day!
            </p>

            <button className="logout-button" onClick={handleLogout}>
              BREW AGAIN
              <span>↻</span>
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
