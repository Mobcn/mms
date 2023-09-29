import { CssBaseline, Divider, Stack, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadAsyncComponent } from './app/tools/component';
import { resolveMenu } from './app/tools/left-menu';
import leftMenuConfig from './config/left-menu-config';
import HeadNav from './app/components/HeadNav/HeadNav';
import LeftMenu from './app/components/LeftMenu/LeftMenu';
import MainView from './app/components/MainView';
import theme from './app/theme/theme-base';
import _404 from './components/404/_404';
import './app/styles/index.css';

const { menuDataList: leftMenuDataList, routeMap, getMenuItem } = resolveMenu(leftMenuConfig);

/**
 * 应用
 */
function App() {
    let [menuDataList, setMenuDataList] = useState(leftMenuDataList);
    let [component, setComponent] = useState(<></>);
    const location = useLocation();
    useEffect(() => {
        try {
            const info = routeMap.get(location.pathname);
            loadAsyncComponent(info?.[1], setComponent);
            const newMenuDataList = JSON.parse(JSON.stringify(leftMenuDataList));
            const menuItem = getMenuItem(info[0], newMenuDataList);
            menuItem.sx ??= {};
            menuItem.sx.color = 'var(--mms-left-menu-text-color-active)';
            setMenuDataList(newMenuDataList);
        } catch (error) {
            console.log(error.message);
            setComponent(<_404 />);
        }
    }, [location.pathname]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{ height: '100vh' }}>
                <HeadNav />
                <Divider />
                <Stack direction="row" sx={{ flex: 1 }}>
                    <LeftMenu menuDataList={menuDataList} />
                    <Divider orientation='vertical' />
                    <MainView component={component} />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
