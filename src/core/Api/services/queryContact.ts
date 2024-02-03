import { httpClient } from "@src/core";
import type { Contact } from "@src/core";

const queryContact = {
  getContact: () =>
    httpClient
      .get<Contact | undefined>("/contact.json")
      .then((response) => response.data),
};

export default queryContact;
