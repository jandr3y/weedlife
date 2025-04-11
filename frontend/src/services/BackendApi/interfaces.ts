export interface User {
    name: string,
    phone: string,
    email: string,
    document: string,
    birthdate: string,
    role?: string,
    password?: string,
    passwordConfirm?: string,
    id?: number
}

export interface CashbackHistory {
    id: number,
    value: number,
    title: string,
    created_at: string,
    message: string|null,
    status: string
}

export interface UpdateUserData {
    name: string,
    phone: string,
    document: string,
    birthdate: string
}