import React from 'react'
import Header from '../../components/header/Header'
import styles from './details.module.css'
import { useLocation } from 'react-router-dom';
import DataCell from '../../components/data_cell/DataCell'
import InformationCard from '../../components/information_card/InformationCard';
function Details() {
    //Hook to get data information from url
    const { data } = useLocation();
    //Set person Information
    const person_Information = [
        { characteristic: "Eye Color", value: data.person.eyeColor },
        { characteristic: "Hair Color", value: data.person.hairColor },
        { characteristic: "Skin Color", value: data.person.skinColor },
        { characteristic: "Birth Year", value: data.person.birthYear },
    ];
    //Set vehicles data
    const vehicles = data.person.vehicleConnection.vehicles;
    //Map person information to component DataCell
    const informationToDataCell = (dataPerson) => {
        return dataPerson.map((information) => (
            <DataCell key={information.characteristic} characteristic={information.characteristic} detail={information.value}></DataCell>
        ));
    }
    //Map vehicles information to component DataCell
    const vehiclesToDataCell = (vehicles) => {
        if (vehicles.length === 0) {
            return (<DataCell key={"0"} characteristic={"None"} detail={""}></DataCell>);
        }
        return vehicles.map((vehicle) => (
            <DataCell key={vehicle.id} characteristic={vehicle.name} detail={""}></DataCell>
        ));
    }
    //Render Component
    return (
        <div className={styles.container}>
            <Header title={data.person.name} hasButtonBack={true} />
            <InformationCard title={"General Information"} content={informationToDataCell(person_Information)} />
            <InformationCard title={"Vehicles"} content={vehiclesToDataCell(vehicles)} />
        </div>
    )
}

export default Details
