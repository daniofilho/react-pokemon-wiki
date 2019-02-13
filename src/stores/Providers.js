import React from 'react';

import { ConfigProvider } from "stores/ConfigStore";
import { UIProvider } from "stores/UIStore";

export function AppProviders({children}) {
    return (
        <ConfigProvider>
            <UIProvider>
                {children}
            </UIProvider>
        </ConfigProvider>
    )
}