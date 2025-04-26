import { fetchedImage } from "./fetchedImage.types";

export type appStoreTypes = {
    searchBoxValue: string;
    setSearchBoxValue: (value: string) => void;
    selectedImage: fetchedImage | null;
    setSelectedImage: (value: fetchedImage | null) => void

}