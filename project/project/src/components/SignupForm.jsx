function SignupForm() {
    return (
      <div className="signup-form">
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    );
  }