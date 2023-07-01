export interface TabContextInterface {
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    defaultTab: string;
}