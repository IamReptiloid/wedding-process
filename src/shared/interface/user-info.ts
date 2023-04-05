export interface UserInfo {
    name: string
    presents: {
        id: number
        file: string
        name: string
        description: string
    }[]
}
