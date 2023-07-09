

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the values of the selected options
    const question1Value = document.getElementById('question1').value;
    const question2Value = document.getElementById('question2').value;
    const question3Value = document.getElementById('question3').value;
    const question4Value = document.getElementById('question4').value;
  
    const question5Value = document.getElementById('question5').value;

  
  
    // Perform further processing with the feedback data
    // For example, make an API call or store it in a database
  
    // Reset the form fields
    document.getElementById('question1').value = '1';
    document.getElementById('question2').value = '2';
    document.getElementById('question3').value = '3';
    document.getElementById('question4').value = '4';
    document.getElementById('question5').value = '5';
  });