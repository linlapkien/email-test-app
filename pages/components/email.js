import style from '@/styles/Form.module.css';
import { useState } from 'react';

export default function EmailFormTest() {
  // Step 1: Create state to track the input value
  const [emailData, setEmailData] = useState('');

  // Step 2: Update state when the input value changes
  const handleInputChange = (event) => {
    setEmailData(event.target.value);
  };

  // Step 3: Handle the submit button click
  const handleSubmit = () => {
    // Here you can process the email value, e.g., send it to an API
    localStorage.setItem('Submitted Email', JSON.stringify(emailData));
  };

  return (
    <div>
      <form className={style.form}>
        <span className={style.title}>Subscribe to our newsletter.</span>
        <p className={style.description}>
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
            value={emailData} // Bind the input value to state
            onChange={handleInputChange} // Track changes to the input
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
      </form>
    </div>
  );
}
