import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import category from './category' // importujemy nowy plik

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category], // dodajemy kategorię do listy
}