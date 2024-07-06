import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Badge, Button } from 'reactstrap';

export interface IFavoriteReposProps {
    // Define the props for the component here
}

interface IRepoProps {
    id: number;
    full_name: string;
    html_url: string;
    description: string;
    owner: IOwnerProps;
    topics: string[];
}

interface IOwnerProps {
    login: string;
    avatar_url: string;
    html_url: string;
}

const FavoriteRepos: React.FC<IFavoriteReposProps> = (props) => {
    const [repos, setRepos] = useState<IRepoProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchStarredRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/pember10/starred');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: IRepoProps[] = await response.json();
                setRepos(data);
            }
            catch (ex: any) {
                setError(ex.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchStarredRepos();
    }, []);

    const getRandomRepos = (repos: IRepoProps[], count: number): IRepoProps[] => {
        const shuffled = repos.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const getRandomTopics = (topics: string[], count: number): string[] => {
        const shuffled = topics.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const getColorFromIndex = (index: number): string => {
        const colors = ['primary', 'success', 'warning'];
        return colors[index];
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="section section-lg pt-lg-0 mt--200">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row className="row-grid">
                            {getRandomRepos(repos, 3).map((repo, index) => (
                                <Col lg="4" key={repo.id}>
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <img src={repo.owner.avatar_url} style={{width: '4rem'}} />
                                            <h6 className="text-primary text-uppercase">{repo.full_name}</h6>
                                            <p className="description mt-3">{repo.description}</p>
                                            <div>
                                                {getRandomTopics(repo.topics, 3).map((topic) => (
                                                    <Badge color={getColorFromIndex(index)} pill className="me-1" key={topic}>
                                                        {topic}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button
                                                className="mt-4"
                                                color={getColorFromIndex(index)}
                                                href={repo.html_url}
                                                onClick={(e) => { e.preventDefault(); window.open(repo.html_url, "_blank"); }}
                                            >
                                                Check it out
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FavoriteRepos;