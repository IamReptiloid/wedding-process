export interface UserInfo {
    name: string
    id: number
    present: {
        id: number
        file: string
        namePresent: string
        description: string
    }[]
}
