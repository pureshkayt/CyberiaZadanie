import React from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../stores/ProjectStore';
import { Button, Container} from 'react-bootstrap';
import '../styles/_categories.scss';

const CategoryFilter = observer(() => {
    const handleCategoryClick = (category) => {
        if (projectStore.selectedCategory === category) {
            projectStore.setSelectedCategory(null);
        } else {
            projectStore.setSelectedCategory(category);
        }
    };

    return (
        <Container fluid className="category-filter">
            <div className="category-row">
                {projectStore.categories.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className={`category-button ${projectStore.selectedCategory === category ? 'active' : ''}`}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
        </Container>
    );
});

export default CategoryFilter;
