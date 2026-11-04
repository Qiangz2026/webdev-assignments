const number = parseInt(prompt("Enter the number of participants."));
const participants = [];
for(let i = 0; i < number; i++){
    const participant = prompt(`Enter the ${i+1} participant.`);
    participants.push(participant);
}
participants.sort();
let participantList = "";
for (participant of participants){
    participantList += `<li>${participant}</li>`;
}
document.querySelector("#target").innerHTML = participantList;