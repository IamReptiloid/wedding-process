export interface UserInfo {
    name: string
    id: number
    present: {
        id: number
        file: string
        name: string
        description: string
    }[]
}
