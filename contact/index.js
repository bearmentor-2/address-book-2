const contactByIdElement = document.getElementById("contact-by-id");

function renderContactById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));

  const dataContacts = loadContacts();

  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });

  const aliveText = contact.isAlive ? "Still alive" : "Rest in peace";

  const contactByIdString = `<div>
    <h2>${contact.fullName} (${contact.nickName})</h2>
    <p>Age: ${contact.age} years old</p>
    <p>Email: ${contact.email}</p>
    <p>Phone: ${contact.phone}</p>
    <p>Bithday: ${contact.birthday}</p>
    <p>Address: ${contact.address}</p>
    <p>${aliveText}</p>
  </div>`;

  contactByIdElement.innerHTML = contactByIdString;
}

renderContactById();
