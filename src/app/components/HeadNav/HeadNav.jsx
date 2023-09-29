import { ExitToApp } from '@mui/icons-material';
import { AppBar, Box, Divider, IconButton, Stack, Toolbar } from '@mui/material';
import styles from './HeadNav.module.css';

/**
 * 头部导航
 */
function HeadNav() {
    const goHome = () => (window.location.href = '/');
    return (
        <Box>
            <AppBar
                sx={{
                    color: 'var(--mms-head-nav-text-color)',
                    backgroundColor: 'var(--mms-head-nav-bg-color)'
                }}
                position="static"
            >
                <Toolbar>
                    <Stack className={styles.main}>
                        <img className={styles.logo} src="/public/favicon.png" onClick={goHome}></img>
                        <Divider className={styles.divider} orientation="vertical" />
                        <Box className={styles.title}>管理系统</Box>
                    </Stack>
                    <Stack sx={{ flex: 1 }}></Stack>
                    <IconButton className={styles.exit} edge="end" size="medium">
                        <ExitToApp fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeadNav;
