import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
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
                        <Button onClick={() => onSelectGenre(genre)} variant="link" fontSize="large">{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList