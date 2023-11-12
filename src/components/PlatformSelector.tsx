import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';

interface Props {
    selectedPlatform: Platform | null
    onSelectPlatform: (selectedPlatform: Platform) => void
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data, error } = usePlatform()
    if (error) return;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector