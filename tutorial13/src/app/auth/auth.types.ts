// export interface Auth{
//     id: string;
//     email:string;
//     username:string;
// }
export class Auth{
  public  constructor(
    public id: string = '',
    public email:string='',
    public username:string = ''
  ){}
};