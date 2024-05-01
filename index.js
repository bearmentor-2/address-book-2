const contactsListElement = document.getElementById("contacts");

const contacts = [
  {
    id: 1,
    fullName: "Steven Paul Jobs",
    nickName: "Steve",
    email: "steve@apple.com",
    phone: "+1-23456789",
    age: 56,
    isAlive: false,
    address: "Palo Alto, California, USA",
    birthday: new Date("1955-02-24"),
  },
  {
    id: 2,
    fullName: "William Henry Gates III",
    nickName: "Bill",
    email: "bill@microsoft.com",
    phone: "+1-98765432",
    age: 68,
    isAlive: true,
    address: "Seattle, Washington, USA",
    birthday: new Date("1955-10-28"),
  },
];

function renderContacts() {
  const contactsString = contacts
    .map((contact) => {
      const aliveText = contact.isAlive ? "Still alive" : "Rest in peace";

      return `<li>
      <h2>${contact.fullName} (${contact.nickName})</h2>
      <p>Age: ${contact.age} years old</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Bithday: ${contact.birthday}</p>
      <p>Address: ${contact.address}</p>
      <p>${aliveText}</p>
    </li>`;
    })
    .join("");

  contactsListElement.innerHTML = contactsString;
}

function addContact() {
  const newContact = {
    id: 3,
    fullName: "M Haidar Hanif",
    nickName: "Haidar",
    email: "haidar@haidar.com",
    phone: "+62-812-3456-789",
    age: 30,
    isAlive: true,
    address: "Bandung, Jawa Barat, Indonesia",
    birthday: new Date("1993-05-23"),
  };

  const result = contacts.push(newContact);

  renderContacts();
}

function searchContacts(keyword) {
  const searchedContacts = contacts.filter((contact) => {
    return contact.fullName.toLowerCase().includes(keyword.toLowerCase());
  });

  console.log(searchedContacts);
}

function getContactById(id) {
  const contact = contacts.find((contact) => {
    return contact.id === id;
  });

  console.log(contact);
}

renderContacts();
