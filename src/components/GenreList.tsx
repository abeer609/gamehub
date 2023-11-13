import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    selectedGenre: Genre | null
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data } = useGenres()
    // if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize="2xl" marginBottom={2}>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem paddingY="5px" key={genre.id}>
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius="8px"
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant="link" fontSize="large">{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList