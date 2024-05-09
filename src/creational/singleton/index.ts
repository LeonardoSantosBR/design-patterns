class UserSingleton {
  private static _instance: UserSingleton | null = null;
  public name: string;
  public email: string;
  public cpf: string;

  private constructor(name: string, email: string, cpf: string) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }

  static getInstance(name: string, email: string, cpf: string): UserSingleton {
    if (UserSingleton._instance === null) {
      UserSingleton._instance = new UserSingleton(name, email, cpf);
    }
    return UserSingleton._instance;
  }
}
