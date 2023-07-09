import React from 'react';
import cssstyle from './Feedback.css'; 
import Meeting from './Meeting';
import Meeting2 from './Meeting(instructor)';

function App(){
  return (
    <>
    <div class="container">
    <h1>Feedback Form</h1>
    <form id="feedbackForm"><br/>
      <label for="question1">Question 1:</label>
      <select id="question1" name="question1">
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
<br/>
      <label for="question2">Question 2:</label>
      <select id="question2" name="question2">
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
<br/>
      <label for="question3">Question 3:</label>
      <select id="question3" name="question3">
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
<br/>
      <label for="question4">Question 4:</label>
      <select id="question4" name="question4">
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
<br/>
      <label for="question5">Question 5:</label>
      <select id="question5" name="question5">
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select><br/>
      <button type="submit">Submit</button>
    </form>
  </div>

  <Meeting />
  <Meeting2 />
    </>
  )
}

export default App;