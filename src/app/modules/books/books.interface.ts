export interface IBook {
  id: string;
  isbn?: string | null;
  title: string;
  author: string;
  publisher?: string | null;
  publishedYear?: number | null;
  genre?: string | null;
  description?: string | null;
  price: number;
  totalCopies: number;
  availableCopies: number;
  language: string;
  pages?: number | null;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
