const contacts = [
  {
    fullName: "Steven Paul Jobs",
    nickName: "Steve",
    email: "steve@apple.com",
    phone: "+1-23456789",
    age: 56,
    isAlive: false,
    address: "Palo Alto, California, USA",
  },
  {
    fullName: "William Henry Gates III",
    nickName: "Bill",
    email: "bill@microsoft.com",
    phone: "+1-98765432",
    age: 68,
    isAlive: true,
    address: "Seattle, Washington, USA",
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];

  const aliveText = contact.isAlive ? "Still alive" : "Rest in peace";

  const contactText = `
  ${contact.fullName} (${contact.nickName}) is ${contact.age} years old
  
  Email: ${contact.email}
  Phone: ${contact.phone}

  Address: ${contact.address}

  ${aliveText}
  `;

  console.log(contactText);
}
