import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pbs.twimg.com/profile_images/1484243553178038281/Cs9gLs37_400x400.jpg" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
