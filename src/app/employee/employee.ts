export interface Employee {
    id: number;
    employeeCode: string;
    salutation: string;
    title: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    isDeveloper: boolean;


    selected: boolean;
    addresses: {
        primaryResidence: {
            street: string;
            houseNumber: string;
            zip: string;
            city: string;
        };
        secondaryResidence: {
            street: string;
            houseNumber: string;
            zip: string;
            city: string;
        };
    };
    contacts: {
        fon: string;
        mobile: string;
        email: string;
    };

}