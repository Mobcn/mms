import { CssBaseline, Divider, Stack, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeadNav from './modules/HeadNav/HeadNav';
import SideMenu from './modules/SideMenu/SideMenu';
import Main from './modules/Main/Main';
import theme from './theme/theme-base';

const components = import.meta.glob('/src/**/*.jsx');
const sideMenuDataList = [
    { title: '首页', icon: 'Home', path: '/' },
    { title: '发布文章', icon: 'Send', path: '/publish' },
    {
        title: '内容管理',
        icon: 'Stairs',
        subMenu: [
            { title: '文章管理', icon: 'ArticleOutlined', path: '/management/article' },
            { title: '分类管理', icon: 'Category', path: '/management/category' },
            { title: '标签管理', icon: 'SellOutlined', path: '/management/tag' }
        ],
        sx: { pl: 4 }
    },
    {
        title: '系统设置',
        icon: 'Settings',
        subMenu: [
            { title: '常规设置', icon: 'TuneOutlined', path: '/setting/general' },
            { title: '上传设置', icon: 'Upload', path: '/setting/upload' }
        ],
        sx: { pl: 4 }
    }
];

function App() {
    let path = useLocation();
    let [component, setComponent] = useState(<></>);
    useEffect(() => {
        console.log(path);
        const url = '/src/components/404/_404.jsx';
        components[url]().then(({ default: asyncComponent }) => setComponent(asyncComponent));
    }, [path]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{ height: '100vh' }}>
                <HeadNav />
                <Divider />
                <Stack direction="row" sx={{ flex: 1 }}>
                    <SideMenu menuDataList={sideMenuDataList} />
                    <Main component={component} />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
