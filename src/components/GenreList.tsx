import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"


const GenreList = () => {
    const { data, isLoading } = useGenres()
    if (isLoading) return <Spinner />
    return (
        <List>
            {data.map(genre => (
                <ListItem paddingY="5px" key={genre.id}>
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius="8px"
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize="large">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList