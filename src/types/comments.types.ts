
export type Comment = {
    id: string;
    user: {
      username: string;
      name: string;
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
    };
    content: string;
    created_at: string;
  };