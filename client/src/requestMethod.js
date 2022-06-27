import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGYwZWE1NjhiNGE5N2ZhOTAyYmZjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0MzI3NSwiZXhwIjoxNjUzNzI5Njc1fQ.KqG4fZqev5SkzrMRshJZS2jNHyT2GDRr3-cKyi7N4tU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
  
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
  

