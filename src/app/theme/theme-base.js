import { createTheme } from '@mui/material';

/** 基础主题 */
const BaseTheme = createTheme({
    // 调色板
    palette: {
        // 下划线
        divider: 'var(--mms-divider-color)'
    },

    // 内置组件
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: 'var(--mms-font-size-base)'
                }
            }
        }
    }
});

export default BaseTheme;
