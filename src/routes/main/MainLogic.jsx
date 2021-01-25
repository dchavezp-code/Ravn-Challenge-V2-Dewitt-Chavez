import { gql, useQuery } from '@apollo/client';
import PersonCell from '../../components/person_cell/PersonCell';
import {ListItem} from '@material-ui/core'
import LoadingIndicator from '../../components/loading_indicator/LoadingIndicator';
const GET_STARWARS_PEOPLE = gql`
    query getPeople($first:Int!){
        allPeople(first:$first){
            people{
                id
                name
                homeworld{
                    name
                }
                species{
                    name
                }
            }
        }
    }
`;
export default function RetrievePeopleData({ first }) {

    const { loading, error, data } = useQuery(GET_STARWARS_PEOPLE, {
        variables: { first },
    });
    if (loading) return <LoadingIndicator/>;
    if (error) return <p>Something, whent wrong</p>;
    return (
        <>
            {data.allPeople.people.map((person, id) => (
                <ListItem key={id}>
                    <PersonCell person={person}/>
                </ListItem>                
            ))
            }
        </>
    );
}