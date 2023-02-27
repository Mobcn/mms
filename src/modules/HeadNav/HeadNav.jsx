import { ExitToApp } from '@mui/icons-material';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import styles from './HeadNav.module.css';

/**
 * 头部导航
 */
function HeadNav() {
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
                    <Box className={styles.logo} component="span">
                        管理系统
                    </Box>
                    <Stack sx={{ flex: 1 }}></Stack>
                    <IconButton sx={{ color: 'inherit' }} edge="end" size="large">
                        <ExitToApp fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeadNav;
