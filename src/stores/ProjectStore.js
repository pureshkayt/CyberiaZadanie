import { makeAutoObservable, action } from 'mobx';
import { fetchProjects, fetchCategories } from '../services/apiService';

class ProjectStore {
    projects = [];
    categories = [];
    selectedCategory = null;
    loading = true;
    error = null;

    constructor() {
        makeAutoObservable(this, {
            loadProjects: action,
            loadCategories: action,
            setSelectedCategory: action,
            setLoading: action,
            setError: action
        });
    }

    loadProjects() {
        this.setLoading(true);
        fetchProjects()
            .then((response) => {
                this.setProjects(response.data.items);
            })
            .catch((error) => {
                this.setError('Ошибка загрузки проектов');
            })
            .finally(() => {
                this.setLoading(false);
            });
    }

    loadCategories() {
        this.setLoading(true);
        fetchCategories()
            .then((response) => {
                const uniqueCategories = Array.from(new Set(response.data.items.map(item => item.id)))
                    .map(id => response.data.items.find(item => item.id === id));
                this.setCategories(uniqueCategories);
            })
            .catch((error) => {
                this.setError('Ошибка загрузки категорий');
            })
            .finally(() => {
                this.setLoading(false);
            });
    }


    setLoading(loading) {
        this.loading = loading;
    }

    setError(error) {
        this.error = error;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    setCategories(categories) {
        const uniqueCategories = Array.from(new Set(categories.map(category => category.id)))
            .map(id => categories.find(category => category.id === id));

        this.categories = uniqueCategories;
    }


    setSelectedCategory(category) {
        this.selectedCategory = category;
    }

    get filteredProjects() {
        if (!this.selectedCategory) {
            return this.projects;
        }

        return this.projects.filter(project =>
            project.categories.some(category => category.id === this.selectedCategory.id)
        );
    }
}

export const projectStore = new ProjectStore();
