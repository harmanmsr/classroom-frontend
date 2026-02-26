export const DEPARTMENTS = [
    'CS', 
    'Math', 
    'English'
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

const requireEnv = (key: string, value: string | undefined) => {
    if (!value) throw new Error(`Missing required env var: ${key}`);
    return value;
};

export const CLOUDINARY_UPLOAD_URL = requireEnv(
    "VITE_CLOUDINARY_UPLOAD_URL", import.meta.env.VITE_CLOUDINARY_UPLOAD_URL
);
export const CLOUDINARY_CLOUD_NAME = requireEnv(
    "VITE_CLOUDINARY_CLOUD_NAME", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
);
export const BACKEND_BASE_URL = requireEnv(
    "VITE_BACKEND_BASE_URL", import.meta.env.VITE_BACKEND_BASE_URL
);
 

export const BASE_URL = requireEnv(
    "VITE_BASE_URL", import.meta.env.VITE_BASE_URL
);
export const ACCESS_TOKEN_KEY = requireEnv(
    "VITE_ACCESS_TOKEN_KEY", import.meta.env.VITE_ACCESS_TOKEN_KEY
);
export const REFRESH_TOKEN_KEY = requireEnv(
    "VITE_REFRESH_TOKEN_KEY", import.meta.env.VITE_REFRESH_TOKEN_KEY
);
 
export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET = requireEnv(
    "VITE_CLOUDINARY_UPLOAD_PRESET", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
);