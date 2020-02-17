export interface IUser {
    id: number;
    name: String;
    surname1: String;
    surname2: String;
    username: String;
    password: String;
    email: String;
    register_date: Date;
    token: String;
    activated: Boolean;
    user_type: number;

}