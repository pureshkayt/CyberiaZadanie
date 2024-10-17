import axios from 'axios';

const API_URL = 'https://api.test.cyberia.studio/api/v1';

export const fetchProjects = () => axios.get(`${API_URL}/projects`);
export const fetchCategories = () => axios.get(`${API_URL}/project-categories`);
export const sendFeedback = (formData) => axios.post(`${API_URL}/feedbacks`, formData);
