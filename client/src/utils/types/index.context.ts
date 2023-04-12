export type UserContextType = {
    emailAddress: string;
    accessPassword: string;
    documentNumber: string;
    gullName: string;
    birthDate: string;
    phoneNumber: string;
    zipCode: string;
    homeAddress: string;
};

export type CreateContextUser = {
    user: UserContextType;
    setUser: (user: UserContextType) => void;
};
