import React from 'react'
import { gql, useQuery } from '@apollo/client';
import PersonCell from '../../components/person_cell/PersonCell';
import { ListItem } from '@material-ui/core'
import LoadingIndicator from '../../components/loading_indicator/LoadingIndicator';
import { Waypoint } from 'react-waypoint'
import { NoticeFailedLoad } from '../../errors/notice_failed_load/NoticeFailedLoad';
//Query to get people of the Starwars
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
                eyeColor,
                hairColor,
                skinColor,
                birthYear,
                vehicleConnection{
                    vehicles{
                        id
                        name
                    }
                }
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
`;
//Function to show the data
export default function RetrievePeopleData({ first }) {

    const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_STARWARS_PEOPLE, {
        variables: { first },
        notifyOnNetworkStatusChange:true,
    });
    if (loading) return <LoadingIndicator />;
    if (error) return <NoticeFailedLoad message={"Failed to Load Data"}/>;
    return (
        <>
            {/*Map the data to Person Cell*/}
            {data.allPeople.people.map((person, id) => (
                <React.Fragment key={id}>
                    <ListItem>
                        <PersonCell person={person} />
                    </ListItem>
                    {(id === data.allPeople.people.length - 1) && (data.allPeople.pageInfo.hasNextPage) && 
                        (<Waypoint onEnter={
                            //Tried to concat prev result with new result but updateQuery is deprecated
                            //i did have problems with concatPagination and relayStylePagination from the documentation 
                            //because of that i used this alternative method
                            () => fetchMore({
                                variables:{
                                    first:data.allPeople.people.length+5,
                                    //after:data.allPeople.pageInfo.endCursor,
                                },
                            })
                        }/>)
                    }
                </React.Fragment>
            ))
            }
            {networkStatus===7&&(data.allPeople.pageInfo.hasNextPage)&&(<LoadingIndicator/>)}
        </>
    );
}