import { Box, List } from '@mui/material';
import { useState } from 'react';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import styles from './LeftMenu.module.css';

/**
 * 侧边栏
 *
 * @param {Object} param0
 * @param {import("../../../config/left-menu").MenuData[]} param0.menuDataList 菜单项列表
 */
function LeftMenu({ menuDataList }) {
    let [expand, setExpand] = useState(true);
    return (
        <>
            <Box className={styles.container} style={expand ? null : { width: 0 }}>
                <Box className={styles.containerInner}>
                    <List>
                        {menuDataList.map((menuData) =>
                            menuData.subMenu ? (
                                <SubMenu
                                    key={menuData._id}
                                    title={menuData.title}
                                    icon={menuData.icon}
                                    menuDataList={menuData.subMenu}
                                    subSX={menuData.sx}
                                />
                            ) : (
                                <MenuItem
                                    key={menuData._id}
                                    title={menuData.title}
                                    icon={menuData.icon}
                                    path={menuData.path}
                                    sx={menuData.sx}
                                />
                            )
                        )}
                    </List>
                </Box>
            </Box>
            <Box className={styles.switch} sx={expand ? null : { left: 0 }} onClick={() => setExpand(!expand)}>
                <span className={styles.switchIcon}>{expand ? '<<' : '>>'}</span>
            </Box>
        </>
    );
}

export default LeftMenu;
