import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '../custom_icons/SearchIcon';
import MeetIcon from '../custom_icons/MeetIcon';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export default function AppBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} sx={{ px: 0 }} onChange={handleChange}>
          <BottomNavigationAction icon={<SearchIcon />} />
          <BottomNavigationAction icon={<MeetIcon />} />
          <BottomNavigationAction icon={<TextsmsOutlinedIcon />} />
          <BottomNavigationAction icon={<PermIdentityOutlinedIcon />} />
        </BottomNavigation>
    );
}
