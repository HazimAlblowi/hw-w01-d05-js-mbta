    
const subwayLines = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
 }

const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    // check the validity of the inputs for the lines
    if ( !(startLine in subwayLines) || !(endLine in subwayLines)){
        return `Please enter valid lines.\n The avalible lines are Red, Green and Orange.`;
    }
    
    // check if the stops is correct for the lines
    if (!(subwayLines[startLine].includes(startStation))) {
        return `Start station is not in ${startLine} line.`;
    }
    if (!(subwayLines[endLine].includes(endStation))) {
        return `End station is not in ${endLine} line.`;
    }

    // save the indices in variables
    const startStationIndex = subwayLines[startLine].indexOf(startStation);
    const endStationIndex =  subwayLines[endLine].indexOf(endStation);
    const startLineInt = subwayLines[startLine].indexOf('Park Street');
    const endLineInt = subwayLines[endLine].indexOf('Park Street');

    let stops = 0;
    if ( startLine == endLine){
        stops = Math.abs( startStationIndex - endStationIndex);
        
        //print the lines and stops if the start line == end line 
        console.log(`Rider boards the train at ${startLine} Line and ${startStation}.`);
        for ( let i = startStationIndex; !(i == endStationIndex) ; startStationIndex > endStationIndex ? i-- : i++ ){
            console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine]
                [startStationIndex > endStationIndex ? i-1 : i+1]}.`);
        }
        console.log(`Rider exit the train at ${endLine} Line and ${endStation}.`);

    } else {
        stops = Math.abs( startStationIndex - startLineInt ) +
             Math.abs( endLineInt - endStationIndex);
        //print the lines and stops if start line !== end line
        console.log(`Rider boards the train at ${startLine} Line and ${startStation}.`);
        for ( let i = startStationIndex; !(i == startLineInt) ; startStationIndex > startLineInt ? i-- : i++ ){
            console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine]
                [startStationIndex > startLineInt ? i-1 : i+1]}.`);
        }
        console.log(`Rider transfers from ${startLine} line to ${endLine} line at ${subwayLines[endLine][endLineInt]}.`)
        for ( let i = endLineInt; !(i == endStationIndex) ; endLineInt > endStationIndex ? i-- : i++ ){
            console.log(`Rider arrives at ${endLine} Line and ${subwayLines[endLine]
                [endLineInt > endStationIndex ? i-1 : i+1]}.`);
        }
        console.log(`Rider exit the train at ${endLine} Line and ${endStation}.`);
    }
    
    return `${stops} stops.`;
}
