export class Hero {
  constructor(
    public id: number = 0,
    public name: string = '',
    public power: string = '',
    public alterEgo: string = '',
    public email: string = '',
    public status: boolean = false,
    public sex: string = 'woman',
    public password: string = '',
    public repeatPassword: string = ''
  ) { }
}

