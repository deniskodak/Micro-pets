import { createContext } from 'react'
import { ItemContext as ItemContextInterface} from 'commonTypes/Item'

export const ItemContext = createContext<ItemContextInterface | null>(null)
