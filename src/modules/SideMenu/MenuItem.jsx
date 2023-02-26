import * as Icons from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createElement } from 'react';

/**
 * 菜单项
 *
 * @param {Object} param0
 * @param {MenuData} param0.title 菜单项标题
 * @param {string | undefined} param0.icon 菜单项图标
 * @param {import("@mui/system").SxProps<Theme> | undefined} param0.sx 样式参数
 */
function MenuItem({ title, icon, sx }) {
    return (
        <ListItemButton sx={{ padding: 'var(--item-padding)', ...sx }}>
            {icon && (
                <ListItemIcon sx={{ minWidth: 'var(--item-min-width)' }}>
                    {createElement(Icons[icon], { color: 'normal', fontSize: 'small' })}
                </ListItemIcon>
            )}
            <ListItemText primary={title} />
        </ListItemButton>
    );
}

export default MenuItem;
