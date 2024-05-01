interface User {
  email: string;
  name: string;
}

export class MydataBaseClassic {
  private static _instance: MydataBaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MydataBaseClassic {
    if (MydataBaseClassic._instance === null) {
      MydataBaseClassic._instance = new MydataBaseClassic();
    }
    return MydataBaseClassic._instance;
  }

  createUser(user: User): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  findAllUsers(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
