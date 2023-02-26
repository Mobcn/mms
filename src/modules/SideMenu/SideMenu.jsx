import { Box, List } from '@mui/material';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import styles from './SideMenu.module.css';

/**
 * 菜单数据
 *
 * @typedef {Object} MenuData
 * @property {string} title 菜单项标题
 * @property {string | undefined} icon 菜单项图标
 * @property {MenuData[] | undefined} subMenu 子菜单项
 * @property {import("@mui/system").SxProps<Theme> | undefined} sx 样式参数
 */

/**
 * 侧边栏
 *
 * @param {Object} param0
 * @param {MenuData[]} param0.menuDataList 菜单项列表
 */
function SideMenu({ menuDataList }) {
    return (
        <Box className={styles.container}>
            <List>
                {menuDataList.map((menuData, index) =>
                    menuData.subMenu ? (
                        <SubMenu
                            key={index}
                            title={menuData.title}
                            icon={menuData.icon}
                            sx={menuData.sx}
                            menuDataList={menuData.subMenu}
                        />
                    ) : (
                        <MenuItem key={index} title={menuData.title} icon={menuData.icon} />
                    )
                )}
            </List>
        </Box>
    );
}

export default SideMenu;
