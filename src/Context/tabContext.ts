import { createContext } from 'react'
import { TabContextInterface} from 'commonTypes/Tab'

export const TabContext = createContext<TabContextInterface | null>(null)
