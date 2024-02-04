MyJson = `{
    "students" : [
        {
            "name": "Debanjan",
            "roll": 21052978,
            "section": 13,
            "hobbies": ["drawing", "games"],
            "metadata": {
                "lastName": "Dhar",
                "age": 24
            }
        },
        {
            "name": "rishi",
            "roll": 21052916,
            "section": 28
        }
    ],
    "colleges" : [
        {
            "name": "KIIT",
            "branch": "cse"
        },
        {
            "name": "VIT",
            "branch": "IT"
        }
    ]
}`;

const parsed = JSON.parse(MyJson);
console.log(parsed);

console.log(parsed['colleges']);

console.log(parsed['colleges'][0]);

console.log(parsed['colleges'][0]['name']);

console.log(parsed['students'][0]);

console.log(parsed['students'][0]['hobbies']);

console.log(parsed['students'][0]['hobbies'][1]);

console.log(parsed['students'][0]['metadata']);

console.log(parsed['students'][0]['metadata']['age']);





