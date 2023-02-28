import { Box, List } from '@mui/material';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import styles from './LeftMenu.module.css';

/**
 * 侧边栏
 *
 * @param {Object} param0
 * @param {import("../../config/left-menu").MenuData[]} param0.menuDataList 菜单项列表
 */
function LeftMenu({ menuDataList }) {
    return (
        <Box className={styles.container}>
            <List>
                {menuDataList.map((menuData, index) =>
                    menuData.subMenu ? (
                        <SubMenu
                            key={index}
                            title={menuData.title}
                            icon={menuData.icon}
                            menuDataList={menuData.subMenu}
                            subSX={menuData.sx}
                        />
                    ) : (
                        <MenuItem key={index} title={menuData.title} icon={menuData.icon} path={menuData.path} />
                    )
                )}
            </List>
        </Box>
    );
}

export default LeftMenu;
