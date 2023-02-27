import * as Icons from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createElement } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 菜单项
 *
 * @param {Object} param0
 * @param {MenuData} param0.title 菜单项标题
 * @param {string | undefined} param0.icon 菜单项图标
 * @param {string} param0.path 菜单项路由
 * @param {import("@mui/system").SxProps<Theme> | undefined} param0.sx 样式参数
 */
function MenuItem({ title, icon, path, sx }) {
    const navigate = useNavigate();
    return (
        <ListItemButton sx={{ padding: 'var(--mms-side-menu-item-padding)', ...sx }} onClick={() => navigate(path)}>
            {icon && (
                <ListItemIcon sx={{ color: 'inherit', minWidth: 'var(--mms-side-menu-item-icon-min-width)' }}>
                    {createElement(Icons[icon], { fontSize: 'small' })}
                </ListItemIcon>
            )}
            <ListItemText primary={title} />
        </ListItemButton>
    );
}

export default MenuItem;
