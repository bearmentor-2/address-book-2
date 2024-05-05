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
