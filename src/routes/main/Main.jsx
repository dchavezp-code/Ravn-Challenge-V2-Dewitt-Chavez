import React from 'react';
import { useQuery, gql } from '@apollo/client';
const ALL_PEOPLE = gql`
    {
        allPeople{
            people{
                id
                name
            }
        }
    }
`;
function Main() {
    const { loading, error, data } = useQuery(ALL_PEOPLE);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Whoops... something is wrong!</p>
    return (
        <>
            <h2>Star Wars People</h2>
            {data.allPeople.people.map((people, id)=>(
                <p key={id}>
                    {people.name}
                </p>
            ))}
        </>
    )
}

export default Main
