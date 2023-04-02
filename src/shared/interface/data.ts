export interface Data {
    data: {
        id: number;
        name: string;
        isCome: boolean | null;
        present: string[] | null;
        satellites?: {
            nameSatellites: string
        }[] | null;
        alcohol: string[] | null;
        transport: string | null;
    }[]
}

export interface User {
    id: number
}
