import { CssBaseline, Divider, Stack, ThemeProvider } from '@mui/material';
import HeadNav from './modules/HeadNav/HeadNav';
import SideMenu from './modules/SideMenu/SideMenu';
import theme from './theme/default';

const sideMenuData = [
    { title: '首页', icon: 'Home' },
    { title: '发布文章', icon: 'Send' },
    {
        title: '内容管理',
        icon: 'Stairs',
        subMenu: [{ title: '文章管理', icon: 'ArticleOutlined' }],
        sx: { pl: 4 }
    }
];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{ height: '100vh' }}>
                <HeadNav />
                <Divider />
                <Stack direction="row" sx={{ flex: 1 }}>
                    <SideMenu menuDataList={sideMenuData} />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
