import { createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';

/** 基础主题 */
const BaseTheme = createTheme({
    // 调色板
    palette: {
        // 下划线
        divider: yellow[500]
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
