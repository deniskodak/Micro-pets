export interface Item {
    url: string
    key: string
    title: string
    description: string
}

export interface ItemContext {
    item: Item
    setItem: React.Dispatch<React.SetStateAction<Item>>
}
