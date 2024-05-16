function createUserProfiles(originalNames, modifiedNames) {

    let userProfiles = [];

    
    for (let i = 0; i < originalNames.length; i++) {
    
        const userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1 
        };


        userProfiles.push(userProfile);
    }


    return userProfiles;
}


const originalNames = ["Alice", "Bob", "Charlie", "David"];
const modifiedNames = ["alice", "BOB", "charlie", "david"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

