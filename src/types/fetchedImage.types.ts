export type fetchedImage = {
    id: string;
    urls: {
        regular: string;
        full: string;
        small: string;
    };
    alt_description?: string;
    user: {
        first_name: string;
        last_name: string;
    };
};