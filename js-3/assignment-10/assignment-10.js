const numCandidates = parseInt(prompt("Enter the number of candidates:"));
const candidates = [];
for (let i = 1; i <= numCandidates; i++) {
    const name = prompt(`Name for candidate ${i}:`);
    candidates.push({
        name: name,
        votes: 0
    });
}
const numVoters = parseInt(prompt("Enter the number of voters:"));
for (let i = 1; i <= numVoters; i++) {
    const vote = prompt(`Voter ${i}, who will you vote for?`);
    if (vote == "") {
        continue; 
    }
    for (const candidate of candidates) {
    if (candidate.name == vote) {
        candidate.votes += 1; 
        break;                 
    }
    }
}
candidates.sort((a, b) => {
    return b.votes - a.votes;
})
const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");
for (const c of candidates) {
    console.log(`${c.name}: ${c.votes} votes`);
}
