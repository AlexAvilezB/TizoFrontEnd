export class User {
  constructor(
    id: number,
    username: string,
    lastname: string,
    email: string,
    birthday: string,
    role: string,
    position: string
  ) {
    this.id = id;
    this.username = username;
    this.lastname = lastname;
    this.email = email;
    this.birthday = birthday;
    this.role = role;
    this.position = position;
  }

  id: number;
  username: string;
  lastname: string;
  email: string;
  birthday: string;
  role: string;
  position: string;
}
