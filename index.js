const addContactFormElement = document.getElementById("add-contact-form");
const contactsListElement = document.getElementById("contacts");

let initialDataContacts = [
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

function saveContacts(newDataContacts) {
  localStorage.setItem("dataContacts", JSON.stringify(newDataContacts));
}

function loadContacts() {
  const dataContacts = JSON.parse(localStorage.getItem("dataContacts"));

  if (!dataContacts) {
    saveContacts(initialDataContacts);
    return initialDataContacts;
  } else {
    return dataContacts;
  }
}

function renderContacts() {
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("q");

  const dataContacts = loadContacts();

  const filteredContacts = keyword
    ? searchContacts(dataContacts, keyword)
    : dataContacts;

  const contactsToDisplay = structuredClone(filteredContacts);

  const contactsString = contactsToDisplay
    .reverse()
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

function addContact(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const dataContacts = loadContacts();
  const nextId = dataContacts[dataContacts.length - 1].id + 1;

  const newContact = {
    id: nextId,
    fullName: formData.get("full-name"),
    nickName: "",
    email: formData.get("email"),
    phone: formData.get("phone"),
    age: 0,
    isAlive: true,
    address: "",
    birthday: new Date("2000-01-01"),
  };

  const newDataContacts = [...dataContacts, newContact];

  saveContacts(newDataContacts);
  renderContacts();
}

function searchContacts(contacts, keyword) {
  const searchedContacts = contacts.filter((contact) => {
    return contact.fullName.toLowerCase().includes(keyword.toLowerCase());
  });
  return searchedContacts;
}

function getContactById(id) {
  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });

  console.log(contact);
}

addContactFormElement.addEventListener("submit", addContact);

renderContacts();
