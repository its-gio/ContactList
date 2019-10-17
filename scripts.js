const form = document.querySelector("form"),
      contactList = document.querySelector(".contact-list");

// Create contact class for data
class Contact {
  constructor(name, address, number) {
    this.name = name;
    this.address = address;
    this.number = number;
  }

  createContact() {
    let contactUI = `
      <div class="contact-list--contain">
        <span class="contact-list--contain__name">${this.name}</span>
        <span class="contact-list--contain__address">${this.address}</span>
        <span class="contact-list--contain__number">${this.number}</span>
        <span class="contact-list--contain__remove"></span>
      </div>
    `;

    contactList.innerHTML += contactUI;
  }

  clearInputs() {
    form.querySelector("#name").value = '';
    form.querySelector("#address").value = '';
    form.querySelector("#number").value = '';
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = form.querySelector("#name").value,
      address = form.querySelector("#address").value,
      number = form.querySelector("#number").value,
      contact = new Contact(name, address, number);

  contact.createContact();

  contact.clearInputs();
})