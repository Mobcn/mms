import { Box, Stack } from '@mui/material';

/**
 * 主视图
 */
function MainView({ component }) {
    return (
        <Stack
            sx={{
                flex: 1,
                backgroundColor: 'var(--mms-main-bg-color)',
                padding: 'var(--mms-main-padding)'
            }}
        >
            <Box
                sx={{
                    height: 0,
                    flex: 1,
                    borderRadius: 'var(--mms-border-radius-base)',
                    backgroundColor: 'var(--mms-color-white)',
                    overflow: 'hidden'
                }}
            >
                {component}
            </Box>
        </Stack>
    );
}

export default MainView;
