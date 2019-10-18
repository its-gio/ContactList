const form = document.querySelector("form"),
      name = form.querySelector("#name"),
      address = form.querySelector("#address"),
      number = form.querySelector("#number"),
      contactList = document.querySelector(".contact-list");

// Create contact class for data
class Contact {
  constructor(name, address, number) {
    this.name = name;
    this.address = address;
    this.number = number;
  }

  createEl(type, className) {
    const el = document.createElement(`${type}`);
    el.classList.add(`${className}`);

    return el;
  }

  createContact() {
    let container = this.createEl("div", "contact-list--contain"),
        x = this.createEl("span", "x"),
        xContain = this.createEl("span", "contact-list--contain__remove"),
        contactUI = `
        <span class="contact-list--contain__name">${this.name}</span>
        <span class="contact-list--contain__address">${this.address}</span>
        <span class="contact-list--contain__number">${this.number}</span>
    `;

    x.addEventListener("click", this.deleteContact);

    container.innerHTML += contactUI;
    xContain.appendChild(x)
    container.appendChild(xContain);
    return contactList.appendChild(container);
  }

  deleteContact(e) {
    e.target.parentElement.parentElement.remove();
  }

  clearInputs() {
    name.value = '';
    address.value = '';
    number.value = '';
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const contact = new Contact(name.value, address.value, number.value);

  contact.createContact();

  contact.clearInputs();
})