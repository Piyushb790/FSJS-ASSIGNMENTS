skills = [
  "SEO",
  "Social Media Platforms",
  "Twitter",
  "Web Analytics",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Algorithms",
  "Analytical Skills",
  "Big Data",
  "Calculating",
  "Compiling Statistics",
  "Data Analytics",
  "SEO",
  "Social Media Platforms",
  "Twitter",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Research",
  "Subject Matter Experts (SMEs)",
  "Technical Documentation",
  "Web Analytics",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Research",
  "Subject Matter Experts (SMEs)",
  "Technical Documentation",
];

console.log(skills.sort());

const unique = (skills) => {
  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      if (skills[i] === skills[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(unique(skills));
