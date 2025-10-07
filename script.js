const parseCode = (str) => {
  // Split the string using one or more zeros as the separator
  const parts = str.split(/0+/);

  // Return the object with required properties
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
