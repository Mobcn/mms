import { CssBaseline, Divider, Stack, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { leftMenuConfig, routeMap } from './config/left-menu';
import { loadAsyncComponent } from './app/tools/component';
import HeadNav from './app/components/HeadNav/HeadNav';
import LeftMenu from './app/components/LeftMenu/LeftMenu';
import MainView from './app/components/MainView';
import theme from './app/theme/theme-base';
import './app/styles/index.css';

/**
 * 应用
 */
function App() {
    let [component, setComponent] = useState(<></>);
    const location = useLocation();
    useEffect(() => loadAsyncComponent(routeMap.get(location.pathname), setComponent), [location.pathname]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{ height: '100vh' }}>
                <HeadNav />
                <Divider />
                <Stack direction="row" sx={{ flex: 1 }}>
                    <LeftMenu menuDataList={leftMenuConfig} />
                    <MainView component={component} />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
