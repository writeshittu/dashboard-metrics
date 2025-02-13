import { Search, Bell, Sun, History, Bookmark } from 'lucide-react';
import { ActionButtons, HeaderContainer, SearchBar } from './styles';
import GroupIcon from '../../assets/GroupIcon';
import SearchIcon from '../../assets/SearchIcon';

const Header = () => {
  return (
    <HeaderContainer>
      <p>Dashboard</p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <SearchBar>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </SearchBar>
        <ActionButtons>
          <GroupIcon/>
        </ActionButtons>
      </div>
    </HeaderContainer>
  );
};

export default Header;