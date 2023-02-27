import { Box } from '@mui/material';
import styles from './_404.module.css';

/**
 * 404页面
 */
function _404() {
    return (
        <Box className={styles.container}>
            <img className={styles._404Img} src="/public/404.png" referrerPolicy="no-referrer" />
            <Box className={styles._404Title}>小笨蛋，页面跑偏啦～</Box>
            <Box className={styles._404Tips}>你可以选择刷新页面或者返回主页</Box>
            <a className={styles.goHomeBtn} href="/">
                返回主页
            </a>
        </Box>
    );
}

export default _404;
