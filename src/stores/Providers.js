import { ConfigProvider } from "stores/ConfigStore";
import { UIrovider } from "stores/UIStore";

export function AppProviders({children}) {
    return (
        <ConfigProvider>
            <UIProvider>
                {children}
            </UIProvider>
        </ConfigProvider>
    )
}