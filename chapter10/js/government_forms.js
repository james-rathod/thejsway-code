// JavaScript code goes here

// Complete the following program to compute and show the names of political forms ending with "cy".

const governmentForms = [
    {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
    },
    {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
    },
    {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
    },
    {
      name: "Theocracy",
      definition: "Rule by a religious elite"
    },
    {
      name: "Democracy",
      definition: "Rule by the people"
    },
    {
      name: "Autocracy",
      definition: "Rule by a single person"
    }
  ];
  
  // TODO: compute the formsEndingWithCy array
  
  // Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]

  const formsEndingWithCy = [];
  for (const form of governmentForms){
    if(form.name.endsWith('cy')){
      formsEndingWithCy.push(form.name);
    }
  }

  // below code will show the names as lists using for-of loop
  // for (const formName of formsEndingWithCy){
  //   console.log(formName);
  // }

  
  console.log(formsEndingWithCy);
  