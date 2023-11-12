import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
    const { data, error } = usePlatform()
    if (error) return;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector