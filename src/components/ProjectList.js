import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../stores/ProjectStore';
import { Card, Spinner, Row, Col } from 'react-bootstrap';
import '../styles/_projects.scss';
import CategoryFilter from "./CategoryFilter";

const ProjectList = observer(() => {
    useEffect(() => {
        projectStore.loadProjects();
        projectStore.loadCategories();
    }, []);

    return (
        <div className="container-fluid">
            <h2 className="section-title">Кейсы</h2>
            <CategoryFilter />
            <Row className="project-grid">
                {projectStore.loading ? (
                    <div className="loading-container">
                        <Spinner animation="border" role="status" className="loading-spinner" />
                    </div>
                ) : (
                    projectStore.filteredProjects.map((project, index) => (
                        <Col key={project.id} xs={12} sm={6} md={6} lg={6} xl={4} className="d-flex justify-content-center mb-4">
                            <Card className="project-item border-0">
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    className={`project-image ${index === 1 ? 'reversed-image' : ''} ${index === 2 ? 'zoom-slight' : ''} ${index === 5 ? 'zoom-strong' : ''}`}
                                />
                                <Card.Body className="overlay">
                                    <div className="overlay-icon">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24.9999" height="5.46874" rx="1"
                                                  transform="matrix(1 0 0 -1 0 24.9995)" fill="#2D76F9"/>
                                            <rect width="14.0625" height="5.46874" rx="1"
                                                  transform="matrix(1 0 0 -1 10.938 14.0625)" fill="#2D76F9"/>
                                            <rect width="24.9999" height="5.46874" rx="1"
                                                  transform="matrix(0 1 1 0 0 0.00012207)" fill="#2D76F9"/>
                                            <rect width="14.0625" height="5.46874" rx="1"
                                                  transform="matrix(0 1 1 0 10.938 0.00012207)" fill="#2D76F9"/>
                                        </svg>
                                    </div>
                                    <Card.Title className="project-title">{project.title}</Card.Title>
                                    <Card.Text className="project-description">Онлайн гипермаркет. Для компании были
                                        разработаны сайт и мобильное приложение и т.д.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
});

export default ProjectList;
