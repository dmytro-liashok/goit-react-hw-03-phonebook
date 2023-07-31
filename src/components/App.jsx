import { Component } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitContacts = data => {
    const nameIsExist = this.isContactNameExist(this.state.contacts, data.name);

    if (nameIsExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = { ...data };
    this.setState(preState => {
      return { contacts: [...preState.contacts, newContact] };
    });
  };

  filterContacts = filterValue => {
    this.setState({ filter: filterValue });
  };

  deleteContact = contactId => {
    this.setState(preState => {
      return {
        contacts: preState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  isContactNameExist = (contacts, name) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitContacts} />
        </Section>
        <Section title="Contacts">
          <Filter
            filterValue={this.state.filter}
            onFilter={this.filterContacts}
          />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          ></ContactsList>
        </Section>
      </div>
    );
  }
}
