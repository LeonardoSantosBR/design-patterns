interface Prototype {
  clone(): Prototype;
}

class User implements Prototype {
  constructor(
    public name: string,
    public email: string,
  ) {
    this.name = name;
    this.email = email;
  }

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
}

const user = new User('luiz', 'luiz123@gmail.com');
const userCloned = user.clone();

console.log(userCloned);
