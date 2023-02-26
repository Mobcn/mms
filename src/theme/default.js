import { createTheme } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

/** 默认主题 */
const DefaultTheme = createTheme({
    // 调色板
    palette: {
        // 基本
        primary: {
            main: '#505860'
        },
        // 通常（自定义）
        normal: {
            main: grey[50]
        },
        // 下划线
        divider: yellow[500]
    },

    // 内置组件
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: 'var(--font-size)'
                }
            }
        }
    }
});

export default DefaultTheme;
