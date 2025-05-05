import axios from 'axios';
import { z, ZodError } from 'zod';

// Определение интерфейса и схемы альбома
const albumSchema = z.object({
    userId: z.number().int().positive(),
    id: z.number().int().positive(),
    title: z.string().min(1),
});

type Album = z.infer<typeof albumSchema>;

const albumsArraySchema = z.array(albumSchema);

async function fetchAndValidateAlbums(): Promise<Album[]> {
    try {
        const response = await axios.get<unknown>(
            'https://jsonplaceholder.typicode.com/albums'
        );

        // Валидация данных с помощью Zod
        const validatedData = albumsArraySchema.parse(response.data);

        console.log('Валидация данных успешна');
        console.log(`Получено ${validatedData.length} альбомов`);
        return validatedData;
    } catch (error) {
        if (error instanceof ZodError) {
            console.error('Ошибка валидации:');
            error.errors.forEach((err) => {
                console.error(`- ${err.path.join('.')}: ${err.message}`);
            });
        }
        else if (axios.isAxiosError(error)) {
            console.error('Ошибка запроса:', error.message);
        }
        else {
            console.error('Непредвиденная ошибка:', error instanceof Error ? error.message : String(error));
        }

        throw error;
    }
}

export default fetchAndValidateAlbums