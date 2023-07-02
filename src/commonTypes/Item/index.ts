export interface Item {
    url: string
    key: string
    title: string
    description: string
    tags: string[]
}

export interface ItemContext {
    item: Item | null
    setItem: React.Dispatch<React.SetStateAction<Item | null>>
}
