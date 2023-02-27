import { Box, Stack } from '@mui/material';

/**
 * 主界面
 */
function Main({ component }) {
    return (
        <Stack
            sx={{
                flex: 1,
                backgroundColor: 'var(--mms-main-bg-color)',
                padding: '0.3125rem'
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    borderRadius: 'var(--mms-border-radius-base)',
                    backgroundColor: 'var(--mms-color-white)'
                }}
            >
                {component}
            </Box>
        </Stack>
    );
}

export default Main;
