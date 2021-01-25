export default function createDivsForSpinner({ totalDivs }) {
    const Bars = [];
    for (let index = 0; index < totalDivs; index++) {
        Bars.push(<div></div>);
    }
    return (
        <>
            {Bars}
        </>
    );
}