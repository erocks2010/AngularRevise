export class SignUpForm {
    id:number;
    firstName:string;
    lastName:string;
    middleName?:string;
    state:string;
    pinCode:number;
}

export const statesIndia=[
    'Andhra Pradesh','Himachal Pradesh','Punjab','Haryana','Maharashtra'
]

export const Addresses=[
    {
        state:'HP',pinCode:'123123'
    },
    {
        state:'MP',pinCode:'111222'
    },
    {
        state:'AP',pinCode:'333444'
    }
]
