import * as Icons from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createElement, useState } from 'react';
import MenuItem from './MenuItem';
import styles from './SideMenu.module.css';

/**
 * 菜单数据
 *
 * @typedef {Object} MenuData
 * @property {string} title 菜单项标题
 * @property {string | undefined} icon 菜单项图标
 * @property {MenuData[] | undefined} subMenu 子菜单项
 * @property {import("@mui/system").SxProps<Theme> | undefined} param0.sx 样式参数
 */

/**
 * 子菜单
 *
 * @param {Object} param0
 * @param {MenuData} param0.title 菜单项标题
 * @param {string | undefined} param0.icon 菜单项图标
 * @param {MenuData[]} param0.menuDataList 菜单项列表
 */
function SubMenu({ title, icon, menuDataList, sx }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton sx={{ padding: 'var(--item-padding)' }} onClick={handleClick}>
                {icon && (
                    <ListItemIcon sx={{ minWidth: 'var(--item-min-width)' }}>
                        {createElement(Icons[icon], { color: 'normal', fontSize: 'small' })}
                    </ListItemIcon>
                )}
                <ListItemText primary={title} />
                <Icons.ExpandMore
                    className={open ? styles.expandOpen : styles.expand}
                    color="normal"
                    fontSize="small"
                />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menuDataList.map((menuData, index) =>
                        menuData.subMenu ? (
                            <SubMenu
                                key={index}
                                title={menuData.title}
                                icon={menuData.icon}
                                menuDataList={menuData.subMenu}
                            />
                        ) : (
                            <MenuItem key={index} title={menuData.title} icon={menuData.icon} sx={sx} />
                        )
                    )}
                </List>
            </Collapse>
        </>
    );
}

export default SubMenu;
