import * as Icons from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createElement, useState } from 'react';
import MenuItem from './MenuItem';

/**
 * 子菜单
 *
 * @param {Object} param0
 * @param {MenuData} param0.title 菜单项标题
 * @param {string | undefined} param0.icon 菜单项图标
 * @param {import("../../../config/left-menu").MenuData[]} param0.menuDataList 菜单项列表
 * @param {import("@mui/system").SxProps<Theme> | undefined} param0.sx 样式参数
 * @param {import("@mui/system").SxProps<Theme> | undefined} param0.subSX 子菜单项样式参数
 */
function SubMenu({ title, icon, menuDataList, sx, subSX }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton sx={{ padding: 'var(--mms-left-menu-item-padding)', ...sx }} onClick={handleClick}>
                {icon && (
                    <ListItemIcon sx={{ color: 'inherit', minWidth: 'var(--mms-left-menu-item-icon-min-width)' }}>
                        {createElement(Icons[icon], { fontSize: 'small' })}
                    </ListItemIcon>
                )}
                <ListItemText primary={title} />
                <Icons.ExpandMore
                    sx={{
                        transform: `rotate(${open ? '180deg' : '0'})`,
                        transition: 'var(--mms-transition-all-fast)'
                    }}
                    fontSize="small"
                />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menuDataList.map((menuData) =>
                        menuData.subMenu ? (
                            <SubMenu
                                key={menuData._id}
                                title={menuData.title}
                                icon={menuData.icon}
                                menuDataList={menuData.subMenu}
                                sx={subSX}
                                subSX={menuData.sx}
                            />
                        ) : (
                            <MenuItem
                                key={menuData._id}
                                title={menuData.title}
                                icon={menuData.icon}
                                path={menuData.path}
                                sx={Object.assign({}, menuData.sx, subSX)}
                            />
                        )
                    )}
                </List>
            </Collapse>
        </>
    );
}

export default SubMenu;
