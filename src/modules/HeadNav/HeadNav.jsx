import { ExitToApp } from '@mui/icons-material';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import styles from './HeadNav.module.css';

/**
 * 头部导航
 */
function HeadNav() {
    return (
        <Box className={styles.container}>
            <AppBar position="static">
                <Toolbar>
                    <Box className={styles.logo} component="span">
                        管理系统
                    </Box>
                    <Stack sx={{ flex: 1 }}></Stack>
                    <IconButton edge="end" size="large" color="normal">
                        <ExitToApp fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeadNav;
