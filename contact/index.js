function renderContactById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));

  const dataContacts = loadContacts();

  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });

  console.log(contact);
}

renderContactById();
