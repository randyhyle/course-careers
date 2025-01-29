function friends(people) {
    /*
    Loop through each person and check their "friends" list.
    For each friend in the list, check if the friendship is mutual:
    Look up the friend's object in people.
    Check if the current person's name is in the friend's "friends" list.
    Count loyal friends for each person.
    Find the person with the highest count and return their name.
    */

    loyal = 0
    most = ""

    for (let person of people) {
        let count = 0
        for (let friend of person.friends) {
            let friendObj = people.find(p => p.name === friend);

            if (friendObj && friendObj.friends.includes(person.name)) {
                count++;
            }

        }
        if (count > loyal) {
            loyal = count;
            most = person.name;
        }
    }
    return most
}

people = [
    {"name": "Tim", "friends": ["John", "Sally"]},
    {"name": "John", "friends": ["Tim", "Mike"]},
    {"name": "Mike", "friends": []},
    {"name": "Sally", "friends": ["Tim"]}
]

console.log(friends(people))