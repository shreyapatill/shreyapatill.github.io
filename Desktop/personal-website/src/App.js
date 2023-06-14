import logo from './logo.svg';
import './App.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meqwyayp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Feel free to contact me ~</h2>
      <div className="form-field">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="form-input"
        />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="form-error"
      />
      <label htmlFor="message" className="form-label center-label">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="form-error"
      />
      <button type="submit" disabled={state.submitting} className="form-button">
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World! My name is Shreya.</code>
        </p>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;