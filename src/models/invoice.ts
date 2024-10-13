export interface Invoice{
    isDraft: boolean,
    id?: string,
    billFrom: {
        street: string,
        city: string,
        postal: string,
        country: string
    },
    billTo: {
        name: string,
        email: string,
        street: string,
        city: string,
        postal: string,
        country: string
    },
    invoiceDate: number,
    terms: number,
    items: {
        name: string,
        qty: number,
        price: number
    }[]
}