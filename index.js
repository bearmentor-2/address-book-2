const addContactFormElement = document.getElementById("add-contact-form");
const contactsListElement = document.getElementById("contacts");
const searchKeywordInputElement = document.getElementById("search-keyword");

function renderContacts() {
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("q");
  searchKeywordInputElement.value = keyword;

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
      <a href="/contact/?id=${contact.id}">
        <h2>${contact.fullName} (${contact.nickName})</h2>
        <p>Age: ${contact.age} years old</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Bithday: ${contact.birthday}</p>
        <p>Address: ${contact.address}</p>
        <p>${aliveText}</p>
      </a>
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

addContactFormElement.addEventListener("submit", addContact);

renderContacts();
